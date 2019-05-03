$(document).ready(function () {
   
    $('body').on("click",".read", function () {
        var id = this.getAttribute('id');
        $.ajax({
            // En data puedes utilizar un objeto JSON, un array o un query string
            //data: {"parametro1" : "valor1"},
            type: "post",//Cambiar a type: POST si necesario
            // Formato
            dataType: "json",
            data: 'op=read_modal&modal='+id,
            // URL
           url: amigable('?module=components&function=modal&aux=read_modal'),
        })
         .done(function( data) {
                 //console.log( "La solicitud se ha completado correctamente." );
                
                 $('#modalcontent').empty();
                 $('#nombre').html(data[0].nombre);
                 $('<div></div>').attr('id','Div1').appendTo('#modalcontent');
                 $('<div></div>').attr('id','Div2').appendTo('#modalcontent');
                 $('<div></div>').attr('id','preciocasa').appendTo('#modalcontent');
                
                 $("#Div1").html(
                            '<br><span>Localidad:   <span id="localidad">'+data[0].localidad+'</span></span></br>'+
                            '<br><span>Provincia:   <span id="prov">'+data[0].provincia+'</span></span></br>'+
                            '<br><span>Capacidad Total:     <span id="capacidad">'+data[0].capacidad+'</span></span></br>'+
                            '<br><span>Propietario:     <span id="nombrePropietario">'+data[0].nombrePropietario+'</span></span></br>'+
                            '<br><span>DNI:     <span id="dni">'+data[0].dni+'</span></span></br>'+
                            '<br><span>Teléfono:    <span id="telefono">'+data[0].telefono+'</span></span></br>'+
                            '<br><span>Email:     <span id="email">'+data[0].email+'</span></span></br>'
                 )
                 $("#Div2").html(
                            '<br><span>Num Habitaciones:     <span id="habitaciones">'+data[0].habitaciones+'</span></span></br>'+
                            '<br><span>Reserva Completa:     <span id="entera">'+data[0].entera+'</span></span></br>'+
                            '<br><span>Servicios:     <span id="servicios">'+data[0].servicios+'</span></span></br>'+
                            '<br><span>Actividades:     <span id="actividades">'+data[0].actividades+'</span></span></br>'+
                            '<br><span>Fecha de contrucción:     <span id="fechacons">'+data[0].fechacons+'</span></span></br>'+
                            '<br><span>Años de la casa:     <span id="edadcasa">'+data[0].edadcasa+'</span></span></br>'+
                            '<br><span>Fecha de alta:     <span id="fecha">'+data[0].fecha+'</span></span></br>'
                 )
                 $("#preciocasa").html('<br><span>Precio:     <span id="precio">'+data[0].precionoche+'</span></span></br>')

                modal(data[0].nombre);
            
         })
         .fail(function( data, textStatus, errorThrown ) {
             if ( console && console.log ) {
                 console.log( "La solicitud a fallado: " +  data);
             }
        });
        
    });
 });

function modal(data){
                $("#details_home").show();

                $("#home_modal").dialog({
                    open: function() {
                        $(".ui-dialog-buttonset").prepend("<span class='ui-button ' >Nº Noches:<input type='number' name='quantity' id='quantity' class='quantity' min='1' max='20' step='1'value='1'></span>");
                    },
                    title:data,
                    //width: 500, 
                    height: 570, 
                    resizable: "false",
                    modal: "true", 
                    buttons: {
                        
                        Reservar: function(){ addToCart();$(this).dialog("close");},//$(this).dialog("close")
                        Ok: function () {
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