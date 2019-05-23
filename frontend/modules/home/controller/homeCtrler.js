eden.controller('homeCtrler', function($scope, modalServices, services,$timeout, favoritesServices){
        //console.log('homecontroller');
      //   $scope.homes = homes;
    
        $scope.row = 0;
        $scope.rowperpage = 6;
        $scope.homes = [];
        $scope.busy = false;
        $scope.loading = false;

        $scope.loadMore = function(){

            if ($scope.busy) return;
          
              $scope.busy = true;
              services.post('home', 'scroll_home',{row:$scope.row,rowperpage:$scope.rowperpage})
              .then(function successCallback(response) {
                    console.log(response);
                  if(response !='' ){
                        // New row value 
                        $scope.row+=$scope.rowperpage;
                        $scope.loading = true;
                        $timeout(function() {
                           $scope.$apply(function(){
                             // Assign response to posts Array 
                             angular.forEach(response,function(item) {
                                $scope.homes.push(item);
                             });
                             favoritesServices.readfavorites();
                             $scope.busy = false;
                             $scope.loading = false;
                           });
               
                        },500);
                     }
              });
            }
          
            // Call function
            $scope.loadMore();
          
          $scope.addfavorites = function(home){
            favoritesServices.addfavorite(home);
          }

         $scope.dialog = function(home) {
            modalServices.openModal(home,'modal','read_modal');
        
      };
});
