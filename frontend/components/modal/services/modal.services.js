eden.factory('modalServices',['services','ngDialog','localstorageServices', function(services,ngDialog,localstorageServices){
    var serv={};
    serv.openModal = openModal;
    serv.openModalLogin = openModalLogin;
    serv.closeModal = closeModal;
    serv.openModalPurchase=openModalPurchase;
    serv.openModaldelete=openModaldelete;
    serv.openModaldeleteAll=openModaldeleteAll;
    return serv;
    ///details
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
    ///login
    function openModalLogin(){

            var modalInstanceL=ngDialog.open({
                template: 'frontend/components/modal/view/modalLogin.view.html',
                className: 'ngdialog-theme-default',
                controller: 'loginCtrler',
                width: '50%',
                type: 'full-screen',
            })
    }
    ///confirm compra
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
    ////delete home
    function openModaldelete(home){

        var modalInstanceD=ngDialog.open({
            template: 'frontend/components/modal/view/modalDelete.view.html',
            className: 'ngdialog-theme-default',
            controller: 'deletecrudCtrler',
            width: '400px',
            height:'300px',
            padding:'0 10px',
            type: 'full-screen',
            resolve:{home:function(){return home}}
        })
}
///delete all homes
function openModaldeleteAll(){

    var modalInstanceDA=ngDialog.open({
        template: 'frontend/components/modal/view/modalDeleteAll.view.html',
        className: 'ngdialog-theme-default',
        controller: 'deleteallcrudCtrler',
        width: '400px',
        height:'300px',
        padding:'0 10px',
        type: 'full-screen',
    })
}
////cerrar
    function closeModal(){
        ngDialog.close();
    }
}])
