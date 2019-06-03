eden.controller('crudCtrler', function($scope, homes, modalServices,services){

    $scope.homescrud=homes; //console.log(homes);
    $scope.dialog = function(home) {
        modalServices.openModal(home,'modal','read_modal');
      };
})