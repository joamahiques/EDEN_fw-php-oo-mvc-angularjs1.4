eden.controller('loginCtrler', function($scope, modalServices,services, toastr,$timeout,loginservices,localstorageServices,socialServices){
    $scope.dataregister={
        username:"",
        password:"",
        email:""
    }
    $scope.datalogin = {
        user: "",
        password: ""
    };
    $scope.dialogLogin = function() {///abrir modal
        $scope.register=false;
        $scope.resetpass=false;
        modalServices.openModalLogin();  
    };
    $scope.tabregister = function() {/// pestaña de new acoutn
        $scope.formlogin.$setUntouched();
        $scope.register=true;
        $scope.resetpass=false;
        $scope.login=false;
        
    }
    $scope.tablogin = function() {// pestaña de login
        $scope.register=false;
        $scope.login=true;
        
    }
    $scope.SubmitLogin = function() {
        var login_form = JSON.stringify($scope.datalogin);
        services.post('login', 'login', login_form).then(function (response) {
            if(response.success){
                localstorageServices.setuser(response.token);
                toastr.success('Sesión iniciada', 'BIENVENID@');
                $timeout(function(){
                    modalServices.closeModal();
                    loginservices.login();
                    location.href='#/';
                },3000);
            }else{
                if(response.error=='El usuario no existe'){
                    $scope.erroruserlogin=true;
                    $timeout(function(){ $scope.erroruserlogin=false;},3000);
                }else{
                    $scope.errorpasslogin=true;
                    $timeout(function(){ $scope.errorpasslogin=false;},3000);
                }
            }
        });
    };
    $scope.SubmitRegister = function() {
        //console.log($scope.dataregister) 
        var data = {"username": $scope.dataregister.username, "email": $scope.dataregister.email, 
        "password": $scope.dataregister.password};
        var register_form = JSON.stringify(data);
        services.post('login', 'register', register_form).then(function (response) {
            console.log(response);
            if(response=="ok"){
                toastr.success('Revisa tu correo para activar tu cuenta', 'HOLA!');
                $timeout(function(){
                    modalServices.closeModal();
                    location.href='#/';
                },3000);
            }else if (response=="Error") {
                toastr.info('Fallo de conexión', 'ERROR');
                setTimeout(function(){window.location.href = amigable('?module=home&function=list_home'); }, 3000);
            }else{
                $scope.erroruserregister=true;
                    $timeout(function(){ $scope.erroruserregister=false;},3000);
            }
        });
    };
    
    

    // $scope.socialLogin = function () {
    //     console.log('socila');
    //     services.post('login', 'sociallogin').then(function (response) {
    //         console.log(response);
    //         localstorageServices.setuser(response.nickname);
    //     })
        
        
    // }

   

});