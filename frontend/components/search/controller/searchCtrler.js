eden.controller('searchCtrler',function($scope, $http,services,$location,searchservices){
    //console.log('search');
    
    
    $scope.selectedProvi = '';
    $scope.selectedLocal='';
    $scope.homes = '';
    getProvis(); 
  
  function getProvis(){  
    services.get('components', 'search','firstdrop').then(function (response) {
        //console.log(response);
         $scope.provinces = response;
        
    });  
  }

  $scope.fetchlocal = function(){
    provincia=$scope.selectedProvi.provincia;
    services.get('components', 'search','seconddrop',provincia).then(function (response) {
      //console.log(response);
       $scope.local = response;
      
    });  
    
  } 

  $scope.fetchhomes = function(){
    localidad=$scope.selectedLocal.localidad;
    services.get('components', 'search','autocomplete',localidad).then(function (response) {
      //console.log(response);
      //console.log(JSON.stringify(response));
      $scope.homes = response;
      
    });
  }
  $scope.searchresults = function(){
    searchservices.data.provincia=$scope.selectedProvi.provincia;
    searchservices.data.localidad=$scope.selectedLocal.localidad;
    if(!$scope.selectedhome){searchservices.data.home=undefined;}else{searchservices.data.home=$scope.selectedhome.nombre;}
    $scope.selectedProvi = '';
    $scope.selectedLocal='';
    $scope.selectedhome = '';
    // console.log(searchservices.data.provincia);
    // console.log(searchservices.data.localidad);
    // console.log(searchservices.data.home)
      location.href='#tienda';
  }

})