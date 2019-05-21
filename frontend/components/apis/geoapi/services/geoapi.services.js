eden.factory('geoapiServices', ['services','$rootScope','localstorageServices','$http','$q',
function(services,$rootScope,localstorageServices,$http,$q){
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
                  //console.log(data.data);
                 if(data.data.length == '0'){/////////si esta vacio cargamos de xml
                    //load_provinces_xml();
                }else{
                    defered.resolve(data.data);                    
                }
              }).error(function(data, status, headers, config) {
                //load_provinces_xml();
                 //defered.reject(data);
              });
        return promise;
    }

    function loadcity(provi){
        var defered=$q.defer();
        var promise=defered.promise;
        provi=provi.CPRO
            $http({
                  method: 'GET',
                  url: "http://apiv1.geoapi.es/municipios?CPRO="+provi+"&type=JSON&key="+keygeo+"&sandbox=0"
              }).success(function(data, status, headers, config) {
                  //console.log(data.data);
                 if(data.data.length == '0'){/////////si esta vacio cargamos de xml
                    // load_cities_xml(provi);
                }else{
                    defered.resolve(data.data);                    
                }
              }).error(function(data, status, headers, config) {
                //load_cities_xml(provi);
                 //defered.reject(data);
              });
        return promise;
    }


}]);