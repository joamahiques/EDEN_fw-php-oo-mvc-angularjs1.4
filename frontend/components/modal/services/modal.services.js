eden.factory('modalServices',['services','ngDialog','localstorageServices', function(services,ngDialog,localstorageServices){
    var serv={};
    serv.openModal = openModal;
    serv.openModalLogin = openModalLogin;
    serv.closeModal = closeModal;
    serv.openModalPurchase=openModalPurchase;
    return serv;
    function openModal(home,modu,func){
            var modalInstance=ngDialog.open({
                template: 'frontend/components/modal/view/modal.view.html',
                className: 'ngdialog-theme-default',
                controller: 'modalController',
                width: 'fit-content',
                height:'fit-content',
                type: 'full-screen',
                resolve: {
                    details: function(services){
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
                type: 'full-screen',
            })
    }
    function openModalPurchase(){

        var modalInstanceP=ngDialog.open({
            template: 'frontend/components/modal/view/modalPurchase.view.html',
            className: 'ngdialog-theme-default',
            controller: 'cartCtrler',
            type: 'full-screen',
            resolve: {
                cart: function(services,localstorageServices){
                    $token = localstorageServices.getuser();
                    return services.get1('cart', 'read_cart', $token)
                }
            }
        })
}
    function closeModal(){
        ngDialog.close();
    }
}])
