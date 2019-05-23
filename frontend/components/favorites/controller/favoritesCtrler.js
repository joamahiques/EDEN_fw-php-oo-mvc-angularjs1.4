eden.controller('homeCtrler', function($scope, modalServices, services,$timeout, favoritesServices){

    $scope.addfavorites = function(){
        favoritesServices.addfavorite(home);
    }

})