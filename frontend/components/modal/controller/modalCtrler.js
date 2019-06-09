eden.controller('modalController', function($scope, details,cartservices,modalServices,toastr){
    console.log(details);
    $scope.data=details;
    $scope.quant=1;
    ///añadir al carrito
    $scope.confirm = function(){
        cartservices.addToCart($scope.data[0].nombre, $scope.data[0].precionoche, $scope.quant);
        toastr.success('Reserva añadida al carrito', 'PERFECTO');
        modalServices.closeModal();
    }
})

eden.controller('cartmodalCtrler', function($scope, confirm){
    console.log(confirm);
    $scope.totalreserves=confirm;
    
    
})