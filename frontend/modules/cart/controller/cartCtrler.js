eden.controller('cartCtrler', function($scope, cart,cartservices,toastr,$rootScope){
    var reserves;
    $scope.confirmres=false;
    console.log('cart');
    if (localStorage.cart){
        cart = JSON.parse(localStorage.cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        // reserves=JSON.parse(localStorage.cart);
        // $scope.reserves=reserves;
        // $rootScope.cartlength=reserves.length;//numero del carrito
        // if(reserves.length!=0){
        //     $scope.confirmres=true;//muestra el boton de comprar
        // }else{
        //     $scope.cartempty="No tienes reservas en el carrito";;
        //     $rootScope.cartlength=0;//numero del carrito
        // }  
        print();
    }else{
        if(cart.success==true){
            angular.forEach(cart.mess, function (value, key) {
                cartservices.addToCart(value.nombre, value.precio, value.cantidad)
            })
            reserves=JSON.parse(localStorage.cart);
            $scope.reserves=reserves;
        }else{
            $scope.cartempty="No tienes reservas en el carrito";;
            $rootScope.cartlength=0;//numero del carrito
        }
    }

    function print() {
        if(localStorage.cart){
            reserves=JSON.parse(localStorage.cart);
            $scope.reserves=reserves;
        }else{
            $scope.reserves=[];
        }
        if(reserves.length==0){
            $scope.cartempty="No tienes reservas en el carrito";;
            $scope.confirmres=false;//muestra el boton de comprar
        }else{
            $rootScope.cartlength=reserves.length;//numero del carrito
            $scope.confirmres=true;//muestra el boton de comprar
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
    $scope.pay = function(){
        cartservices.pay();
        print();
    }
});

