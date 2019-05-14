eden.factory('loginservices',['$rootScope',
function($rootScope){
    var service={};
    service.login=login;
    return service;

    function login() {
    	var token =false //= localstorageService.getUsers();
        if (token) {
            services.get('login', 'typeuser',token).then(function (response) {
                if ((response.type === "client")||(response.type === "client_rs")) {
                    $rootScope.login = false;
                    $rootScope.profile = true;
                    $rootScope.crud = false;
	            } else if (response.type === "admin") {
                    $rootScope.login = false;
                    $rootScope.profile = true;
                    $rootScope.crud = true;
	            }else{
                    $rootScope.login = true;
                    $rootScope.crud = false;
                    $rootScope.profile = false;
                }
            });
        } else {
            $rootScope.login = true;
        }
    }

}]);