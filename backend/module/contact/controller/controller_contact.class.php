<?php

    class controller_contact {

        function __construct() {
            //include(UTILS . "mail.inc.php");
            $_SESSION['module'] = "contact";
        }
    
        function list_contact() {
            
            require_once(VIEW_PATH_INC . "top-page.php");
            require_once(VIEW_PATH_INC . "header.php");
            require_once(VIEW_PATH_INC . "menu.php");
            include(MODULE_VIEW_PATH . "contactus.html");
            require_once(VIEW_PATH_INC . "footer.php");
        }

        function send_form(){
			$name =$_POST["name"];
        	$mail =$_POST["email"];
            $option = $_POST["opcontact"];
            $message = $_POST["mess"];
			$arrArgument = array(
				'type' => 'contact',
				'token' => '',
				'inputName' => $name,
				'inputEmail' => $mail,
				'inputSubject' => $option,
				'inputMessage' => $message
			);
			set_error_handler('ErrorHandler');
				try{
					enviar_email($arrArgument);
					echo json_encode('Mensaje enviado');
				} catch (Exception $e) {
					echo json_encode('Server error. Try later...');
				}
			restore_error_handler();

			$arrArgument = array(
				'type' => 'admin',
				'token' => '',
				'inputName' => $name,
				'inputEmail' => $mail,
				'inputSubject' => $option,
				'inputMessage' => $message
			);
			set_error_handler('ErrorHandler');
			try{
	            enviar_email($arrArgument);
			} catch (Exception $e) {
				echo json_encode('Server error. Try later...');
			}
			restore_error_handler();
		}
    }
?>  