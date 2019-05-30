eden.factory('loginservices',['$rootScope','localstorageServices','services','toastr','$route',
function($rootScope,localstorageServices,services,toastr,$route){
    var service={};
    service.login=login;
    service.logout=logout;
    return service;

    function login() {
        var token = localstorageServices.getuser();
        if($rootScope.cartlength && $rootScope.cartlength!=0){
            $rootScope.cartlength=$rootScope.cartlength; //si el cliente habia puesto algo en el carrito antes de loguearse
        }else{
            
            $rootScope.cartlength=0;
        }
        if (token) {
            services.post("login", "controluser", JSON.stringify({'token': token})).then(function (response) {
                response = response[0];
                $rootScope.avatar = response.avatar;
                $rootScope.user = response.user;
                $rootScope.type = response.type;
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

    function logout(){ ////viene del controlador del menu
        var token = localstorageServices.getuser();
        services.post("login", "logout", JSON.stringify({'token': token})).then(function (response) {
            if(response=='ok'){
                if($rootScope.type=="client_rs"){
                    localstorageServices.clearuser();
                    delete $rootScope.avatar;
                    delete $rootScope.user;
                    delete $rootScope.type;
                    var webAuth = new auth0.WebAuth({
                        domain:       authdomain,
                        clientID:     authclientID
                    });
                    webAuth.logout({
                        returnTo: authredirect,
                        client_id: authclientID
                    });
                }else{
                    localstorageServices.clearuser();
                    delete $rootScope.avatar;
                    delete $rootScope.user;
                    delete $rootScope.type;
                    toastr.info('Sesión cerrada correctamente', 'BYE!');
                    $route.reload();
                }
                 
            }else{
                toastr.info('Sesión cerrada correctamente', 'BYE!');
            }
            
        
        });
        localStorage.removeItem('token');    
    }
}]);