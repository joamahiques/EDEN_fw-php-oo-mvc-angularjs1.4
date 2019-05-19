
eden.controller('shopCtrler', function($scope, homes,modalServices, searchservices){

    $scope.provincia=searchservices.data.provincia;
    $scope.localidad=searchservices.data.localidad;
    $scope.homesearch=searchservices.data.home;
    $scope.homes = homes;

     $scope.dialog = function(home) {
         modalServices.openModal(home,'modal','read_modal');
    
  };
});

eden.controller('mapshopCtrler', function(searchservices,$rootScope, ubication_map,services,$scope, modalServices){
  
      $scope.dialog = function(home) {
        modalServices.openModal(home,'modal','read_modal');

    };
  
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