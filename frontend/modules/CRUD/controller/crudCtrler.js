eden.controller('crudCtrler', function($scope, homes, modalServices){
  if(homes){
    $scope.homescrud=homes; //console.log(homes);

    $scope.dialog = function(home) {
        modalServices.openModal(home,'modal','read_modal');
      };
    }
    $scope.deletehome = function(home){
      location.href="#/deletehome/:"+home;
    }
      
})
eden.controller('deletecrudCtrler', function($scope,home){
  
    console.log(home);
    $scope.namehouse=home;
  
})