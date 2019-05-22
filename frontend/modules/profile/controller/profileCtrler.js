eden.controller('profileCtrler', function($scope,user,services, toastr,$location,loginservices,localstorageServices,geoapiServices){
    localstorageServices.setuser(user[1]);
    loginservices.login();

    //console.log(user[0][0]);
    $user=user[0][0];
    //console.log($user.user);
    $scope.errorimgmess='';
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
    if (typeof $user.province != 'undefined' && $user.province) {///si no es null ni undefined ni esta vacio.... 
        $scope.dataprofile.proviselected = $user.province;
    }
    if (typeof $user.city != 'undefined' && $user.city) {///si no es null ni undefined ni esta vacio.... 
        $scope.dataprofile.cityselected = $user.city;
    }
   
    $scope.tabprofile = function() {/// pestaña de new acoutn
        $scope.profile=true;
        $scope.favorites=false;
        $scope.purchases=false;
        
    }
    $scope.tabfavorites = function() {// pestaña de login
        $scope.profile=false;
        $scope.favorites=true;
        $scope.purchases=false;
        
    }
    $scope.tabpurchase = function() {// pestaña de login
        $scope.profile=false;
        $scope.favorites=false;
        $scope.purchases=true;
        
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

    $scope.updateprofile = function(){
        console.log($scope.dataprofile);
        var data = {"user": $scope.dataprofile.user, "mail": $scope.dataprofile.mail, 
        "tf": $scope.dataprofile.tf,"provi": $scope.dataprofile.provi.PRO,"city": $scope.dataprofile.city.DMUN50,"tok": localstorageServices.getuser()};
        var profile_form = JSON.stringify(data);
        console.log(profile_form);
        services.post('profile', 'update_profile', profile_form).then(function (response) {
            console.log(response);
            if(response[0]){
                localstorageServices.setuser(response[1]);
                loginservices.login();;
                toastr.success('Perfil actualizado correctamente', 'Perfecto');
                $location.href='#/profile'
            }else if (!response[0]){
                localstorageServices.setuser(response[1]);
                loginservices.login();;
                toastr.error('No se ha podido actualizar el perfil, prueba mas tarde', 'ERROR');
                $location.href='#/profile'
            }else{
                toastr.error('Bicho malo FUERA', 'ERROR');
                $location.href='#/'
            }
            
        })

    }

})