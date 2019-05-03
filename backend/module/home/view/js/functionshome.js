//variable initialization 
var current_page	=	1;
var loading			=	false;
var url1             =   '';
//console.log(window.location.href);
$(document).ready(function(){

    url1=tryurl();
    $('.load').fadeIn(500);
    $.ajax({
        type:"post",
        url : amigable('?module=home&function=scroll_home'),
        dataType:"json",
        data:'p='+current_page,
        success: function(data) {///array: totalcount and results
            // console.log(data);
            //total:
            total_pages=Math.ceil(parseInt(data.totalcount[0].totalcasas) / parseInt(6))//total pages=round total houses/6
            //results
            $.each(data.results, function(index, list) {

                $("#inicio").hide().append('<div class="grid">'+
                '<div class="text1 flex">'+ list.nombre + '<a class="corazon" id="'+list.nombre+'"><i class="far fa-heart"></i></a></div>'+
                '<br>Localidad:  '+ list.localidad + '</br>'+
                '<br id="jolo">Provincia:  '+ list.provincia + '</br>'+
                '<br>Capacidad:  '+ list.capacidad + '</br>'+
                '<br>Precio Noche:  '+ list.precionoche + '</br>'+
                '</br>'+'</br>'+
                "<a  class='read'  id='"+list.nombre+"'>READ MORE</a>"+'&nbsp;'+'</div>').fadeIn(1000)	
                
            });
            $('.load').fadeOut(500);
            current_page++;
        },
        error: function (data,response){
            $("#inicio").hide().append('<div><h3>Error cargando los productos</h3></div>').fadeIn(1000);
            $('.load').fadeOut(500);
            console.log(data);
            console.log(response);
            //console.log(response);
            console.log("not nooo noo");
          }
	
    });
    if(document.getElementById('inicio')){
    $(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()){
			if( ($(window).scrollTop() + $(window).height() >= $(document).height()  ) && (current_page <= total_pages) ) {
				    if( ! loading ){
                        //console.log(url1);
                        loading = true;
						$('.load').fadeIn(500);
						$.ajax({
							type:"post",
                            // url:url1,
                            url: url1+'home/scroll_home',
                            dataType:"json",
                            data:'p='+current_page,
							success:function(data){
                                var casas='';
								$.each(data.results, function(index, list) {

                                    casas=casas+('<div class="grid">'+
                                    '<div class="text1 flex">'+ list.nombre + '<a class="corazon" id="'+list.nombre+'"><i class="far fa-heart"></i></a></div>'+
                                    '<br>Localidad:  '+ list.localidad + '</br>'+
                                    '<br id="jolo">Provincia:  '+ list.provincia + '</br>'+
                                    '<br>Capacidad:  '+ list.capacidad + '</br>'+
                                    '<br>Precio Noche:  '+ list.precionoche + '</br>'+
                                    '</br>'+'</br>'+
                                    "<a  class='read'  id='"+list.nombre+"'>READ MORE</a>"+'&nbsp;'+'</div>')
                                    
                                });
                                //console.log(casas);
                                $(casas).hide().appendTo('#inicio').fadeIn(2000);
                                readmyfavorites();
								current_page++;
								$('.load').fadeOut(500);
								loading = false;
							}
						});	
				    }
			}
		}
    });
}//end if
});

