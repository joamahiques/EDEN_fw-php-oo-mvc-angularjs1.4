eden.controller('clubruralCtrler',function($scope, $http,services,CommonServices,searchservices){
    $scope.items = '';
    $scope.site='';
    var idprovi;
    $http.get('backend/components/clubrural/resources/provinces.json').success(function(response) {
        angular.forEach(response, function(i, index){
            //console.log(index);
            if(index === searchservices.data.provincia){
                idprovi=i.id;
            }
        })
        if(idprovi){
            //por provincia
            services.get("components","clubrural","load_homes_provi",idprovi).then(function(response) {
                    //console.log(response);
                    lista = response.alojamiento.sort(function() {return Math.random() - 0.5});
                    $scope.homesclub=lista;
                    $scope.site='en '+response.alojamiento[0].provincia;
            })
        }else{
            //por geolocalización
            navigator.geolocation.getCurrentPosition(function(position){ 
                var num = CommonServices.numeroAleatorio(20,80);
                var latitude=position.coords.latitude;
                var longitude=position.coords.longitude;
                var data = JSON.stringify({"lat": latitude, "long": longitude,"dis": num});
            
            services.get("components","clubrural","load_homes_geo", data).then(function(response) {
                //console.log(response.alojamiento);
                    lista = response.alojamiento.sort(function() {return Math.random() - 0.5});
                    $scope.homesclub=lista;
                    $scope.site='a menos de '+num+ ' km de tí';
                })
            })   
        }
    });

    
});


  