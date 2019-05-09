eden.controller('shopCtrler', function($scope, homes,commonServices, searchservices){
  console.log(searchservices);
  console.log(searchservices.data.provincia);
    $scope.provincia=searchservices.data.provincia;
    $scope.localidad=searchservices.data.localidad;
    $scope.homesearch=searchservices.data.home;
    $scope.homes = homes;

     $scope.dialog = function(home) {
         commonServices.openModal(home,'modal','read_modal');
    
  };
});
// eden.controller('modalController', function($scope, details){
// console.log(details);
// $scope.data=details;
// })

eden.controller('mapshopCtrler', function(searchservices, ubication_map,services){
  console.log(searchservices);
  //ubication_map.initmap1(searchservices,ubic);

      if(searchservices.data.provincia){
        ubi={'ubi':searchservices.data.provincia,'muni':searchservices.data.localidad}
      }else{
        ubi={'ubi':'España'}
      }
  ubi=JSON.stringify(ubi);
  console.log(ubi);
services.get('shop','ubication',ubi).then(function (response) {
  console.log(response);
   //ubic=JSON.parse(response);
  // $('#h2local').html(ubic['loc']);
   ubication_map.initmap1(searchservices,response);
   
  
}); 
  
})