function valide_contact(){
	var mailp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    //Name
    if(document.form.name.value.length === 0){
        $('#con_name').addClass('has-error').next('span').addClass('is-visible').html("EL NOMBRE ES REQUERIDO");
        document.form.name.focus();
        return 0;
    }
    $('#con_name').removeClass('has-error').next('span').removeClass('is-visible');
	//Mail
	if(document.form.email.value.length === 0){
		$('#con_email').addClass('has-error').next('span').addClass('is-visible').html("EL MAIL ES REQUERIDO");
		document.form.email.focus();
		return 0;
	}
	$('#con_email').removeClass('has-error').next('span').removeClass('is-visible');

	if(!mailp.test(document.form.email.value)){
		$('#con_email').addClass('has-error').next('span').addClass('is-visible').html("EL FORMATO DE MAIL NO ES VÁLIDO");
		document.form.email.focus();
		return 0;
	}
	$('#con_email').removeClass('has-error').next('span').removeClass('is-visible');
	
    ///select
    if(document.form.opcontact.value === 'Selecciona una opción'){
		$('#con_options').addClass('has-error');$('#e_select').addClass('is-visible').html("SELECCIONA UNA OPCIÓN");
		document.form.opcontact.focus();
		return 0;
	}
    $('#con_options').removeClass('has-error');$('#e_select').removeClass('is-visible');
    ///text area
    if((document.form.mess.value.length === 0)||(document.form.mess.value.length < 15)){
		$('#con_mess').addClass('has-error').next('span').addClass('is-visible').html("Mínimo 15 carácteres");
		document.form.mess.focus();
		return 0;
	}
	$('#con_mess').removeClass('has-error').next('span').removeClass('is-visible');

	//document.formlogin.click();//click
	//document.formlogin.action="index.php?page=controller_login&op=list_login";
	
}



$(document).ready(function(){

    $("#form").submit(function (e) {
        e.preventDefault();
        console.log('enviar');
        var data = $("#form").serialize();
        if(valide_contact() != 0){
            console.log('sin errores');
            $.ajax({
				type : 'POST',
				url  : '../../contact/send_form',
				data :data,
				dataType: 'json',
				beforeSend: function(){	
					$(".cd-error-message").fadeOut();
				}
			})
			.done(function(data){	
                console.log(data);
                toastr["info"](data),{"iconClass":'toast-info'};
                $('#form')[0].reset();
            });
        }
    })

});