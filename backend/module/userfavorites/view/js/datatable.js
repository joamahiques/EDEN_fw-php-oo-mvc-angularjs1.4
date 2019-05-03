
$(document).ready(function () {
    //console.log(localStorage.getItem("email"));
    //console.log("email");
    var url= 'module/userfavorites/controller/conFavo.php?op=datatable&email='+localStorage.getItem("email");
    var source =
            {
                dataType: "json",
                type: 'GET',
                //localData: data,
                url: url,
                dataFields: [
                    { name: 'nombre'},
                    { name: 'localidad'},
                    { name: 'provincia' },
                    { name: 'capacidad'},
                    { name: 'entera'}
                ], 
               
            };
            
            var dataadapter = new $.jqx.dataAdapter(source);
             //console.log(dataadapter);

             if ($("#dataTable").length != 0){// para que no de error en paginas sin datatable
                $("#dataTable").jqxDataTable( {
                    source: dataadapter,
                     width: 900,
                    pageable: true,
                    pagerButtonsCount: 10,
                    theme: 'ui-lightness',
                    sortable: true,
                    pageable: true,
                    altRows: true,
                    filterable: true,
                    columnsResize: true,
                    pagerMode: 'advanced',
                    columns: [
                    { text: 'Nombre', dataField: 'nombre', width:200},
                    { text: 'Localidad', dataField: 'localidad', width:200 },
                    { text: 'Provincia', dataField: 'provincia', width:200},
                    { text: 'Capacidad', dataField: 'capacidad' , width:150},
                    { text: 'Reserva Completa', dataField: 'entera', width:150},
                    
                    ]
                });  
            }

});
