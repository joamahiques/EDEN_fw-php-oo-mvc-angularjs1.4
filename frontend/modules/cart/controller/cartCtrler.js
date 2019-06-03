eden.controller('cartCtrler', function($scope, cart,cartservices,toastr,$rootScope){
    var reserves;
    $scope.confirmres=false;
    //console.log('cart');
    if (localStorage.cart){
        cart = JSON.parse(localStorage.cart);
        localStorage.setItem('cart', JSON.stringify(cart));
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
             if (reserves.length>4){
                 toastr.success('Tienes un 10% de descuento por tener 5 o más reservas','ENHORABUENA!')
                 $scope.desc=true;
                 $scope.pricetotalfinaldes=(tal*0.90)
             } else{
                $scope.desc=false;
             }
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

