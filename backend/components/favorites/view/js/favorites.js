
///////////////////////////////FAVORITOS
urlfavoritos=tryurl();
//console.log("Favorites");   
function readmyfavorites(){
    if(localStorage.getItem('id_token')!=null){
        var tok=localStorage.getItem('id_token');
        //console.log(tok);
        $.ajax({  
            type: "POST",
            dataType: "json",
            data   :  {tok},
            //url: "components/favorites/controller/controllerfavorites.php?op=readfavorites",
            url: urlfavoritos+'components/favorites/read_favorites'
        })
        .done(function( data, textStatus, jqXHR ) {
        
        if(data=='error'){
            console.log( data );
        }else{
            $.each(data, function(i, item) {///bucle para buscar los elementos que coincidan con los id de favoritos y los pintamos
                // console.log( item.nombre );
                var id= document.getElementById(item.nombre);
                $(id).children("i").addClass("fas");    
            });
        }

        });  
    }
}
$(document).ready(function () {

   
    setTimeout(function(){
    ////leemos favoritos para que aparezcan los corazones pintados
    readmyfavorites();
    
///añadir o borrar de favoritos
   
    $(document).on("click",".corazon", function () {
        if(localStorage.getItem('id_token')===null){

            loginauto();
            
                    
        }else{
   
                    var id = this.getAttribute('id');
                    var tok=localStorage.getItem('id_token');
                // console.log(id);
                    
                    if($(this).children("i").hasClass("fas")){///si está en favoritos, borralo
                        
                        $(this).children("i").removeClass("fas");//cambiamos la clase al corazón para que se despinte
                            
                            $.ajax({
                            
                                type: "POST",
                                dataType: "json",
                                url: urlfavoritos+"components/favorites/delete_favorites",
                                data : {'id':id,'tok':tok},
                            })
                            
                            .done(function( data, textStatus, jqXHR ) {
                            //  console.log("si es favorito22");
                                
                            });
                    
                    }else{ //si no está en favoritos, agrégalo
                        
                        $(this).children("i").addClass("fas");///añadimos la clase FAS, corazón pintado
                            $.ajax({   
                                type: "POST",
                                dataType: "json",
                                url: urlfavoritos+"components/favorites/favorites",
                                data : {'id':id,'tok':tok}
                            })
                            .done(function( data, textStatus, jqXHR ) {
                                
                            
                            });
                    }//end if
        }//end if
    });

}, 500);
});