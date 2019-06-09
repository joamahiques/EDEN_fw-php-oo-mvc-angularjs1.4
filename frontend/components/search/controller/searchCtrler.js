eden.controller('searchCtrler',function($scope, $http,services,$location,searchservices){
    
    $scope.selectedProvi = '';
    $scope.selectedLocal='';
    $scope.homes = '';
    getProvis(); 

    ///leer provincias de bd
  function getProvis(){  
    services.get('components', 'search','firstdrop').then(function (response) {
         $scope.provinces = response;
        
    });  
  }
  ///dependent dorpdown ciudades
  $scope.fetchlocal = function(){
    provincia=$scope.selectedProvi.provincia;
    services.get('components', 'search','seconddrop',provincia).then(function (response) {
      //console.log(response);
       $scope.local = response;
      
    });  
    
  } 
///autocomplete de las casas
  $scope.fetchhomes = function(){
    localidad=$scope.selectedLocal.localidad;
    services.get('components', 'search','autocomplete',localidad).then(function (response) {
      //console.log(response);
      //console.log(JSON.stringify(response));
      $scope.homes = response;
      
    });
  }
/////buscar y al shop
  $scope.searchresults = function(){
    searchservices.data.provincia=$scope.selectedProvi.provincia;
    searchservices.data.localidad=$scope.selectedLocal.localidad;
    if(!$scope.selectedhome){searchservices.data.home=undefined;}else{searchservices.data.home=$scope.selectedhome.nombre;}
    $scope.selectedProvi = '';
    $scope.selectedLocal='';
    $scope.selectedhome = '';
      location.href='#tienda';
  }

})