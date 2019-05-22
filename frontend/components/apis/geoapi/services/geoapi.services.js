eden.factory('geoapiServices', ['$http','$q',
function($http,$q){
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
                    //defered.resolve(load_provinces_xml());
                }else{
                    defered.resolve(data.data);                    
                }
              }).error(function(data, status, headers, config) {
                console.log('xml1');
                //defered.resolve(load_provinces_xml());
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

    // function load_provinces_xml() {
    //     //console.log('province');
    //     $http({
    //         method  : 'post',
    //         url     : 'http://localhost/www/EDEN_ANGULAJS/backend/resources/provinciasypoblaciones.xml',
    //         timeout : 10000,
    //         params  : {},  // Query Parameters (GET)
    //         transformResponse : function(data) {
    //             // string -> XML document object
    //             return data;
    //         }
    //     }).success(function(data, status, headers, config) {
    //         console.dir(data);  // XML document object
    //         //$scope.xml = data.documentElement.innerHTML;
    //     }).error(function(data, status, headers, config) {
    //         alert('通信に失敗しました.');
    //     });
        // $http({
        //     method: 'POST',
        //     url: "http://localhost/www/EDEN_ANGULAJS/backend/resources/provinciasypoblaciones.xml"
        // })
        // .success(function(data, status, headers, config) {
        //     console.log(data);
        //     return data;
        // })
        // .error(function(data) {
        //     alert( "error load_provinces" );
        // });
    // }

    // function load_cities_xml(prov) {
    //     $.post("http://localhost/www/EDEN_ANGULARJS/resources/provinciasypoblaciones.xml", function (xml) {
    //         $("#selcity").empty();
    //         $("#selcity").append('<option value="" selected="selected">Selecciona Municipio</option>');
    
    //         $(xml).find('provincia[id=' + prov + ']').each(function(){
    //             $(this).find('localidad').each(function(){
    //                  $("#selcity").append("<option value='" + $(this).text().toUpperCase() + "'>" + $(this).text().toUpperCase() + "</option>");
    //             });
    //         });
    //     })
    //     .fail(function() {
    //         alert( "error load_cities" );
    //     });
    // }

}]);