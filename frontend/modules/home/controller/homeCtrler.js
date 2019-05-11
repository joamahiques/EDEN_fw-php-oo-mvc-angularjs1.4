eden.controller('homeCtrler', function($scope, homes, modalServices){
        //console.log('homecontroller');
       
        $scope.homes = homes;

         $scope.dialog = function(home) {
            modalServices.openModal(home,'modal','read_modal');
        
      };
});

