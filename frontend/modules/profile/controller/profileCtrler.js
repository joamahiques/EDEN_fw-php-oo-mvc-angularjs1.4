eden.controller('profileCtrler', function($scope,user,services, toastr,loginservices,localstorageServices,geoapiServices,$rootScope){
    localstorageServices.setuser(user[1]);
    loginservices.login();
    $scope.updatepass=false;
    $scope.aupdatepass=true;
    $scope.alpha = true;
    $scope.tablePur='';
    $user=user[0][0];
    if(!$user){//si no existe token(error al comprobar token) fuera de profile
        location.href='#/'
    }
    if($rootScope.type=='client_rs'){//cambiar contraseña no visible para client_rs
        $scope.aupdatepass=false;
    }
    $scope.dataprofile={
        user:$user.user,
        mail:$user.email,
        tf:$user.phone,
        provi:"",
        proviselected:'Escoja una provincia',
        city:"",
        cityselected:'Escoja una población',
        dropzone:''
    }
    $scope.profilepass={
        old:"",
        new:""
    }
/////cargamos provincia y municipio de db
    // if (typeof $user.province != 'undefined' && $user.province) {///si no es null ni undefined ni esta vacio.... 
    //     $scope.dataprofile.proviselected = $user.province;
    // }
    // if (typeof $user.city != 'undefined' && $user.city) {///si no es null ni undefined ni esta vacio.... 
    //     $scope.dataprofile.cityselected = $user.city;
    // }
/////////////////////////////tabs   
    $scope.tabprofile = function() {/// profile tab
        $scope.profile=true;
        $scope.favorites=false;
        $scope.purchases=false;
        $scope.alpha = true;
        $scope.alpha1 = false;
        $scope.alpha2 = false;
        
    }
    $scope.tabfavorites = function() {// favorites tab
        $scope.profile=false;
        $scope.favorites=true;
        $scope.purchases=false;
        $scope.alpha = false;
        $scope.alpha1 = true;
        $scope.alpha2 = false;
        services.get1('profile','load_data_favorites',localstorageServices.getuser()).then(function (response) {
            console.log(response);
            $scope.favorites=response;
        });
        
    }
    $scope.tabpurchase = function() {// purchases tab
        // $scope.active=true;
        $scope.profile=false;
        $scope.favorites=false;
        $scope.purchases=true;
        $scope.alpha2 = true;
        $scope.alpha = false;
        $scope.alpha1 = false;
        services.get1('profile','load_data_purchases',localstorageServices.getuser()).then(function (response) {
            console.log(response);
            $scope.purchases=response;
        });
        
    }
    $scope.tabpassword = function(){///open updatepass modal
        $scope.updatepass=true;
    }
 ///////////////////////////delete favorites

$scope.deletefavo = function(name){
    console.log(name);
    services.post('profile','delete_favorites',{'tok':localstorageServices.getuser(),'nombre':name}).then(function (response) {
        console.log(response);
        toastr.success(response, 'INFO');
        $scope.tabfavorites();
    })
}

////////////////////////////PDF Purchases
$scope.downloadpdf = function() {
    var doc = new jsPDF();
    var rows = [];
    angular.forEach($scope.purchases, function (value, key) {
        var temp = [value.fecha,value.nombre,value.cantidad,value.precio,value.total];
        rows.push(temp);
    }); 
    doc.autoTable({
        margin: {top: 30},
        head: [['Fecha', 'Nombre','Cantidad','Precio','Total']],
        body: rows,
    })
     doc.text(20,20,"Mis Compras en EDEN");
     doc.save('mypurchases.pdf');
}
/////////////////////////profile    
    ///////provinces
    geoapiServices.loadprovince()
    .then( function(response){
        //to Upercase si viene de xml
        angular.forEach(response, function (value, key) {
            response[key].PRO=response[key].PRO.toUpperCase();
        })
        $scope.provinces=response;
        ////si el usuario tiene en bd
        angular.forEach($scope.provinces, function (value, key) {
            if($scope.provinces[key].PRO==$user.province){
               $scope.dataprofile.provi = $scope.provinces[key];
               $scope.loadcity();
            };
            
        })
        
    });
    //////////cities
    $scope.loadcity = function(){
        var provi=$scope.dataprofile.provi;
        //console.log(provi);
        geoapiServices.loadcity(provi)
        .then( function(response){
            //to Upercase si viene de xml
            angular.forEach(response, function (value, key) {
                response[key].DMUN50=response[key].DMUN50.toUpperCase();
            })
            $scope.dataprofile.cityselected = 'Escoja una población';
            //console.log(response);
            $scope.cities=response;
            console.log($user.city);
            angular.forEach($scope.cities, function (value, key) {
                ////si el usuario tiene en bd
                if($scope.cities[key].DMUN50==$user.city){
                    console.log($scope.cities[key].DMUN50);
                   $scope.dataprofile.city = $scope.cities[key];
                };
            })
        })

    }
    ////////dropzone
    $scope.dropzoneConfig = {
        'options': {
            'url': 'backend/index.php?module=profile&function=uploadimg',
            addRemoveLinks: true,
            maxFileSize: 1000,
            dictResponseError: "Ha ocurrido un error en el server",
            acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd'
        },
        'eventHandlers': {
            'sending': function (file, formData, xhr) {},
            'success': function (file, response) {
                // console.log(file);
                console.log(response);
                //response = JSON.parse(response);
                if (response.result==true) {
                    toastr.success('Foto subida correctamente, Actualiza el perfil para guardar cambios', 'Perfecto');
                
                } else {
                    toastr.error(response.error, 'ERROR');
                    var element2;
                    if ((element2 = file.previewElement) !== null) {
							element2.parentNode.removeChild(file.previewElement,1000);
                    } else {
                        return false;
                    }
                 }
            },
            'removedfile': function (file, serverFileName) {
                if (file.xhr.response) {
                    var data=JSON.parse(file.xhr.response)
                    services.post("profile", "delete", JSON.stringify({'filename': data}));
                }
            }
    }};
///////update
    $scope.updateprofile = function(){
        // var provis;
        // var munis;
        // if(!$scope.dataprofile.provi.PRO){
        //     provis=$user.province;
        // }else{ 
        //     provis=$scope.dataprofile.provi.PRO.toUpperCase();
        // }
        // if(!$scope.dataprofile.city.DMUN50){
        //     munis=$user.city;
        // }else{
        //     munis=$scope.dataprofile.city.DMUN50.toUpperCase();
        // }
        // console.log($scope.dataprofile);
        var data = {"user": $scope.dataprofile.user, "mail": $scope.dataprofile.mail, 
        "tf": $scope.dataprofile.tf,"provi": $scope.dataprofile.provi.PRO,"city": $scope.dataprofile.city.DMUN50,"tok": localstorageServices.getuser()};
        var profile_form = JSON.stringify(data);
        console.log(profile_form);
        services.post('profile', 'update_profile', profile_form).then(function (response) {
            console.log(response);
            if(response[0]==true){
                localstorageServices.setuser(response[1]);
                loginservices.login();;
                toastr.success('Perfil actualizado correctamente', 'Perfecto');
                location.href='#/profile'
                //location.reload();
            }else if (response[0]==false){
                localstorageServices.setuser(response[1]);
                loginservices.login();;
                toastr.error('No se ha podido actualizar el perfil, prueba mas tarde', 'ERROR');
                location.href='#/profile'
            }else{
                toastr.error('Bicho malo FUERA', 'ERROR');
                loginservices.logout();
                location.href='#/'
            }    
        })
    }

/////////update password
    $scope.submitupdatepass = function(){
        var data = {"oldpass": $scope.profilepass.old, "newpass": $scope.profilepass.new,"tok": localstorageServices.getuser()};
        var profile_form = JSON.stringify(data);
        services.post('profile', 'update_pass_pro', profile_form).then(function (response) {
            console.log(response);
            if(response[0]==true){
                localstorageServices.setuser(response[1]);
                loginservices.login();;
                toastr.success('Contraseña actualizada correctamente', 'Perfecto');
                $scope.updatepass=false;
            }else if (response[0]==false){
                localstorageServices.setuser(response[1]);
                loginservices.login();;
                toastr.error('No se ha podido actualizar la contraseña, prueba mas tarde', 'ERROR');
                $scope.updatepass=false;
            }else{
                toastr.error('Bicho malo FUERA', 'ERROR');
                loginservices.login();
                loginservices.logout();
                location.href='#/'
            }
        })
    }

})

eden.filter('searchFor', function(){
	return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result = [];
		 searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if(item.nombre.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}
		});
		return result;
	};
});