eden.factory('loginservices',['$rootScope','localstorageServices','services','toastr','favoritesServices','$route',
function($rootScope,localstorageServices,services,toastr,favoritesServices,$route){
    var service={};
    service.login=login;
    service.logout=logout;
    var data={};
    return service;

    function login() {
        var token = localstorageServices.getuser();
        //console.log(token);
        if (token) {
            services.post("login", "controluser", JSON.stringify({'token': token})).then(function (response) {
            // services.get1('login', 'controluser', token).then(function (response) {
                //console.log(response);
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
        //console.log(token);
        services.post("login", "logout", JSON.stringify({'token': token})).then(function (response) {
           // console.log(response);
            if(response='ok'){
                
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
                //console.log(response);
            }
            
        
        });
        localStorage.removeItem('cart');    
    }
}]);