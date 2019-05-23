eden.controller('profileCtrler', function($scope,user,services, toastr,$location,loginservices,localstorageServices,geoapiServices){
    localstorageServices.setuser(user[1]);
    loginservices.login();
    $scope.updatepass=false;
    $user=user[0][0];
    if($user==undefined){
        location.href='#/'
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
    if (typeof $user.province != 'undefined' && $user.province) {///si no es null ni undefined ni esta vacio.... 
        $scope.dataprofile.proviselected = $user.province;
    }
    if (typeof $user.city != 'undefined' && $user.city) {///si no es null ni undefined ni esta vacio.... 
        $scope.dataprofile.cityselected = $user.city;
    }
   
    $scope.tabprofile = function() {/// pestaña del perfil
        $scope.profile=true;
        $scope.favorites=false;
        $scope.purchases=false;
        
    }
    $scope.tabfavorites = function() {// pestaña favorites
        $scope.profile=false;
        $scope.favorites=true;
        $scope.purchases=false;
        
    }
    $scope.tabpurchase = function() {// pestaña de compras
        $scope.profile=false;
        $scope.favorites=false;
        $scope.purchases=true;
        
    }
    $scope.tabpassword = function(){
        // $scope.profile=false;
        // $scope.favorites=false;
        // $scope.purchases=false;
        $scope.updatepass=true;
    }
    ///////provincias
    geoapiServices.loadprovince()
    .then( function(response){
        //console.log(response);
        $scope.provinces=response;
    });
    //////////poblaciones
    $scope.loadcity = function(){
        var provi=$scope.dataprofile.provi;
        geoapiServices.loadcity(provi)
        .then( function(response){
            $scope.cities=response
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
                // console.log(response);
                // response = JSON.parse(response);

                if (response.result) {
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
        console.log($scope.dataprofile);
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
                $location.href='#/profile'
            }else if (response[0]==false){
                localstorageServices.setuser(response[1]);
                loginservices.login();;
                toastr.error('No se ha podido actualizar el perfil, prueba mas tarde', 'ERROR');
                $location.href='#/profile'
            }else{
                toastr.error('Bicho malo FUERA', 'ERROR');
                loginservices.logout();
                //$location.href='#/'
            }    
        })
    }

/////////actulizar contraseña
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