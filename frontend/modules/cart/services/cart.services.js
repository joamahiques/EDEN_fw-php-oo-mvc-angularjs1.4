eden.factory('cartservices',['$rootScope','services','toastr',
function($rootScope,services,toastr){
    var service={};
    service.addToCart=addToCart;
    var a = [];
    return service;
 
    function addToCart(name, price, qty) {
        var total = (price*qty);
        console.log('addToCart');
        var item = { nombre: name, precio: price, cantidad: qty, total: total }; 
        a = JSON.parse(localStorage.getItem('cart'));
        for (var i in a) {///si esta suma el resultado
            if(a[i].nombre == name){
                a[i].cantidad = parseInt(a[i].cantidad)+parseInt(qty);
                a[i].total = parseInt(a[i].precio)*parseInt(a[i].cantidad)
                localStorage.setItem('cart', JSON.stringify(a));
                return;
            }
        }
        a.push(item);
        localStorage.setItem('cart', JSON.stringify(a));
        console.log(localStorage.getItem('cart'));
     }
}]);