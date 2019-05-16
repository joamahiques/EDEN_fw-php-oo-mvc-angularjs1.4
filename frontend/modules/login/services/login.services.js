eden.factory('loginservices',['$rootScope','localstorageServices','services',
function($rootScope,localstorageServices,services){
    var service={};
    service.login=login;
    service.logout=logout;
    return service;

    function login() {
    	var token = localstorageServices.getuser();
        if (token) {
            services.get('login', 'controluser', token).then(function (response) {
                console.log(response);
                response= response[0];
                $rootScope.avatar = response.avatar;
                $rootScope.user = response.user;
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
            $rootScope.profile = false;
        }
    }
    function logout(){
        var token = localstorageServices.getuser();
        services.get('login', 'logout', token).then(function (response) {
            if(response='ok'){
                localstorageServices.clearuser();
            }
        
        });
    }

}]);