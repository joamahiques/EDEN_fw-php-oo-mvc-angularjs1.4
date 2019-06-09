eden.controller('cartCtrler', function($scope, cart,cartservices,toastr,$rootScope){
    var reserves;
    $scope.confirmres=false;

    if (localStorage.cart){//si existe lo añadimos a cart
        cart = JSON.parse(localStorage.cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        print();
    }else{
        if(cart.success==true){ //si hay carro en bd
            //console.log(cart);
            angular.forEach(cart.mess, function (value, key) {
                cartservices.addToCart(value.nombre, value.precio, value.cantidad)//añadimos y/o creamos
            })
            reserves=JSON.parse(localStorage.cart);
            $scope.reserves=reserves;
        }else{
            $scope.cartempty="No tienes reservas en el carrito";;
            $rootScope.cartlength=0;//numero del carrito
        }
    }

    function print() {///pintar carrito
        if(localStorage.cart){
            var taxTotal = 0; 
            reserves=JSON.parse(localStorage.cart);
            $scope.reserves=reserves;
            
        }else{
            $scope.reserves=[];
        }
        if(reserves.length==0){
            $scope.cartempty="No tienes reservas en el carrito";;
            $scope.confirmres=false;//muestra el boton de comprar
            $scope.pricetotalfinal=0;
        }else{
            var tal=0
            $rootScope.cartlength=reserves.length;//numero del carrito
            $scope.confirmres=true;//muestra el boton de comprar
            for (i=0; i < reserves.length; i++) {            
              tal = tal + reserves[i].total;  
              //console.log(tal);
              $scope.pricetotalfinal=tal;
             };
             if (reserves.length>4){////descuento
                 toastr.success('Tienes un 10% de descuento por tener 5 o más reservas','ENHORABUENA!')
                 $scope.desc=true;
                 $scope.pricetotalfinaldes=(tal*0.90)
             } else{
                $scope.desc=false;
             }
        }  
    }

    $scope.deleteres = function(reserva){
        cartservices.deletereserva(reserva); //eliminar una reserva del carrito
        print();
    }
    $scope.onemore = function(item){
        cartservices.onemorecant(item);//añadir una noche a una reserva
        print();
    }
    $scope.oneless = function(item){
        cartservices.onelesscant(item);///eliminar una noche a una reserva
        print();
    }
    $scope.comprar = function(){///reservar
        cartservices.comprar();
    }
    $scope.pay = function(){///confirmar la compra
        cartservices.pay();
        print();
    }
});

