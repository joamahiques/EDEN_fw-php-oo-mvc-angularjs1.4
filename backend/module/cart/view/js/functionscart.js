var cart = [];

$(function () {
    if (localStorage.cart){
        cart = JSON.parse(localStorage.cart);
        showCart();
    }
});
function addToCart() {
   
    var price = $("#precio").text();
    var name = $("#nombre").text();
    var qty = $("#quantity").val();
    var total = (price*qty);
    toastr["info"]("Producto añadido al carrito correctamente"),{"iconClass":'toast-info'};
    // update qty if product is already present
    for (var i in cart) {
        if(cart[i].Home == name){
          cart[i].Qty = parseInt(cart[i].Qty)+parseInt(qty);
          cart[i].Total = parseInt(cart[i].Price)*parseInt(cart[i].Qty)
            showCart();
            saveCart();
            return;
        }
    }
    // create JavaScript Object
    var item = { Home: name,  Price: price, Qty: qty, Total: total }; 
    cart.push(item);
    localStorage.setItem('canti',cart.length);
    $(".fa-shopping-cart").children('span').html(cart.length);
    saveCart();
    showCart();
}

function deleteItem(index){
    cart.splice(index,1); // delete item at index

    showCart();
    saveCart();
    if (cart.length == 0) {
        localStorage.setItem('canti',cart.length);
        $(".fa-shopping-cart").children('span').html(cart.length);
        showCart();
        return;
    }
    localStorage.setItem('canti',cart.length);
    $(".fa-shopping-cart").children('span').html(cart.length);
    
}
/// localstorage
function saveCart() {
    if ( window.localStorage){
        localStorage.cart = JSON.stringify(cart);
    }
}
function DelCart(){
    localStorage.removeItem('cart');
  }

//////showw
function showCart() {
    var pricetotal=0;
    //console.log(cart);
    localStorage.setItem('canti',cart.length);
    if (cart.length == 0) {
        
        var pricetotal=0;
        $("#cartBody").html('<td colspan="5" id="emptycart"> <p style="text-align:center, font-size=20px;">Tu Carrito está vacio</p></th>');
        $("#pricetotal").html('0');
        return;
    }
    $("#emptycart").hide();
    $("#cartBody").empty();
    
    for (var i in cart) {
        var item = cart[i];
        var row = "<tr><td id='name'>" + item.Home + "</td><td id='iprice'>" +
                     item.Price + "</td><td>"+
                     "<input type='number' id='"+item.Home+"' name='quantity' class='quantity' min='1' max='20' step='1'value='"+item.Qty+"'> </td>"+
                     "<td><button onclick='deleteItem(" + i + ")'><i class='fas fa-check'></i></button></td>"+
                     "<td class='cngtotal'>" +item.Total+ "</td><tr>";
        $("#cartBody").append(row);
        pricetotal=pricetotal+parseInt(item.Total);
        $("#pricetotal").html(pricetotal);

    }
      
}
///change quantity input number
$(document).on('change','.quantity', function() { 
    //var changeqty = JSON.parse(localStorage.cart); 
    var nqty = $(this).val();

    for (var i in cart) {
        //console.log(cart[i].Home); 
        if(cart[i].Home ===  $(this).attr("id").substring()){
           // console.log(cart[i].Home); 
            cart[i].Qty = nqty;
            cart[i].Total = cart[i].Qty*cart[i].Price;
            //console.log(cart[i].Total);
            showCart();
            saveCart();
            return;
        }
    }
});
////modal
function modalcart(){
    $("#details_compra").show();

    $("#confirmcompra").dialog({
        open: function() {
            
        },
        title:"Confirmar compra",
        height: 570, 
        resizable: "false",
        modal: "true", 
        buttons: {
            
            Comprar: function(){ confirmPurchase(); $(this).dialog("close");toastr["info"]("Gracias por su compra"),{"iconClass":'toast-info'};},//confirmPurchase
            SeguirComprando: function () {////keep buying
                $(this).dialog("close");
            }
        },
        show: {
            effect: "fade",
            duration: 1000
        },
        hide: {
            effect: "fade",
            duration: 1000
        }
    });
    }
////////confirm purchase
function confirmPurchase(){
    //console.log("vaciar");
    //$("#cartBody").empty();
    cart.splice(0,cart.length);//vaciamos array
    console.log(cart);
    showCart();
    DelCart();////eliminamos localstorage cart
    $.ajax({
        type : 'POST',
        url  : amigable('?module=cart&functions=confirm_purchase'),
        data: {
             tok: localStorage.getItem("id_token")
            },
        
    })
    .done(function(data){
        $data=JSON.parse(data);
        localStorage.setItem('id_token',$data['tok']);
    })

}
//si  nos deslogueamos y hay cosas en el carro
function deletelogout(){
    console.log("logout!!");
    if(cart.length>0){
    $.ajax({
        type : 'POST',
        url:amigable('?module=cart&function=insert_cart'),
        data: {cart: cart, tok: localStorage.getItem("id_token")},  
    })
    .done(function(data){
        $data=JSON.parse(data);
        localStorage.setItem('id_token',$data['tok']);
    });
    }
    cart.splice(0,cart.length);//vaciamos array
    showCart();
    DelCart();////eliminamos localstorage cart
}

/// add to cart of bbdd when login
function logincart(){
    //console.log('carttt');
    $.ajax({
        type : 'POST',
        url: amigable('?module=cart&function=read_cart'),
        dataType: "json",
        data : {tok:localStorage.getItem("id_token")}
        
    })
    .done(function(data){
        console.log(data);
        for (var i in data) {
            var item = { Home: data[i].nombre,  Price: data[i].precio, Qty: data[i].cantidad, Total: data[i].total }; 
            cart.push(item);
            saveCart();
            showCart();
        }
    })

}
$(document).ready(function () {
    
    ///////go back
    $("#volverbtn").on("click", function () {
        window.history.back();
        
    });

    ///////////purchase:
    $("#comprarbtn").on("click", function () {
        if($(".quantity").val()<'1'){
            toastr["info"]("La cantidad no puede ser menor a 1"),{"iconClass":'toast-info'};

        }else{
        
                if(localStorage.getItem("id_token")===null){
                    loginauto();
                }else{
                    ///to purchase
                    console.log(cart);
                    $.ajax({
                        type : 'POST',
                        url  : amigable('?module=cart&function=insert_cart'),
                        data: {
                        cart: cart, tok: localStorage.getItem("id_token")
                        },
                        
                    })
                    .done(function(data){
                        $data=JSON.parse(data);
                        localStorage.setItem('id_token',$data['tok']);
                        ///////// modal confirm purchase (bbdd data)
                        $.ajax({
                            type : 'POST',
                            url  : amigable('?module=cart&function=read_cart'),
                            dataType: "json",
                            data : {tok:localStorage.getItem("id_token")}
                            
                        })
                        .done(function(data){
                            var pricetotalf=0;
                            console.log(data);
                            $("#contentcompra").empty();
                            for (var i in data) {
                                var item = data[i];
                                var row = "<tr><td style='width: 30%'>" + item.nombre + "</td>"+
                                            "<td>" + item.precio + "</td>"+
                                            "<td>"+item.cantidad+"</td>"+
                                            "<td>" +item.total+ "</td><tr>";
                                $("#contentcompra").append(row);
                                pricetotalf=pricetotalf+parseInt(item.total);
                                setTimeout(function(){
                                $("#pricetotalfinal").html(pricetotalf);}, 500);
                            }
                            //open modal
                            modalcart();
                        
                        })
                        .fail(function(data){
                            
                        })
                    })
                    .fail(function(data){
                        $data=JSON.parse(data);
                        localStorage.setItem('id_token',$data['tok']);
                        console.log(data);
                    })
                }//end if
         }//end if
    })
    
    
});