eden.controller('modalController', function($scope, details){
    console.log(details);
    $scope.data=details;

    $scope.dialog = function(home) {
        modalServices.openModal(home,'modal','read_modal');
    
  };

  $scope.dialogLogin = function() {
    modalServices.openModalLogin();

};

})

// eden.controller('modalLoginController', function($scope){
//       //console.log(details);
      
  
//       $scope.dialogLogin = function() {
//           $scope.register=false;
//           modalServices.openModalLogin();
      
//     };
//     $scope.tabregister = function() {/// pestaña de new acoutn
//         $scope.register=true;
//         $scope.login=false;
//     }
//     $scope.tablogin = function() {// pestaña de login
//         $scope.register=false;
//         $scope.login=true;
//     }
  
// })

