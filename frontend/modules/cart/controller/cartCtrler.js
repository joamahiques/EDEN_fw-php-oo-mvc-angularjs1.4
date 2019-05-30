eden.controller('cartCtrler', function($scope, cart,cartservices){
    var reserves;
    console.log(cart);
    if (localStorage.cart){
        cart = JSON.parse(localStorage.cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        reserves=JSON.parse(localStorage.cart);
        $scope.reserves=reserves;
    }else{
        if(cart.success==true){
            angular.forEach(cart.mess, function (value, key) {
                cartservices.addToCart(value.nombre, value.precio, value.cantidad)
            })
            reserves=JSON.parse(localStorage.cart);
            $scope.reserves=reserves;
        }else{
            $scope.cartempty="No tienes reservas en el carrito";;
        }
    }
    
    function print() {
        if(localStorage.cart){
            var reserves=JSON.parse(localStorage.cart);
            $scope.reserves=reserves;
        }else{
            $scope.cartempty="No tienes reservas en el carrito";;
            $scope.reserves=[];
        }
        
    }

    $scope.deleteres = function(reserva){
        cartservices.deletereserva(reserva);
        print();
    }
    $scope.onemore = function(item){
        cartservices.onemorecant(item);
        print();
    }
    $scope.oneless = function(item){
        cartservices.onelesscant(item);
        print();
    }
    $scope.comprar = function(){
        cartservices.comprar();
    }
});

