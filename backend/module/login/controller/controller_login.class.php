<?php
    
  class controller_login {
	
	function __construct() {
				include(FUNCTIONS_MODULE . "utils.inc.php");
				$_SESSION['module'] = "login";
		}

	function sociallogin() {
			$userInfo = datossocial();
			echo json_encode($userInfo);
			exit;
	}
	function datossocial() {
		$userInfo = socialprofile();
		$data = json_decode($userInfo,true);
		$id = explode("|", $data[sub]);
		$id = $id[1];
		$arrValue=check_user($id);
		$_SESSION['avatar']=$data['picture'];
				if(!$arrValue){
					///si no existe registralo
					$arrArgument = array(
						'id_user'=>$id,
						'email'=>$data['email'],
						'user'=>$data['nickname'],
						'avatar'=>$data['picture']
					);
					set_error_handler('ErrorHandler');
						$arrValue=loadModel(MODEL_MODULE,'login_model','social',$arrArgument);
					restore_error_handler();
					if($arrValue){
						///enviar mail para cambiar contraseña( que no hay ) y poder modificar los datos del usuario en el perfil
						// send_mail_social($data['user'],$data['email'],$arrValue[1]);
						//echo json_encode($arrValue[0]);//devolvemos token
						header('Location: http://localhost/www/EDEN_ANGULARJS/#/social'.$arrValue[0]);
  						die();
					}	
				}else{
					//si existe devuelve el token;
					//echo json_encode($arrValue[0]['token']);
					header('Location: http://localhost/www/EDEN_ANGULARJS/#/social'.$arrValue[0]['token']);
  						die();
				}
			$_SESSION['tiempo'] = time();
			exit;
}
	function register() {
	  
				$user=$_POST['username'];
				$valide = validate_register($user); 
				if(!$valide){
					$arrArgument = array(
						'user'=>$_POST['username'],
						'email'=>$_POST['email'],
						'passwd'=> $_POST['password']
				);
				set_error_handler('ErrorHandler');
						try {
								$arrValue['token']= loadModel(MODEL_MODULE,'login_model','insert_user',$arrArgument);//return token
							
						} catch (Exception $e) {
									echo json_encode("Error");
									exit;
						}
				restore_error_handler();
						if(!$arrValue){
									echo json_encode("Error");
									exit;
						}else{
							$arrValue['type']='alta';
							$arrValue['inputEmail']=$arrArgument['email'];
							$arrValue['inputMessage']='Para activar tu cuenta en EDEN pulse el siguiente enlace:';
							enviar_email($arrValue);
						}
						echo "ok";
						exit;
				}else{
					echo "ERROR: Este usuario ya está registrado";
					exit;
				}
		}
	function login() {
			
				$user= array('user'=>$_POST['user'], 'pass'=>$_POST['password']);
				set_error_handler('ErrorHandler');
					try{
						$valide=validate_login($user);
					}catch (Exception $e){
							echo json_encode("Error");
							exit;
					}	
				restore_error_handler();
					if($valide['error']==""){
						$_SESSION['tiempo'] = time();
						$datos['success'] = true;
						$datos['token']=$valide['data']['token'];
						echo json_encode($datos);
						exit;
					}else{
						$datos['success'] = false;
		 				$datos['error'] = $valide['error'];
						echo json_encode($datos);
					}
		}
	function social(){
				
				$data= json_decode($_POST['data1'],true);
				$arrValue=check_user($data['id_user']);
				$_SESSION['avatar']=$data['avatar'];
				if(!$arrValue){
					///si no existe registralo
					set_error_handler('ErrorHandler');
						$arrValue=loadModel(MODEL_MODULE,'login_model','social',$data);
					restore_error_handler();
					if($arrValue){
						///enviar mail para cambiar contraseña( que no hay ) y poder modificar los datos del usuario en el perfil
						send_mail_social($data['user'],$data['email'],$arrValue[1]);
						echo json_encode($arrValue[0]);//devolvemos token
					}	
				}else{
					//si existe devuelve el token;
					echo json_encode($arrValue[0]['token']);
				}
			$_SESSION['tiempo'] = time();
			exit;
	}
	////////enviar mail con token para cambiar la contraseña
	function forgotpass() {
			set_error_handler('ErrorHandler');
					$arrArgument = array(
						'reset-user'=>$_POST['reset-user'],
						'reset-email'=>$_POST['reset-email'],
					);
					$arrValue['token']= loadModel(MODEL_MODULE,'login_model','recover_pass',$arrArgument);
			restore_error_handler();			
					if($arrValue){//enviar mail
						$arrValue['type']='changepass';
						$arrValue['inputEmail']=$arrArgument['reset-email'];
						$arrValue['inputMessage']='Para activar tu cuenta en EDEN pulse el siguiente enlace:';
						enviar_email($arrValue);
						echo 'ok';
						exit;
					}else{//no existe el usuario
						echo json_encode('error');
						exit;
					}

	}
	//////////pagina de cambiar la contraseña
	function changepass() {
				if(isset($_GET['aux'])){
					$_SESSION['tok']=$_GET['aux'];//alamcenamos en session para el update
				}
				require_once(VIEW_PATH_INC . "top-page.php");
				require_once(VIEW_PATH_INC . "header.php");
				require_once(VIEW_PATH_INC . "menu.php");
				include(MODULE_VIEW_PATH . "changepass.html");
				require_once(VIEW_PATH_INC . "footer.php");
	}
/////////cambiar contraseña
	function update_pass(){
				set_error_handler('ErrorHandler');
						$arrArgument = array(
							'password'=>$_POST['password'],
							'token'=>$_SESSION['tok'],
						);
						$arrValue= loadModel(MODEL_MODULE,'login_model','update_pass',$arrArgument);
				restore_error_handler();
						//$_SESSION['tok']='';
				session_unset($_SESSION['tok']);
				if($arrValue){
					echo('ok');
				}else{
					echo 'error';
				}
	}

	function controluser() {//type, avatar y user
		
		$token=$_POST['token'];
		
		 $resultado = str_replace(
			array("\\", "¨", "º", "~",
				 "#", "@", "|", "!", "\"",
				 "·", "$", "%", "&", "/",
				 "(", ")", "?", "¡",
				 "¿", "[", "^", "<code>", "]",
				 "+", "}", "{", "¨", "´",
				 ">", "< ", ";", ",", ":",
				  " "),
			'',
			$token
		);
				set_error_handler('ErrorHandler');
						$arrValue= loadModel(MODEL_MODULE,'login_model','select_user',$resultado);
				restore_error_handler();
				if($arrValue){
						$_SESSION['avatar']=$arrValue[0]['avatar'];
						echo json_encode($arrValue);
						exit;
				}else{
						echo json_encode('error');
						exit;
				}
	}		
	function logout() {
			//$logout=sociallogout();
				set_error_handler('ErrorHandler');
						$arrValue= loadModel(MODEL_MODULE,'login_model','delete_token',$_GET['aux']);
				restore_error_handler();
				if($arrValue){
					echo json_encode('ok');
							error_reporting(0);
							session_unset($_SESSION['avatar']);
							session_unset($_SESSION['result_prodpic']);
							session_unset($_SESSION['tiempo']);
							session_destroy();
					exit;
				}else{
					echo json_encode('error');
					exit;
				}
					
	}

	function actividad() {
				if (!isset($_SESSION["tiempo"])) {  
					echo "activo";
				} else {  
					if((time() - $_SESSION["tiempo"]) >= 60000) {  
						echo "inactivo"; 
						exit();
					}else{
						echo "activo";
						exit();
					}
				}
	}

}

?>