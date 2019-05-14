eden.controller('clubruralCtrler',function($scope, $http,services,$location,searchservices){
    $scope.items = '';
    $http.get('frontend/components/apis/clubrural/resources/provinces.json').success(function(response) {
        angular.forEach(response, function(i, index){
        
            if(index === searchservices.data.provincia){
                var idprovi=i.id;
                $http.get("https://api.clubrural.com/api.php?claveapi="+keyclub+"&type=provincias&idprov="+idprovi).success(function(response) {
                    console.log(response);
                    
              
                   // $scope.items=response.alojamiento;
                })
            }else{
                //console.log('nothing');
            }
        })
        //return response.data;
    });

    
});


  