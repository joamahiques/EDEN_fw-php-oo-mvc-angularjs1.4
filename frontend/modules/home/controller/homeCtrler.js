eden.controller('homeCtrler', function($scope, homes, modalServices){
        //console.log('homecontroller');
       
        $scope.homes = homes;

         $scope.dialog = function(home) {
            modalServices.openModal(home,'modal','read_modal');
        
      };
});
// eden.controller('menuCtrler', function($scope,$log,loginservices,services, modalServices,  $timeout){
//       //console.log('homecontroller');
     
//       loginservices.login();
//       $scope.dialogLogin = function() {
//             modalServices.openModalLogin();
        
//       };
//       $scope.toggled = function(open) {
//             $log.log('Dropdown is now: ', open);
//           };
//       $scope.logout = function() {
//             loginservices.logout();
//             loginservices.login();
//             $timeout(function(){
//                   location.href='#/';
//             },1000);
//             //console.log('logout');
//           };
// });

