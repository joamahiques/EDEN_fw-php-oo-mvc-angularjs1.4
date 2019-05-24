

$(document).ready(function(){
    
/////////////////////////////////SHOP

    if (document.getElementById('inicioshop')) {
         var pro= sessionStorage.getItem('provincia');
         //console.log(pro+" provi");
        if (pro==='null'){//si provincia es null(entramos por menu)
            geolocation('#shopclub');
        }else{
        ///peticion para ver el codigo de provincia
            $.ajax({
                url: "/www/EDEN_ANGULARJS/components/apis/clubrural/provinces.json",
                dataType: 'json',
                type: 'POST',
                success: function (data) {
                //console.log(data); 
                $.each(data, function(i, item) {
                    // console.log(i); 
                    // console.log(pro); 
                    if(i === pro){
                        var idprovi=item.id;
                                $.ajax({
                                    type: "GET",
                                    url:"https://api.clubrural.com/api.php?claveapi="+keyclub+"&type=provincias&idprov="+idprovi,
                                    dataType: "xml",
                                })
                                .done(function( data, textStatus, jqXHR ) {
                                    //console.log(data);
                                    var nombre;
                                    var provincia;
                                    var img;
                                    var cont=0;
                                    $('#shopclub').empty();
                                    $("#h2club").append("Más ofertas en "+pro+":");
                                    $(data).find("alojamiento").each(function () {
                                       // console.log('find');
                                        nombre = $(this).find('nombre').text();
                                        provincia = $(this).find('provincia').text();
                                        img = $(this).find('img-medium').text();
                                        dir = $(this).find('url').text();
                                    
                                                $('#shopclub').append(
                                                    
                                                    '<div class="grid">'+ 
                                                    '<div class="text1 flex">'+ nombre + '</div>'+
                                                    '<br><img src="'+img+'">'+
                                                    '<br><span>Provincia:   <span id="prov">'+provincia+'</span></span></br>'+
                                                    '<a class="btn" id="'+nombre+'" href="'+dir+'">CLUBRURAL</a>'+
                                                    '</div>'
                                                ) 
                                        cont++
                                        if(cont==3){
                                            return false;
                                        }
                                    });  
                                })// end done
                                .fail(function( data, textStatus, jqXHR ) {
                                    //console.log("HELLOOOOO FAIL"+data);
                                    $('#shopclub').empty();
                                    $("#h2club").append("No se han podido cargar ofertas de "+pro+". Pruebe más tarde");
                                })
                    }
                    })
                    
                },
                error: function (data) {
                    $('#shopclub').empty();
                    $("#h2club").append("No se han podido cargar ofertas de "+pro+". Pruebe más tarde");
                    //console.log(data);
                },
            });
        }
    };
    


//////////////////////// HOME para la geolocalización
    
    if ("geolocation" in navigator){ //check geolocation available 
        
        geolocation('#inicioclub');
    //si no tenemos la geolocation usamos las coordenadas de Ontinyent
    
    }else{
            console.log("Browser doesn't support geolocation!");
            url="https://api.clubrural.com/api.php?claveapi="+keyclub+"&type=gmaps&lat=38.8220593&lng=-0.6063927&limitkm="+numeroAleatorio(1,80);
        // console.log(url);
        
            $.ajax({
                type: "GET",
                url:url,
                dataType: "xml",
            })
            .done(function( data, textStatus, jqXHR ) {
                console.log(data);
                var nombre;
                var provincia;
                var img;
                var cont=0;

                $(data).find("alojamiento").each(function () {
                    
                    nombre = $(this).find('nombre').text();
                    provincia = $(this).find('provincia').text();
                    img = $(this).find('img-medium').text();
                    dir = $(this).find('url').text();
                
                            $('#inicioclub').append(
                                '<div class="grid">'+ 
                                '<div class="text1 flex">'+ nombre + '</div>'+
                                '<br><img src="'+img+'">'+
                                '<br><span>Provincia:   <span id="prov">'+provincia+'</span></span></br>'+
                                '<a class="btn" id="'+nombre+'" href="'+dir+'">CLUBRURAL</a>'+
                                '</div>'
                            ) 
                    cont++
                    if(cont==3){
                        return false;
                    }
                });
                
            })// end done
            .fail(function( data, textStatus, jqXHR ) {
                $('#shopclub').empty();
                $("#h2club").append("No se han podido cargar ofertas de "+pro+". Pruebe más tarde");
                //console.log("HELLOOOOO FAIL"+data);
            })
        
     
    }///end if

});//end ready

function geolocation(id) {
        //try to get user current location using getCurrentPosition() method
        navigator.geolocation.getCurrentPosition(function(position){ 
            var pro= sessionStorage.getItem('provincia');
            var latitude=position.coords.latitude;
            var longitude=position.coords.longitude;
            //console.log("Found your location nLat : "+latitude+" nLang :"+longitude);
            url="https://api.clubrural.com/api.php?claveapi="+keyclub+"&type=gmaps&lat="+latitude+"&lng="+longitude+"&limitkm="+numeroAleatorio(1,80);
             //console.log(url);
            // console.log('geolocation');
        
            $.ajax({
                type: "GET",
                url:url,
                dataType: "xml",
            })
            .done(function( data, textStatus, jqXHR ) {
                //console.log(data);
                var nombre;
                var provincia;
                var img;
                var cont=0;
                //$('<div></div>').attr('id','list1').attr('class','flex1').appendTo('#inicioclub');
                $(data).find("alojamiento").each(function () {
                    
                    nombre = $(this).find('nombre').text();
                    provincia = $(this).find('provincia').text();
                    img = $(this).find('img-medium').text();
                    dir = $(this).find('url').text();
                
                            $(id).append(
                                '<div class="grid">'+ 
                                '<div class="text1 flex">'+ nombre + '</div>'+
                                '<br><img src="'+img+'">'+
                                '<br><span>Provincia:   <span id="prov">'+provincia+'</span></span></br>'+
                                '<a class="btn" id="'+nombre+'" href="'+dir+'">CLUBRURAL</a>'+
                                '</div>'
                            ) 
                    cont++
                    if(cont==3){
                        return false;
                    }
                });  
            })// end done
            .fail(function( data, response, jqXHR ) {
                // $('#shopclub').empty();
                // $("#h2club").append("No se han podido cargar ofertas de "+pro+". Pruebe más tarde");
                //console.log("HELLOOOOO FAIL"+ response);
            })
        
        
        });///end geolocation
    }