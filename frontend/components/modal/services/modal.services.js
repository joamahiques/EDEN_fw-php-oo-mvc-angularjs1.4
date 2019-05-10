eden.factory('modalServices',['services','ngDialog', function(services,ngDialog){
    var serv={};
    serv.openModal = openModal;
    return serv;
    function openModal(home,modu,func){
        console.log(home);

            var modalInstance=ngDialog.open({
                template: 'frontend/components/modal/view/modal.view.html',
                className: 'ngdialog-theme-default',
                controller: 'modalController',
                width: 'fit-content',
                type: 'full-screen',
                resolve: {
                    details: function(services, $route){
                        return services.get('components',modu,func,home);
                    }
                }
            })
    }
}])
