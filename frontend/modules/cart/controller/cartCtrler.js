eden.controller('cartCtrler', function($scope, $http, cart,services){
   
    if (localStorage.cart){
        console.log('hay cart');
        cart = JSON.parse(localStorage.cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        var reserves=JSON.parse(localStorage.cart);
        $scope.reserves=reserves;
    }else{
        var a = [];
        if(cart){
            a.push(cart[0]);
            localStorage.setItem('cart', JSON.stringify(a));
            var reserves=JSON.parse(localStorage.cart);
            $scope.reserves=reserves;
        }else{
            $scope.cartempty="No tienes reservas en el carrito";;
        }
        
    }
    //console.log($scope.reserves)///todos los del carrito;
    
    
    
    $scope.deleteres = function(reserva){
        console.log(reserva);
    }
});