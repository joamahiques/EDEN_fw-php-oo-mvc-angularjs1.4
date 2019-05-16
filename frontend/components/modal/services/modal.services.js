eden.factory('modalServices',['services','ngDialog', function(services,ngDialog){
    var serv={};
    serv.openModal = openModal;
    serv.openModalLogin = openModalLogin;
    serv.closeModal = closeModal;
    return serv;
    function openModal(home,modu,func){
        console.log(home);

            var modalInstance=ngDialog.open({
                template: 'frontend/components/modal/view/modal.view.html',
                className: 'ngdialog-theme-default',
                controller: 'modalController',
                width: 'fit-content',
                height:'fit-content',
                type: 'full-screen',
                resolve: {
                    details: function(services, $route){
                        return services.get('components',modu,func,home);
                    }
                }
            })
    }

    function openModalLogin(){

            var modalInstanceL=ngDialog.open({
                template: 'frontend/components/modal/view/modalLogin.view.html',
                className: 'ngdialog-theme-default',
                controller: 'loginCtrler',
                width: '50%',
                // height:'500px',
                type: 'full-screen',
                // resolve: {
                //     details: function(services, $route){
                //         return services.get('components',modu,func,home);
                //     }
                // }
            })
    }
    function closeModal(){
        ngDialog.close();
    }
}])
