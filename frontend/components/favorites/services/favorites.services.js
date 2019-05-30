eden.factory('favoritesServices', ['services','$rootScope','localstorageServices', 'toastr','$document',
function(services,$rootScope,localstorageServices,toastr,$document){
    var service = {};
    service.readfavorites = readfavorites;
    service.addfavorite = addfavorite;
    return service;
    function readfavorites(){
        var token = localstorageServices.getuser();
        if(token){
            services.get('components', 'favorites','read_favorites',token).then(function (response) {
                //console.log(response);
                angular.forEach(response,function(value, key){
                    var myElement=document.getElementById(value.nombre);
                      if(myElement){  
                          myElement.className='fas fa-heart';
                      }
                })                
            });
        }
    }

    function addfavorite(home){
            if(localStorage.token){
                var token = localstorageServices.getuser();
                var myElement=document.getElementById(home);
                data={'id':home,'tok':token};
                var data = JSON.stringify(data);
                if(myElement.className=='fas fa-heart'){
                    myElement.className='far fa-heart';
                    services.post1('components','favorites','delete_favorites',data).then(function (response) {
                    });
                }else{
                    myElement.className='fas fa-heart';
                    services.post1('components','favorites','favorites',data).then(function (response) {
                    });
                }
            }else{
                toastr.info('Regístrate para añadir favoritos','INFO');
            }
    }
}])

