<?php
   
    class controller_profile {

		function __construct() {
				include(FUNCTIONS_MODULE . "utils.inc.php");
				$_SESSION['module'] = "profile";
		}
        
    function update_profile() {
        if ((empty($_SESSION['result_prodpic']))&&(empty($_SESSION['avatar']))){
            $hashavatar= md5( strtolower( trim( $email ) ) );
            $avatar="https://www.gravatar.com/avatar/$hashavatar?s=40&d=identicon";
            $_SESSION['result_prodpic'] = array('result' => true, 'error' => "", "data" => $avatar);
            $result_prodpic = $_SESSION['result_prodpic'];
            $result_prodpic = $result_prodpic['data'];
        };
        if(($_SESSION['avatar']) && (empty($_SESSION['result_prodpic']))){
            $result_prodpic['data'] = $_SESSION['avatar'];
        }
        if($_SESSION['result_prodpic']){
            $result_prodpic['data'] = $_SESSION['result_prodpic'];
        }
        
        $result=validate_profile();
        
       if ($result[0]=='ok'){
            set_error_handler('ErrorHandler');
                $nombre =$_POST["user"];
                $mail =$_POST["mail"];
                $tf = $_POST["tf"];
                $province = $_POST["provi"];
                $city = $_POST["city"];
                $arrArgument = array(
                    'name' => $nombre,
                    'email'=>$mail,
                    'tf'=>$tf,
                    'province'=>$province,
                    'city'=>$city,
                    'prodpic' => $result_prodpic['data'],
                    'tok'=>$result[1]   
                );
                $arrValue = false;
                $arrValue = loadModel(MODEL_MODULE, "profile_model", "update_user", $arrArgument);
            restore_error_handler();   
                if ($arrValue){
                    $arrValue=array(true,$result[1]); //token 
                    echo json_encode($arrValue);//devuelve true y token
                    exit;
                }else{
                    $arrValue=array( false, $result[1]);   
                    echo json_encode($arrValue); //devuelve false y token
                    exit;
                }    
         }else if (!$result[0]){
            $arrValue=array('ERROR');
            echo json_encode($arrValue);///error token no valido
            exit;
        }
    }

    function update_pass_pro(){
        $result=validate_profile_pass($_POST['oldpass']);
        
        if ($result[0]=='ok'){
            set_error_handler('ErrorHandler');
                $arrArgument = array(
                    'password'=>$_POST['newpass'],
                    'tok'=>$result[1]
                );
                $arrValue = false;
                $arrValue = loadModel(MODEL_MODULE, "profile_model", "update_pass_pro", $arrArgument);
            restore_error_handler();
            if ($arrValue){
                $arrValue=array(true,$result[1]); //token 
                echo json_encode($arrValue);
                exit;
            }else{
                $arrValue=array(false, $result[1]);   
                echo json_encode($arrValue); //devuelve false y token
                exit;
            }  
        }else if ($result[0]!='ok'){
            $arrValue=array('ERROR');
            echo json_encode($arrValue);///error token no valido
            exit;
        }
}

    function load_data_user(){
        set_error_handler('ErrorHandler');
                $user = $_POST['token'];
                $arrValue = false;
                $arrValue = loadModel(MODEL_MODULE, "profile_model", "select_user", $user);
        restore_error_handler();
            
        echo json_encode($arrValue);
    }
    function load_data_favorites(){
        set_error_handler('ErrorHandler');
            $user = $_GET['aux'];
            $arrValue = false;
            $arrValue = loadModel(MODEL_MODULE, "profile_model", "select_user_fav", $user);
        restore_error_handler();
            echo json_encode($arrValue);
    }
    function load_data_purchases(){
        set_error_handler('ErrorHandler');
            $user = $_GET['aux'];
            $arrValue = false;
            $arrValue = loadModel(MODEL_MODULE, "profile_model", "select_user_pur", $user);
        restore_error_handler();
        echo json_encode($arrValue);
    }
    function delete_favorites(){
        set_error_handler('ErrorHandler');
            $user = $_POST['tok'];
            $name = $_POST['nombre'];
                        $arrArgument = array(
                            'tok'=>$user,
                            'home'=>$name
                        );
            $arrValue = false;
            $arrValue = loadModel(MODEL_MODULE, "profile_model", "delete_favo", $arrArgument);
        restore_error_handler();
                if ($arrValue){
                    $message = "Favorite delete";
                }else{
                    $message = "Dont find favorite";
                }
            
            echo json_encode($message);
    }
    function uploadimg(){
        $result_prodpic = upload_files();
        $_SESSION['result_prodpic'] = $result_prodpic['data'];
        echo json_encode($result_prodpic);
    }

    function delete(){
        $_SESSION['result_prodpic'] = array();
        $result = remove_files();
        
        if($result === true){
          echo json_encode(array("res" => true));
        }else{
            echo json_encode(array("res" => false));
        }
            echo json_decode($result);
    }
}

?>