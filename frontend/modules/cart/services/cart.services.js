eden.factory('cartservices',['$rootScope','services','toastr','localstorageServices','modalServices','loginservices',
function($rootScope,services,toastr,localstorageServices,modalServices,loginservices){
    var service={};
    service.addToCart=addToCart;
    service.savecart=savecart;
    service.deletereserva=deletereserva;
    service.onemorecant=onemorecant;
    service.onelesscant=onelesscant;
    service.comprar=comprar;
    service.savecartlogout=savecartlogout;
    service.pay=pay;
    if(!localStorage.cart){
       var a=[]   
     }else{
        a = JSON.parse(localStorage.getItem('cart'));
    }
    return service;
 
    function addToCart(name, price, qty) { //añadimos al carrito
        console.log(a);
            var total = (price*qty);
            for (var i in a) {///si esta suma el resultado para no repetir
                    if(a[i].nombre == name){
                        a[i].cantidad = parseInt(a[i].cantidad)+parseInt(qty);
                        a[i].total = parseInt(a[i].precio)*parseInt(a[i].cantidad);
                        savecart()
                        return;
                    }
                }
            var item = { nombre: name, precio: price, cantidad: qty, total: total };
            a.push(item);
            savecart();
     }

     function savecart() {//guardamos carrito
            localStorage.cart = JSON.stringify(a);
            $rootScope.cartlength=a.length;
     }

     function deletereserva(reserva) {//borrar una reserva del carrito
        angular.forEach(a, function (value, key) {
            if(value.nombre==reserva){
                a.splice(key,1);
            }
        })
        if(a.length>0){
            savecart();
        }else{
            savecart();
        }
        
     }

     function onemorecant(item) { //sumamos noches
        angular.forEach(a, function (value, key) {
            if(value.nombre==item){
                value.cantidad=(value.cantidad+1); //sumamos
                value.total=(value.precio*value.cantidad);//actualizamos precio
            }
        })
        savecart();
     }

     function onelesscant(item) {  //restamos noches
        angular.forEach(a, function (value, key) {
            if(value.nombre==item){
                if(value.cantidad>1){
                    value.cantidad=(value.cantidad-1); //restamos
                    value.total=(value.precio*value.cantidad); //actualizamos precio
                    savecart();
                }else if(value.cantidad==1){ //si llegamos a 0, borramos reserva
                    deletereserva(item);
                }
            }
        })
     }
     function comprar(){
        if(!localStorage.token){ //si no estas logueado
            toastr.info("Para confirmar la compra regístrate","Por favor")
        }else{
            $token = localstorageServices.getuser(); //guardamos carro en bd
            services.post('cart', 'insert_cart', {'token': $token,'cart':a}).then(function (response) {
                // console.log(response);
                if(response.res){
                    localstorageServices.setuser(response.tok);
                    modalServices.openModalPurchase(); ////abrimos modal de confirmar compra, ya con los datos de bd
                }else{
                    loginservices.logout(); //si no coincide el token
                }
            });            
        }
     }

     function pay(){ ///pagar
        if(!localStorage.token){
            toastr.info("Para confirmar la compra regístrate","Por favor")
        }else{
            // console.log('pagar');
            $token = localstorageServices.getuser();
            services.post('cart', 'confirm_purchase', {'token': $token}).then(function (response) {///confirmar compra y cambiar los datos de tabla
                if(response.res){
                    localstorageServices.setuser(response.tok);
                    toastr.success("Reservas realizadas correctamente","GRACIAS")
                    modalServices.closeModal();
                    localStorage.removeItem('cart');
                    location.reload();
                }else{
                    loginservices.logout();
                }
            });            
        }
     }

     function savecartlogout(){ //guardar carro si logout y hay productos
        $token = localstorageServices.getuser();
        services.post('cart', 'insert_cart', {'token': $token,'cart':a}).then(function (response) {
                // console.log(response);
                if(response.res){
                    localstorageServices.setuser(response.tok);
                    a=[];
                    $rootScope.cartlength=0;
                    localStorage.removeItem('cart');
                }else{
                    // console.log(response);
                }
        });  
     }
}]);