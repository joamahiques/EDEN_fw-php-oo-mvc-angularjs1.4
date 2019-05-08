eden.controller('shopCtrler', function($scope, homes,commonServices, searchservices){
  console.log(searchservices);
  console.log(searchservices.data.provincia);
    $scope.provincia=searchservices.data.provincia;
    $scope.homes = homes;

     $scope.dialog = function(home) {
         commonServices.openModal(home,'modal','read_modal');
    
  };
});
eden.controller('modalController', function($scope, details){
console.log(details);
$scope.data=details;
})