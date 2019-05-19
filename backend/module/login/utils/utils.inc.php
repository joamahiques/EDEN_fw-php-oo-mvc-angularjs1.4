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
        $data=false;
        $error='';
        $check =check_user($user['user']);
        if($check[0]){
            $data = $check[0];
            $act = $check[0]['activate'];
            $pass = $check[0]['password'];
            $_SESSION['avatar'] = $check[0]['avatar'];
        }        
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
}
require SITE_ROOT . '/auth0/vendor/autoload.php';
use Auth0\SDK\Auth0;
    function datossocial(){
        // echo json_encode($domain);
        // exit;
        $auth0 = new Auth0([
            'domain' => authdomain,
            'client_id' => authclientID,
            'client_secret' => clientsecret,
            'redirect_uri' => authredirect,
            'audience' => authaudience,
            'scope' => 'openid profile',
            'persist_id_token' => true,
            'persist_access_token' => true,
            'persist_refresh_token' => true,
        ]);
        
        $auth0->login(); 	
        
    
    }
    function socialprofile(){
        $auth0 = new Auth0([
            'domain' => authdomain,
            'client_id' => authclientID,
            'client_secret' => clientsecret,
            'redirect_uri' => authredirect,
            'audience' => authaudience,
            'scope' => 'openid profile',
            'persist_id_token' => true,
            'persist_access_token' => true,
            'persist_refresh_token' => true,
        ]);
        $userInfo = $auth0->getUser();
        return json_encode($userInfo);	
    }
    // function sociallogout(){

    //     $auth0 = new Auth0([
    //         'domain' => authdomain,
    //         'client_id' => authclientID,
    //         'client_secret' => clientsecret,
    //         'redirect_uri' => authredirect,
    //         'audience' => authaudience,
    //         'scope' => 'openid profile',
    //         'persist_id_token' => true,
    //         'persist_access_token' => true,
    //         'persist_refresh_token' => true,
    //     ]);
    //     $auth0->logout();
    //     $return_to = 'http://localhost/www/EDEN_ANGULARJS/';
    //     $logout_url = sprintf('http://%s/v2/logout?client_id=%s&returnTo=%s', authdomain, authclientID, $return_to);
    //     // https://dev-joamahi.eu.auth0.com/v2/logout?client_id=9jz8YMFTP9gdmpBtvdzh7guntVbCZpy9&returnTo=http%3A%2F%2Flocalhost%2Fwww%2FEDEN_ANGULARJS%2F&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4yLjIifQ%3D%3D
    //     header('Location: ' . $logout_url);
    //     die();
    // }
    ?>