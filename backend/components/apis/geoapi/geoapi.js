$(document).ready(function () {

////////////////////// API SELECT PROVINCIAS GEOAPI
    $.ajax({
                
        type: "GET",
       // dataType: "Json",
        url:"http://apiv1.geoapi.es/provincias?type=JSON&key="+keygeo+"&sandbox=0",
    })
    .done(function( data) {
        //console.log(data.data.length);
        if(data.data.length == '0'){/////////si esta vacio cargamos de xml
            load_provinces_xml();
            
        }else{
            
            $('#provinciaini').empty();
            //console.log(data);
            $("#provinciaini").append('<option disabled selected> Selecciona Provincia</option>');
            $.each(data.data, function(index, list) {
                $("#provinciaini").append(
                     ' <option id="'+list.CPRO+'" value="'+list.PRO+'">'+list.PRO+'</option> '
                    // ' <option value="'+list.CPRO+'">'+list.PRO+'</option> '
                
                    ) 
             });
        }//end if 

    })// end done
    .fail(function( data, textStatus, jqXHR ) {
        console.log("HELLOOOOO FAIL");
        load_provinces_xml();
    })
$("#selcity").append('<option disabled selected>Selecciona Municipio</option>');
////////////////////// API SELECT municipios GEOAPI
$("#provinciaini").on("change", function () {
         var valPro = $(this).children(":selected").attr("id");
       // var valPro = $(this).children(":selected").val();
        //console.log(valPro);
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://apiv1.geoapi.es/municipios?CPRO="+valPro+"&type=JSON&key="+keygeo+"&sandbox=0", 

            })
            .done(function( data, textStatus, jqXHR ) {
                    //console.log( data );
                    if(data.data.length == '0'){/////////si esta vacio cargamos de xml
                        load_cities_xml(valPro);
                    }else{
                    $("#selcity").empty();
                    $("#selcity").append("<option disabled selected>Selecciona Municipio</option>");
            
                        $.each(data.data, function(i, item) {///bucle para rellenar el dropdown1
                        // console.log( item);
                        item.DMUN50=quitaAcentos(item.DMUN50);
                            $("#selcity").append("<option value='"+item.DMUN50+"'>" + item.DMUN50 + "</option>")
                        });
                    }
            })//end done
            .fail(function( data, textStatus, jqXHR ) {
                console.log("HELLOOOOO FAIL");
                load_cities_xml(valPro)
            })
                
    });//end .change
});

function load_provinces_xml() {
    //console.log('province');
    $.post("http://localhost/www/EDEN_ANGULAJS/resources/provinciasypoblaciones.xml", function (xml) {
	    $("#provinciaini").empty();
	    $("#provinciaini").append('<option value="" selected="selected">Selecciona Provincia</option>');

        $(xml).find("provincia").each(function () {
            var id = $(this).attr('id');
            var name = $(this).find('nombre').text().toUpperCase();
            $("#provinciaini").append("<option id='" + id + "' value='" + name + "'>" + name + "</option>");
        });
    })
    .fail(function() {
        alert( "error load_provinces" );
    });
}
function load_cities_xml(prov) {
    $.post("http://localhost/www/EDEN_ANGULARJS/resources/provinciasypoblaciones.xml", function (xml) {
		$("#selcity").empty();
	    $("#selcity").append('<option value="" selected="selected">Selecciona Municipio</option>');

		$(xml).find('provincia[id=' + prov + ']').each(function(){
    		$(this).find('localidad').each(function(){
    			 $("#selcity").append("<option value='" + $(this).text().toUpperCase() + "'>" + $(this).text().toUpperCase() + "</option>");
    		});
        });
	})
	.fail(function() {
        alert( "error load_cities" );
    });
}