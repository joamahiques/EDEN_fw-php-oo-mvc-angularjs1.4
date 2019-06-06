var eden = angular.module('myApp', ['ui.bootstrap']);

eden.controller('autocompleteController', function($scope, $http) {
  
  getCountries(); 
  
  function getCountries(){  
    $http.get("ajax/getCountries.php").success(function(data){
      console.log(data);
          $scope.countries = data;
         });
    };
    $scope.onSelect = function ($item) {
      console.log($item.nombre);
      $scope.item = $item.nombre;

  };
});
