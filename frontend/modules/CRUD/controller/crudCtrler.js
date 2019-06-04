eden.controller('crudCtrler', function($scope, homes, modalServices,$rootScope){
  // if($rootScope.type!='admin'){
  //                       location.href = '#/';
  //                   }
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
//////delete
eden.controller('createcrudCtrler', function($scope,modalServices,services,$route,$rootScope){
//   if($rootScope.type!='admin'){
//     location.href = '#/';
// }
$scope.newhome={
  name:'',
}
    $scope.registerhome = function(){
      
      console.log($scope.newhome.name);
    }
})

//////delete
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