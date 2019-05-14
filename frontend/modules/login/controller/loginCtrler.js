eden.controller('loginCtrler', function($scope, modalServices){

    //console.log('logincontroller');
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
        $scope.register=true;
        $scope.resetpass=false;
        $scope.login=false;
    }
    $scope.tablogin = function() {// pestaña de login
        $scope.register=false;
        $scope.login=true;
        
    }
    $scope.SubmitLogin = function() {
        console.log($scope.datalogin.user) 
    };
   
});