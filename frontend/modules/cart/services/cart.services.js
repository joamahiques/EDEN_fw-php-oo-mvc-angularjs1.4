eden.factory('cartservices',['$rootScope','services','toastr','localstorageServices','modalServices',
function($rootScope,services,toastr,localstorageServices,modalServices){
    var service={};
    service.addToCart=addToCart;
    service.savecart=savecart;
    service.deletereserva=deletereserva;
    service.onemorecant=onemorecant;
    service.onelesscant=onelesscant;
    service.comprar=comprar;
    if(!localStorage.cart){
       var a=[]   
     }else{
        a = JSON.parse(localStorage.getItem('cart'));
    }
    return service;
 
    function addToCart(name, price, qty) {
            var total = (price*qty);
            for (var i in a) {///si esta suma el resultado
                    if(a[i].nombre == name){
                        a[i].cantidad = parseInt(a[i].cantidad)+parseInt(qty);
                        a[i].total = parseInt(a[i].precio)*parseInt(a[i].cantidad);
                        savecart()
                        return;
                    }
                }
            
            var item = { nombre: name, precio: price, cantidad: qty, total: total };
            console.log(item);
            a.push(item);
            savecart();
     }

     function savecart() {
        //if (localStorage.cart){
            console.log(a);
            localStorage.cart = JSON.stringify(a);
        //}
        console.log(localStorage.cart);
     }

     function deletereserva(reserva) {
        angular.forEach(a, function (value, key) {
            if(value.nombre==reserva){
                console.log('borrando' +reserva);
                a.splice(key,1);
            }
        })
        if(a.length>0){
            savecart();
        }else{
            savecart();
            //localStorage.removeItem('cart');  
        }
        
     }

     function onemorecant(item) {
        angular.forEach(a, function (value, key) {
            if(value.nombre==item){
                console.log('sumano 1');
                value.cantidad=(value.cantidad+1);
                value.total=(value.precio*value.cantidad);
            }
        })
        savecart();
     }

     function onelesscant(item) {
        angular.forEach(a, function (value, key) {
            if(value.nombre==item){
                if(value.cantidad>1){
                    console.log('restano 1');
                    value.cantidad=(value.cantidad-1);
                    value.total=(value.precio*value.cantidad);
                    savecart();
                }else if(value.cantidad==1){
                    deletereserva(item);
                }
            }
        })
     }
     function comprar(){
        if(!localStorage.token){
            toastr.info("Para confirmar la compra regístrate","Por favor")
        }else{
            $token = localstorageServices.getuser();
            services.post('cart', 'insert_cart', {'token': $token,'cart':a}).then(function (response) {
                //console.log(response);
                localstorageServices.setuser(response.tok);
                $token = localstorageServices.getuser();
                //services.get('cart', 'read_cart', {'token': $token}).then(function (response) {
                   // console.log(response);
                     modalServices.openModalPurchase();
                     //$rootScope.totalreserves=response;
                });
            ///});
            
        }
     }
    
}]);