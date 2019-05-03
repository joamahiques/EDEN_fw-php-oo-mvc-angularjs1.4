eden.controller('homeCtrler', function($scope, $http, ngDialog,services){
        //console.log('homecontroller');
        $scope.items = [];
        //$scope.loading = true;
        services.post('home', 'scroll_home').then(function (response) {
            //console.log(response);
            $scope.homes = response;
        });
        // $http({
        //     method: 'POST',
        //     url: '/www/EDEN_ANGULARJS/backend/index.php?module=home&function=scroll_home'
        //  }).then(function (response){
        //     $scope.homes = response.data;
        //      //$scope.loading = false;
        //  },function (error){
      
        //  });

         $scope.dialog = function($scope) {
            ngDialog.open({
            template: 'frontend/components/modal/view/modal.view.html',
            className: 'ngdialog-theme-default',
           // controller: 'modalCtrler',
            scope: $scope,
        });
      };
});

