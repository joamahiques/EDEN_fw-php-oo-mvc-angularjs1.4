eden.controller('modalController', function($scope, details){
    console.log(details);
    $scope.data=details;

    $scope.dialog = function(home) {
        modalServices.openModal(home,'modal','read_modal');
    
  };

    })

