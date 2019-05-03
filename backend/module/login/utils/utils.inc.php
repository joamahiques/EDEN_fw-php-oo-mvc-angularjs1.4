<?php
   
   function validate_register($user){
       $error='';
       set_error_handler('ErrorHandler');
            try{
                $check =check_user($user);
            }catch (Exception $e){
                echo json_encode("Error de conexión");
                exit();
            }
        restore_error_handler();
        return $check;
   }
   function validate_login($user){
       
            $error='';
            $check =check_user($user['user']);
            $data = $check[0];
            $act = $check[0]['activate'];
            $pass = $check[0]['password'];
            $_SESSION['avatar'] = $check[0]['avatar'];
            //$_SESSION['avatar'] = $value['avatar'];
        
        if(!$data){
            $error='El usuario no existe';
        }else if($act==="0"){
            $error='Tienes que verificar tu cuenta. Revisa el correo';
        }else if(!password_verify($user['pass'],$check[0]['password'])){
            $error='La contraseña no es correcta';
        };
        return $return= array('data'=>$data, 'error'=>$error);
}
        
   function check_user($user){
        return loadmodel(MODEL_MODULE,'login_model','validate',$user);
   }

   function send_mail_social($user,$email,$newpass){
        set_error_handler('ErrorHandler');
        $arrArgument = array(
            'reset-user'=>$user,
            'reset-email'=>$email,
        );
        $mail['token']= loadModel(MODEL_MODULE,'login_model','recover_pass',$arrArgument);///envia contraseña para los registrados por social-log para que puedan modificar su profile
        restore_error_handler();
        if($mail){//enviar mail
        $mail['type']='newpass';
        $mail['inputEmail']=$arrArgument['reset-email'];
        $mail['inputMessage']='Tu contraseña en EDEN: <b>'.$newpass.'</b>';
        enviar_email($mail);
    }
        //return loadmodel(MODEL_MODULE,'login_model','validate',$user);

}

