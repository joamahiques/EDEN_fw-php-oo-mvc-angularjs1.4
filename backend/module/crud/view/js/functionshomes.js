$(document).ready(function () {
    $("#home").append(sessionStorage.getItem('home'));
/////////////////lista
    $.ajax({
        type:"post",
        url : amigable('?module=crud&function=lista'),
        dataType:"json",
    })
    .done(function( data, textStatus, jqXHR ) {
        //console.log(data);
        $('.list').html(
            '<table width=100% id="table_crud">'+
                    '<thead>'+
                        '<tr>'+
                            '<td><b>Nombre</b></th>'+
                            '<td><b>Localidad</b></th>'+
                            '<td><b>Provincia</b></th>'+
                            '<td><b>Capacidad</b></th>'+
                            '<td><b>Precio</b></th>'+
                            '<th class="td1"><b>Accion</b></th>'+
                        '</tr>'+
                    '</thead>'+
                '<tbody id="bodycrud">'+
                '</tbody>'+'</table>')
        for (var i in data) {
            var item = data[i];
            var row = "<tr><td>" + item.nombre + "</td>"+
                        "<td>" +item.localidad + "</td>"+
                        "<td>" +item.provincia+"</td>"+
                        "<td>" +item.capacidad+"</td>"+
                        "<td>" +item.precionoche+"€</td>"+
                        "<td class='center'>"+
                        "<a  class='read'  id='"+item.nombre+"'>Read</a>"+
                        "<a class='update' id='"+item.nombre+"' href='"+amigable('?module=crud&function=update&aux="'+item.nombre+'"')+"'>Update</a>"+
                        "<a class='delete' id='"+item.nombre+"' href='"+amigable('?module=crud&function=delete&aux="'+item.nombre+'"')+"'>Delete</a>"+
                        "</td>"+'</tr>';
            $("#bodycrud").append(row);
		}
		setTimeout(function(){$('#table_crud').DataTable();}, 50);
    });

//////////////delete
$(document).on("click",".delete", function () {
    var id = this.getAttribute('id');
    sessionStorage.setItem('home',id);
});

//////////////delete home
$("#deletehome").submit(function (e) {
    e.preventDefault();
            $.ajax({
                type : 'POST',
                url  : amigable('?module=crud&function=delete_home'),
                data :{home:sessionStorage.getItem('home')},
                dataType: 'json',
            })
            .done(function(data, response){	
                console.log(data);
                console.log(response);
                if(data){
                    toastr["info"]('Casa borrada correctamente'),{"iconClass":'toast-info'};
                    setTimeout(function(){window.location.href = amigable('?module=crud&function=list_crud'); }, 3000);
                }else{
                    toastr["info"]('Fallo de conexión. Prueba mas tarde'),{"iconClass":'toast-info'};
                    setTimeout(function(){window.location.href = amigable('?module=crud&function=list_crud'); }, 3000);
                }
            })
            .fail(function(data, response){
                toastr["info"]('Fallo de conexión. Prueba mas tarde'),{"iconClass":'toast-info'};
                setTimeout(function(){window.location.href = amigable('?module=crud&function=list_crud'); }, 3000);
            });
});

////////////////create home
        
   
});

