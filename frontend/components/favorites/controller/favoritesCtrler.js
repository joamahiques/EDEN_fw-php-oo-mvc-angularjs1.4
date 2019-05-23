eden.controller('homeCtrler', function($scope, modalServices, services,$timeout, CommonServices){

    $scope.addfavorites = function(){
        CommonServices.addfavorite(home);
    }

})