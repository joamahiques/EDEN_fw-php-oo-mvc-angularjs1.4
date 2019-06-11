eden.controller('crudCtrler', function($scope, homes, modalServices,$rootScope){
  if($rootScope.type!='admin'){///control de acceso
      location.href = '#/';
  }
  if(homes){
    $scope.homescrud=homes; //llenamos la lista del crud
    //modal del details
    $scope.dialog = function(home) {
        modalServices.openModal(home,'modal','read_modal');
      };
    }
    //borrar casa
    $scope.deletehome = function(home){
      modalServices.openModaldelete(home);
    }
    //borrar todo
    $scope.deleteall = function(){
      modalServices.openModaldeleteAll();
    }
      
})
////////////////////////////////////CREATE
eden.controller('createcrudCtrler', function($scope,geoapiServices,services,toastr,$rootScope){
    if($rootScope.type!='admin'){//control de acceso
      location.href = '#/';
  }
  $scope.newhome={
    name:'',
    provi:'',
    city:'',
    proviselected:'Escoja una provincia',
    cityselected:'Escoja una población',
    price:'',
    proname:'',
    dni:'',
    email:'',
    tf:'',
    capacity:'',
    rooms:'',
    comp:'',
    services:{},
    activities:{},
    datecons:'',
    dateregister:'',

  }
    ////cargamos provincias
    geoapiServices.loadprovince()
      .then( function(response){
          //to Upercase si viene de xml
          angular.forEach(response, function (value, key) {
              response[key].PRO=response[key].PRO.toUpperCase();
          })
          $scope.provinces=response;///rellenamos select
      });
      //////////cities
      $scope.loadcity = function(){
        var provi=$scope.newhome.provi;
        ////cargarmos ciudades
        geoapiServices.loadcity(provi)
        .then( function(response){
            //to Upercase si viene de xml
            angular.forEach(response, function (value, key) {
                response[key].DMUN50=response[key].DMUN50.toUpperCase();
            })
            $scope.newhome.cityselected = 'Escoja una población';
            $scope.cities=response; //rellenamos select
        })
      }
      ///////////////////Create
      $scope.registerhome = function(){
        //update
        services.post('crud', 'create_home', $scope.newhome).then(function (response) {
          console.log(response);
            if(response.succes=='true'){
                toastr.success('Casa añadida correctamente','Perfecto');
                location.href = '#crud';
            }else if (response.succes=='false'){
              toastr.error('Fallo de conexión','Pruebe más tarde');
              location.href = '#crud';
            }else if(response.succes=='error'){/////validacion en bd
              toastr.error(response.mess,'ERROR');
            }
        })
      }
})

//////////////////////////////////DELETE
eden.controller('deletecrudCtrler', function($scope,home,modalServices,services,$route){
    $scope.namehouse=home;
    ////////cerrar el modal si decidimos no borrar
    $scope.cancel = function(){
      modalServices.closeModal();
    }
    /////borrar
    $scope.deletehomecon = function(){
      services.delete('crud','delete_home',home).then(function (response) {
        modalServices.closeModal();
        $route.reload();
      })
    }
})

/////////////////////////////////////UPDATE

eden.controller('updatecrudCtrler', function($scope,homeup, geoapiServices,services,toastr,$rootScope,$parse){
  if($rootScope.type!='admin'){///control de acceso
    location.href = '#/';
  }
    $fecha= new Date(homeup[0].fechacons);
    $fechareg= new Date(homeup[0].fecha)
    var act=homeup[0].actividades.split(',');
    var ser=homeup[0].servicios.split(',');
    act.pop();
    ser.pop();
    $scope.data={
      name:homeup[0].nombre,
      tf:homeup[0].telefono,
      email:homeup[0].email,
      dni:homeup[0].dni,
      capacity:homeup[0].capacidad,
      rooms:homeup[0].habitaciones,
      price:homeup[0].precionoche,
      proname:homeup[0].nombrePropietario,
      datecons:$fecha,
      dateregister:$fechareg,
      comp:homeup[0].entera,
      activities:{},
      services:{}
    }
    ///pintamos actividades y servicios de bd dinamicamente
    angular.forEach(act, function(value, key){
      var p = $parse("data.activities."+value);
      p.assign($scope,true);
    })
    angular.forEach(ser, function(value, key){
      console.log(value)
      var p = $parse("data.services."+value);
      p.assign($scope,true);
    })
    
    ///////provinces para select
    geoapiServices.loadprovince()
    .then( function(response){
        //to Upercase si viene de xml
        angular.forEach(response, function (value, key) {
            response[key].PRO=response[key].PRO.toUpperCase();
        })
        $scope.provinces=response;///llenamos select
        ////si el usuario tiene en bd
        angular.forEach($scope.provinces, function (value, key) {
            if($scope.provinces[key].PRO==homeup[0].provincia){
               $scope.data.provi = $scope.provinces[key];/// seleccionamos opcion igual al del usuario
               $scope.loadcity();//cargamos ciudades
            };  
        }) 
    });
    //////////cities
    $scope.loadcity = function(){
        var provi=$scope.data.provi;
        ///cargamos ciudades
        geoapiServices.loadcity(provi)
        .then( function(response){
            //to Upercase si viene de xml
            angular.forEach(response, function (value, key) {
                response[key].DMUN50=response[key].DMUN50.toUpperCase();
            })
            $scope.data.cityselected = 'Escoja una población';
            $scope.cities=response;///cargamos select
            ////si el usuario tiene en bd
            angular.forEach($scope.cities, function (value, key) {
                if($scope.cities[key].DMUN50==homeup[0].localidad.toUpperCase()){
                   $scope.data.city = $scope.cities[key];///seleccionamos opción igual al del usuario
                };
            })
        })
    }
    ////actualizar
    $scope.updatehome = function(){
      //console.log($scope.data);
      services.post('crud', 'update_home', $scope.data).then(function (response) {
        console.log(response);
          if(response){
              toastr.success('Casa modificada correctamente','Perfecto');
              location.href = '#crud';
          }else{
            toastr.error('Fallo de conexión','Pruebe más tarde');
            location.href = '#crud';
          }
      })
    }
    
})

//////////////////////////////////DELETE ALL
eden.controller('deleteallcrudCtrler', function($scope,modalServices){
  ////////cerrar el modal si decidimos no borrar
  $scope.cancel = function(){
    modalServices.closeModal();
  }
  /////borrar
  $scope.deleteallcon = function(){
    console.log('borrao!!')
    // services.delete('crud','delete_all_homes').then(function (response) {
    //   modalServices.closeModal();
    //   location.href = '#crud';
    // })
  }
})