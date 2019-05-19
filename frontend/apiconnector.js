eden.factory("services", ['$http','$q', function ($http, $q) {
    var serviceBase = '/www/EDEN_ANGULARJS/backend/index.php?module=';
    var obj = {};

        obj.get = function (module, functi) {
            var defered=$q.defer();
            var promise=defered.promise;
            $http({
                  method: 'GET',
                  url: serviceBase + module + '&function=' + functi
              }).success(function(data, status, headers, config) {
                 defered.resolve(data);
              }).error(function(data, status, headers, config) {
                 defered.reject(data);
              });
            return promise;
        };

        obj.get1 = function (module, functi, dada) {
           console.log(dada);
           $dada=dada;
            var defered=$q.defer();
            var promise=defered.promise;
            $http({
                  method: 'GET',
                  url: serviceBase + module + '&function=' + functi + '&aux=' + $dada
              }).success(function(data, status, headers, config) {
                 console.log(data);
                 defered.resolve(data);
              }).error(function(data, status, headers, config) {
                  console.log(data);
                 defered.reject(data);
              });
            return promise;
        };
        ///////////para components, module=components
        obj.get = function (module, functi, dada, dada2) {
         console.log('get2');
            var defered=$q.defer();
            var promise=defered.promise;
            $http({
                  method: 'GET',
                  url: serviceBase + module + '&function=' + functi + '&aux=' + dada + '&aux2=' + dada2
              }).success(function(data, status, headers, config) {
               console.log(serviceBase + module + '&function=' + functi + '&aux=' + dada + '&aux2=' + dada2);
               //console.log(data);
                 defered.resolve(data);
              }).error(function(data, status, headers, config) {
                 defered.reject(data);
              });
            return promise;
        };

        obj.post = function (module, functi, dada) {
          var defered=$q.defer();
          var promise=defered.promise;
          $http({
                method: 'POST',
                url: serviceBase + module + '&function=' + functi,
                data:dada
            }).success(function(data, status, headers, config) {
      	       console.log(serviceBase + module + '&function=' + functi);
              //debugger;
               defered.resolve(data);
            }).error(function(data, status, headers, config) {
               defered.reject(data);
            });
          return promise;
        };

        obj.put = function (module, functi, dada) {
          var defered=$q.defer();
          var promise=defered.promise;
          $http({
                method: 'PUT',
                url: serviceBase + module + '&function=' + functi,
                data: dada
            }).success(function(data, status, headers, config) {
      	       defered.resolve(data);
            }).error(function(data, status, headers, config) {
               defered.reject(data);
            });
          return promise;
        };

        obj.delete = function (module, functi, dada) {
            var defered=$q.defer();
            var promise=defered.promise;
            $http({
                  method: 'DELETE',
                  url: serviceBase + module + '&function=' + functi + '&param=' + dada
              }).success(function(data, status, headers, config) {
                 //console.log(data);
                 defered.resolve(data);
              }).error(function(data, status, headers, config) {
                 defered.reject(data);
              });
            return promise;
        };
        
    return obj;
}]);