eden.controller('loginCtrler', function($scope,modalServices,services, toastr,$timeout,loginservices,localstorageServices){
    
    $scope.dataregister={
        username:"",
        password:"",
        email:""
    }
    $scope.datalogin = {
        user: "",
        password: ""
    };
    $scope.datapass={
        user:"",
        pass:""
    }
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
        $scope.resetpass=false;
        
    }
    $scope.tabforgotpass = function() {// pestaña de login
        $scope.register=false;
        $scope.login=false;
        $scope.resetpass=true;
        
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
            if(response=="ok"){
                toastr.success('Revisa tu correo para activar tu cuenta', 'HOLA!');
                $timeout(function(){
                    modalServices.closeModal();
                    location.href='#/';
                },3000);
            }else if (response=="Error") {
                toastr.info('Fallo de conexión', 'ERROR');
                $timeout(function(){location.href='#/'; }, 3000);
            }else{
                $scope.erroruserregister=true;
                $timeout(function(){ $scope.erroruserregister=false;},3000);
            }
        });
    };
    
    $scope.SubmitRecoverPass = function () {
        console.log('recoverPass');
        var login_form = JSON.stringify($scope.datapass);
        services.post('login', 'forgotpass', login_form).then(function (response) {
            if(response=="ok"){
                toastr.success('Revisa tu correo para cambiar tu contraseña', 'Perfecto');
                modalServices.closeModal();
            }else{
                toastr.info('Fallo de conexión, pruebe mas tarde', 'ERROR');
                modalServices.closeModal();
            }
        })
    }
});
eden.controller('changepassCtrler', function($scope,token,services,toastr, $timeout){
    $token=token;
    $scope.datarpass={
        pass:"",
        rpass:""
    }
    $change_pass = {
        pass:"",
        token:""
    }
    $scope.SubmitchangePass = function () {
            $change_pass = {
                pass:$scope.datarpass.pass,
                token:$token
            }
            console.log($change_pass);
        services.post('login', 'update_pass', $change_pass).then(function (response) {
            if(response=="ok"){
                toastr.success('Contraseña actualizada correctamente', 'Perfecto');
                $timeout(function(){location.href='#/'; }, 3000);
            }else{
                toastr.info('Fallo de conexión, pruebe mas tarde', 'ERROR');
                $timeout(function(){location.href='#/'; }, 3000);
            }
        })
    }

});

eden.controller('menuCtrler', function($scope,$log,loginservices, modalServices,  $timeout){
   
    loginservices.login();
    $scope.dialogLogin = function() {
          modalServices.openModalLogin();
      
    };
    $scope.toggled = function(open) {
          $log.log('Dropdown is now: ', open);
        };
    $scope.logout = function() {
          loginservices.logout();
          loginservices.login();
          $timeout(function(){
                location.href='#/';
          },1000);
          //console.log('logout');
        };
});