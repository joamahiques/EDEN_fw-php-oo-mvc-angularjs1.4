eden.factory('CommonServices', ['services','$rootScope','localstorageServices', 
function(services,$rootScope,localstorageServices){
    var service = {};
    service.readfavorites = readfavorites;
    //service.addfavorite = addfavorite;
    return service;

    function readfavorites(){
        var token = localstorageServices.getuser();
        if(token){
            services.get('components', 'favorites','read_favorites',token).then(function (response) {
                console.log(response);
                angular.forEach(response,function(value, key){
                    console.log(value.nombre);
                    var cor = angular.element(document.getElementById(value.nombre));
                    if(value.nombre==document.getElementById(value.nombre)){
                        document.getElementById(value.nombre).className='fas fa-heart';
                    }
                    console.log(cor);
                })
                 //$scope.provinces = response;
                
            });
        }
    }
}])