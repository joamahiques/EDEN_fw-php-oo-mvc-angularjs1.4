eden.factory('geoapiServices', ['$http','$q', 'services',
function($http,$q,services){
    var service = {};
    service.loadprovince = loadprovince;
    service.loadcity = loadcity;
    //service.addfavorite = addfavorite;
    return service;

    function loadprovince(){
        var defered=$q.defer();
        var promise=defered.promise;
            $http({
                  method: 'GET',
                  url: "http://apiv1.geoapi.es/provincias?type=JSON&key="+keygeo+"&sandbox=0"
              }).success(function(data, status, headers, config) {
                 if(data.data.length == '0'){/////////si esta vacio cargamos de xml
                    console.log('xml');
                    services.get("components","geoapi","load_provinces", data).then(function(response) {
                            defered.resolve(response); 
                    })
                }else{
                    defered.resolve(data.data);                    
                }
              }).error(function(data, status, headers, config) {
                services.get("components","geoapi","load_provinces", data).then(function(response) {
                    console.log('xml');
                        defered.resolve(response); 
                    })
              });
        return promise;
    }

    function loadcity(provi){
        var defered=$q.defer();
        var promise=defered.promise;
        console.log(provi);
        provi=provi.CPRO
            $http({
                  method: 'GET',
                  url: "http://apiv1.geoapi.es/municipios?CPRO="+provi+"&type=JSON&key="+keygeo+"&sandbox=0"
              }).success(function(data, status, headers, config) {
                  //console.log(data.data);
                 if(data.data.length == '0'){/////////si esta vacio cargamos de xml
                    console.log('xml');
                    services.get("components","geoapi","load_cities", provi).then(function(response) {
                            defered.resolve(response); 
                    })
                }else{
                    defered.resolve(data.data);                    
                }
              }).error(function(data, status, headers, config) {
                console.log('xml');
                services.get("components","geoapi","load_cities", provi).then(function(response) {
                        defered.resolve(response); 
                })
              });
        return promise;
    }

}]);