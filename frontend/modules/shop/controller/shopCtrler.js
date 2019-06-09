
eden.controller('shopCtrler', function($scope, homes,modalServices, searchservices, favoritesServices){

    $scope.provincia=searchservices.data.provincia;
    $scope.localidad=searchservices.data.localidad;
    $scope.homesearch=searchservices.data.home;
    $scope.homes = homes;
    favoritesServices.readfavorites();//pintamos favoritos
    $scope.addfavorites = function(home){//añadir o quitar favoritos
      favoritesServices.addfavorite(home);
    }
     $scope.dialog = function(home) {/// details
         modalServices.openModal(home,'modal','read_modal');
    
  };
  $scope.pageChange = function() {//cuando cambiamos de página leemos favoritos
    favoritesServices.readfavorites();
  }
});

eden.controller('mapshopCtrler', function(searchservices, ubication_map,services,$scope, modalServices,favoritesServices){
  
    $scope.dialog = function(home) { //details
      modalServices.openModal(home,'modal','read_modal');

    };
    $scope.addfavorites = function(home){
      favoritesServices.addfavorite(home);
    }

      if(searchservices.data.provincia){ //si hay provincia y/o localidad filtradas en el buscador
        ubi={'ubi':searchservices.data.provincia,'muni':searchservices.data.localidad}
      }else{////si no, toda España
        ubi={'ubi':'España'}
      }
      ubi=JSON.stringify(ubi);
      services.get('shop','ubication',ubi).then(function (response) { ///localizaciones
          $scope.ubicacion=response['loc'];
          ubication_map.initmap1(searchservices,response);  //iniciamos mapa
      }); 
  
})