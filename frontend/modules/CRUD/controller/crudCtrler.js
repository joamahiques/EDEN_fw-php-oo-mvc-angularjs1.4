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
eden.controller('createcrudCtrler', function($scope,geoapiServices,services,$route,$rootScope){
//   if($rootScope.type!='admin'){
//     location.href = '#/';
// }
$scope.newhome={
  name:'',
  provi:'',
  city:'',
  proviselected:'Escoja una provincia',
  cityselected:'Escoja una población',
  price:'',
  proname:'',
  dni:'',
  email:'',
  tf:'',
  capacity:'',
  rooms:'',
  comp:'',
  services:{},
  activities:{},
  datecons:''

}
geoapiServices.loadprovince()
    .then( function(response){
        //to Upercase si viene de xml
        angular.forEach(response, function (value, key) {
            response[key].PRO=response[key].PRO.toUpperCase();
        })
        $scope.provinces=response;
    });
     //////////cities
     $scope.loadcity = function(){
      var provi=$scope.newhome.provi;
      //console.log(provi);
      geoapiServices.loadcity(provi)
      .then( function(response){
          //to Upercase si viene de xml
          angular.forEach(response, function (value, key) {
              response[key].DMUN50=response[key].DMUN50.toUpperCase();
          })
          $scope.newhome.cityselected = 'Escoja una población';
          //console.log(response);
          $scope.cities=response;
      })

  }

    $scope.registerhome = function(){
      
      console.log($scope.newhome);
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