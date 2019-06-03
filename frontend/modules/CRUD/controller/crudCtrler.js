eden.controller('crudCtrler', function($scope, homes, modalServices){
  if(homes){
    $scope.homescrud=homes; //console.log(homes);

    $scope.dialog = function(home) {
        modalServices.openModal(home,'modal','read_modal');
      };
    }
    $scope.deletehome = function(home){
      modalServices.openModaldelete(home);
    }
      
})
eden.controller('deletecrudCtrler', function($scope,home,modalServices,services,$route){
    $scope.namehouse=home;
    $scope.cancel = function(){
      modalServices.closeModal();
    }
    $scope.deletehomecon = function(){
      services.delete('crud','delete_home',home).then(function (response) {
        modalServices.closeModal();
        $route.reload();
      })
    }
})