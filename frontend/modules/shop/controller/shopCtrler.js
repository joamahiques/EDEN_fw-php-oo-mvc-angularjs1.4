eden.controller('shopCtrler', function($scope, homes,commonServices){
    //console.log('homecontroller');
    $scope.homes = homes;

     $scope.dialog = function(home) {
         commonServices.openModal(home,'modal','read_modal');
    
  };
});
eden.controller('modalController', function($scope, details){
console.log(details);
$scope.data=details;
})