eden.controller('homeCtrler', function($scope, homes, modalServices){
        //console.log('homecontroller');
       
        $scope.homes = homes;

         $scope.dialog = function(home) {
            modalServices.openModal(home,'modal','read_modal');
        
      };
});
eden.controller('menuCtrler', function($scope,loginservices,modalServices){
      //console.log('homecontroller');
     
      loginservices.login();
      $scope.dialogLogin = function() {
            modalServices.openModalLogin();
        
      };
});

