function validate_nombre(nombre) {
    if (nombre.value.length > 0) {
        //console.log('hola25');
        var expreg = new RegExp( /^[a-z-A-Z\D]+$/);
        //console.log(expreg.test(nombre.value));
        return expreg.test(nombre.value);//retorna true or false
    }
    return false;
}
function validate_nombreP(nombrePropietario) {
    if (nombrePropietario.value.length > 0) {
       // console.log('hola22');
        var expreg =new RegExp( /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/);
        //console.log(expreg.test(nombrePropietario.value));
        return expreg.test(nombrePropietario.value);
    }
    return false;
}

function validate_telefono(telefono) {
    if (telefono.value.length > 0) {
        var expreg = new RegExp(/^(\+34|0034|34)?[6|7|9][0-9]{8}$/);
        console.log(expreg.test(telefono.value));
        return expreg.test(telefono.value);
    }
    return false;
}
function validate_email(email) {
    if (email.value.length > 0) {
        var expreg = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}$/i;
        return expreg.test(email.value);
    }
    return false;
}
function validate_ints(enteros) {
    
    if (enteros.value.length > 0) {
        var expreg = /^\d+$/;
        return expreg.test(enteros.value);
    }
    return false;
}

function validate_radio(radio){
    if(radio[0].checked == false && radio[1].checked == false){
        return false;
    }
    return true;
}
function validate_array(array){
    var suma=0;
    var i;
    console.log("validate");
    for( i=0; i<array.length; i++){
        console.log("validate22");
        if(array[i].checked===true){
            suma++;
        }
    }
    console.log(suma);
    if(suma==0){
        return false;
    }else{
        return true;
    }
}

function validate_data() {
    //console.log('hola1');
   
    var formulario=document.getElementById(formcasa);
	var nombre = formcasa.nombre;
	var localidad = formcasa.localidad;
	var email = formcasa.email;
    var nombrePropietario = formcasa.nombrePropietario;
    //console.log(nombrePropietario.value);
    var telefono = formcasa.telefono;
    var capacidad = formcasa.capacidad;
    var habitaciones = formcasa.habitaciones;
    var fecha= formcasa.datepicker;
    var fecha2= formcasa.datepicker2;
    var completa=document.getElementsByName('completa');
    var servicios=document.getElementsByName('servicios[]');
    var actividades=document.getElementsByName('actividades[]');
    //console.log(actividades.value);
	
	//var v_nombre = validate_nombre(nombre);
	var v_localidad = validate_nombre(localidad);
	var v_nombrePropietario = validate_nombreP(nombrePropietario);
	var v_email = validate_email(email);
	var v_telefono = validate_telefono(telefono);
    var v_capacidad = validate_ints(capacidad);
    var v_habitaciones = validate_ints(habitaciones);
    var v_reserva = validate_radio(completa);
    var v_servicios = validate_array(servicios);
    var v_actividades = validate_array(actividades);
    
///nombre	
	if (document.formcasa.nombre.value.length==0) {
        document.getElementById('e_nombre').innerHTML = "Debe introducir un nombre";
        document.formcasa.nombre.focus();
        $(document.getElementById('e_nombre')).fadeTo(0,1);
        $(document.getElementById('e_nombre')).fadeTo(8000,0);
        return  false;
    } 
        document.getElementById('e_nombre').innerHTML = "";
    
////localidad	
	if (!v_localidad) {
        document.getElementById('e_localidad').innerHTML = "La localidad introducida no es válida";
        document.formcasa.localidad.focus();
        $(document.getElementById('e_localidad')).fadeTo(0,1);
        $(document.getElementById('e_localidad')).fadeTo(8000,0);
        return  false;
    } 
        document.getElementById('e_localidad').innerHTML = "";

////fecha construccion
    if (fecha.value == "") {
        document.getElementById('e_fechacons').innerHTML = "Introduce una fecha válida";
        //document.formcasa.datepicker.focus();
        $(document.getElementById('e_fechacons')).fadeTo(0,1);
        $(document.getElementById('e_fechacons')).fadeTo(10000,0);
        return  false;

    }
        document.getElementById('e_fechacons').innerHTML = "";

////fecha Alta
    if (fecha2.value == "") {
        document.getElementById('e_fechaAlta').innerHTML = "Introduce una fecha válida";
        //document.formcasa.datepicker.focus();
        $(document.getElementById('e_fechaAlta')).fadeTo(0,1);
        $(document.getElementById('e_fechaAlta')).fadeTo(10000,0);
        return  false;

}
    document.getElementById('e_fechaAlta').innerHTML = "";
 
////Propietario   
	 if (!v_nombrePropietario) {
        document.getElementById('e_nombrePropietario').innerHTML = "El nombre introducido no es valido";
        document.formcasa.nombrePropietario.focus();
        $(document.getElementById('e_nombrePropietario')).fadeTo(0,1);
        $(document.getElementById('e_nombrePropietario')).fadeTo(10000,0);
        return  false;
    } 
        document.getElementById('e_nombrePropietario').innerHTML = "";
///email
	if (!v_email) {
        document.getElementById('e_email').innerHTML = "El email introducido no es valido";
        document.formcasa.email.focus();
        $(document.getElementById('e_email')).fadeTo(0,1);
        $(document.getElementById('e_email')).fadeTo(10000,0);
        return  false;
    } 
        document.getElementById('e_email').innerHTML = "";
///telefono   
    if (!v_telefono) {
        document.getElementById('e_telefono').innerHTML = "El teléfono introducido no es valido";
        document.formcasa.telefono.focus();
        $(document.getElementById('e_telefono')).fadeTo(0,1);
        $(document.getElementById('e_telefono')).fadeTo(10000,0);
        return  false;
    } 
        document.getElementById('e_email').innerHTML = "";
    
///capacidad	
	if (!v_capacidad) {
        document.getElementById('e_capacidad').innerHTML = "La capacidad introducida no es valida";
        document.formcasa.capacidad.focus();
        $(document.getElementById('e_capacidad')).fadeTo(0,1);
        $(document.getElementById('e_capacidad')).fadeTo(10000,0);
        return  false;
    } 
        document.getElementById('e_capacidad').innerHTML = "";
    
//habitaciones	
	if (!v_habitaciones) {
        document.getElementById('e_habitaciones').innerHTML = "Las habitaciones introducidas no son validas";
        document.formcasa.habitaciones.focus();
        $(document.getElementById('e_habitaciones')).fadeTo(0,1);
        $(document.getElementById('e_habitaciones')).fadeTo(10000,0);
        return  false;
    } 
        document.getElementById('e_habitaciones').innerHTML = "";

    if (v_reserva==false) {
        document.getElementById('e_completa').innerHTML = "Debe seleccionar almenos una opción";
        document.formcasa.habitaciones.focus();
        $(document.getElementById('e_completa')).fadeTo(0,1);
        $(document.getElementById('e_completa')).fadeTo(10000,0);
        return  false;
    } 
        document.getElementById('e_servicios').innerHTML = "";

    if (v_servicios==false) {
        document.getElementById('e_servicios').innerHTML = "Debe seleccionar almenos un servicio";
        document.formcasa.habitaciones.focus();
        $(document.getElementById('e_servicios')).fadeTo(0,1);
        $(document.getElementById('e_servicios')).fadeTo(10000,0);
        return  false;
    } 
        document.getElementById('e_servicios').innerHTML = "";
    
    
    if (v_actividades==false) {
        document.getElementById('e_actividades').innerHTML = "Debe seleccionar almenos una actividad";
        document.formcasa.habitaciones.focus();
        $(document.getElementById('e_actividades')).fadeTo(0,1);
        $(document.getElementById('e_actividades')).fadeTo(10000,0);
        return  false;
    } 
        document.getElementById('e_actividades').innerHTML = "";

    
      
    
    document.formcasa.submit();
        
        if('&op=create'){
            document.formcasa.action="index.php?page=controller_homes&op=create";
        }
        if('&op=update'){
            document.formcasa.action="index.php?page=controller_homes&op=update";
        }
}