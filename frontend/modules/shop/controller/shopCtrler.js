
eden.controller('shopCtrler', function($scope, homes,modalServices, searchservices, favoritesServices){

    $scope.provincia=searchservices.data.provincia;
    $scope.localidad=searchservices.data.localidad;
    $scope.homesearch=searchservices.data.home;
    $scope.homes = homes;
    favoritesServices.readfavorites();
    $scope.addfavorites = function(home){
      favoritesServices.addfavorite(home);
    }
     $scope.dialog = function(home) {
         modalServices.openModal(home,'modal','read_modal');
    
  };
  $scope.pageChange = function() {
    favoritesServices.readfavorites();
  }
});

eden.controller('mapshopCtrler', function(searchservices, ubication_map,services,$scope, modalServices,favoritesServices){
  
    $scope.dialog = function(home) {
      modalServices.openModal(home,'modal','read_modal');

    };
    $scope.addfavorites = function(home){
      favoritesServices.addfavorite(home);
    }

      if(searchservices.data.provincia){
        ubi={'ubi':searchservices.data.provincia,'muni':searchservices.data.localidad}
      }else{
        ubi={'ubi':'España'}
      }
      ubi=JSON.stringify(ubi);
      services.get('shop','ubication',ubi).then(function (response) {
          $scope.ubicacion=response['loc'];
          ubication_map.initmap1(searchservices,response);  
      }); 
  
})