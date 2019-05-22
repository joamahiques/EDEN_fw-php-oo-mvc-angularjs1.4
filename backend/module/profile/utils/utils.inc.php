<?php
function validate_profile(){

    set_error_handler('ErrorHandler');
        $user = $_POST['tok'];
        $arrValue = false;
        $arrValue = loadModel(MODEL_MODULE, "profile_model", "select_user", $user);
    restore_error_handler();
        if(!$arrValue){
            echo "El usuario no existe";///aqui cambia el token? en teoria si sale esto es por que el token ha sido modificado
            exit();
        }else{
             
            // if (password_verify($password,$arrValue[0][0]['password'])) {
            //     return array ('ok',$arrValue[1]);
		    // }else {
				return array ('ok',$arrValue[1]);
				
            // }
        }
    
}
