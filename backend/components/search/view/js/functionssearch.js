//////////BUSCADOR//////////////////////////////

    ///leemos para rellenar el combo1

    $.ajax({
        
        type: "POST",
        dataType: "json",
        url:amigable('?module=components&function=search&aux=firstdrop'),
    })
    .done(function( data, textStatus, jqXHR ) {
       //console.log( data );
       var $drop = $("#drop1");
       //$drop.empty();
         $.each(data, function(i, item) {///bucle para rellenar el dropdown1
            //console.log( item);
            $drop.append("<option>" + item.provincia + "</option>")
               
        });
    })
    .fail(function(data){
        console.log(data);
    });
    
    
    $(document).ready(function () {
       
        ///rellenamos combo2 al escoger en el 1
        $("#drop1").on("change", function () {
                var valPro = $(this).val();
            $.ajax({
                type: "POST",
                dataType: "json",
                url: amigable('?module=components&function=search&aux=seconddrop'),
                data: {id:valPro}
            })
            .done(function( data, textStatus, jqXHR ) {
               
               if(data=="error"){
                toastr["error"]("Error de conexión"),{"iconClass":'toast-info'};

               }else{
                    var $drop2 = $("#drop2");
                    $drop2.empty();
            
                        $drop2.append("<option value=false>" + "Selecciona Municipio" + "</option>");
            
                        $.each(data, function(i, item) {///bucle para rellenar el dropdown1
                        // console.log( item);
                            $drop2.append("<option>" + item.localidad + "</option>")
                            
                        });
                }
       
            });//end done
            
        });//end .change
    
            //autocomplete input3
            $("#autocom").on("keyup", function () {
                var auto=$(this).val();///valor de lo que estamos escribiendo
                var drop2=$("#drop2").val();// valor del combo de localidades
                var autCom = {auto: auto, drop2: drop2}; 
                $.ajax({
                    type: "POST",
                    url: amigable('?module=components&function=search&aux=autocomplete'), 
                    data: autCom,
                })
                .done(function( data, textStatus, jqXHR ) {
                    if(data=="error"){
                        toastr["error"]("Error de conexión"),{"iconClass":'toast-info'};
        
                       }else{
                        // console.log(data);
                            $('#optionsauto').fadeIn(1000).html(data);// se ve
                            ///si selecciono valor
                            $('.autoelement').on('click', function(){
                                var id = $(this).children('a').attr('id');
                                console.log(id);
                                $('#autocom').val(id);
                                //$('#autocom').val($('#'+id).attr('data'));
                                $('#optionsauto').fadeOut(1000);
                        
                            });
                            ///si click fuera se borra value y se cierra
                            $("#contenido, .slider__img").on('click', function(){
                                $('#optionsauto').fadeOut(1000);
                                $('#autocom').val("");
                            });
                    }
                });
            });
    
        //// BTN SEARCH
            $("#searchlist").on("click", function (){
                var drop = $("#drop1").val();
                var drop2=$("#drop2").val();
                var auto=$("#autocom").val();
                 //console.log(drop);
                // console.log(drop2);
                // console.log(auto);
                sessionStorage.setItem('provincia', drop); // save data
                sessionStorage.setItem('local', drop2); // save data
                sessionStorage.setItem('val', auto); // save data
    
                if((drop==0)&&(drop2==0)&&(auto==="")){
                    toastr["info"]("Ingresa criterios de busqueda o ve a la Tienda"),{"iconClass":'toast-info'};
                    
                }else{
                    if(window.location.href == 'http://localhost/www/EDEN_ANGULARJS/shop/list_map/'){
                       
                        window.location.href = 'http://localhost/www/EDEN_ANGULARJS/shop/list_map/'
                    }else{
                    window.location.href = amigable('?module=shop&function=list_shop')
                    }
                }
                
            });
    });