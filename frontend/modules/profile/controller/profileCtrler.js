eden.controller('profileCtrler', function($scope,user,services, toastr,$timeout,loginservices,localstorageServices,geoapiServices){
    localstorageServices.setuser(user[1]);
    loginservices.login();

    //console.log(user[0][0]);
    $user=user[0][0];
    //console.log($user.user);
    $scope.errorimgmess='';
    $scope.dataprofile={
        user:$user.user,
        password:"",
        mail:$user.email,
        tf:$user.phone,
        provi:"",
        proviselected:'Escoja una provincia',
        city:"",
        cityselected:'Escoja una población',
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
                console.log(response);
                response = JSON.parse(response);
                // console.log(response);

                if (response.result) {
                    toastr.success('Foto subida correctamente', 'Perfecto');
                    
                    // $(".msg").addClass('msg_ok').removeClass('msg_error').text('Success Upload image!!');
                    // $('.msg').animate({'right': '300px'}, 300);

                    // $scope.user[0].photo = "http://127.0.0.1/" + response.data;


                } else {
                    $scope.errorimg=true;
                    $scope.errorimgmess=response.error;
                    var element2;
                    if ((element2 = file.previewElement) !== null) {
							element2.parentNode.removeChild(file.previewElement,1000);
												//$('.dropzone.dz-started .dz-message').show();
                    } else {
                        return false;
                    }
                 }
            },
            'removedfile': function (file, serverFileName) {
                if (file.xhr.response) {
                    $('.msg').text('').removeClass('msg_ok');
                    $('.msg').text('').removeClass('msg_error');
                    var data = jQuery.parseJSON(file.xhr.response);
                    services.post("news", "delete", JSON.stringify({'filename': data}));
                }
            }
    }};

})