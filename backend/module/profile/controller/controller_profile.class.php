<?php
   
    class controller_profile {

		function __construct() {
				include(FUNCTIONS_MODULE . "utils.inc.php");
				$_SESSION['module'] = "profile";
		}
        function view() {
            require_once(VIEW_PATH_INC . "top-page.php");
            require_once(VIEW_PATH_INC . "header-home.php");
            require_once(VIEW_PATH_INC . "menu.php");
            include(MODULE_VIEW_PATH . "profile.html");
            require_once(VIEW_PATH_INC . "footer.php");
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
        
        $result=validate_profile($_POST['propassword']);
        
       if ($result[0]=='ok'){
            set_error_handler('ErrorHandler');
                $nombre =$_POST["user"];
                $mail =$_POST["mail"];
                $tf = $_POST["tf"];
                $province = $_POST["selprovince"];
                $city = $_POST["selcity"];
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
                    echo json_encode($arrValue);
                }else{
                    $message = "Dont updated";
                    echo json_encode($message);
                }
                
        }else if ($result[0]!='ok'){
            $message2 = array(
                '0' => 'bad',
                '1'=>$result[1] 
            );
            echo json_encode($message2);
            exit;
        }
    }

    function update_pass_pro(){
        $result=validate_profile($_POST['old-pass']);
        
        if ($result[0]=='ok'){
            set_error_handler('ErrorHandler');
                $arrArgument = array(
                    'password'=>$_POST['newpass1'],
                    'tok'=>$result[1]
                );
                $arrValue = false;
                $arrValue = loadModel(MODEL_MODULE, "profile_model", "update_pass_pro", $arrArgument);
            restore_error_handler();
            if ($arrValue){
                echo json_encode($arrValue);
                exit;
            }
        }else if ($result[0]!='ok'){
            $message2 = array(
                '0' => 'bad',
                '1'=>$result[1] 
            );
            echo json_encode($message2);
            exit;
        }
}


    function load_data_user(){
        set_error_handler('ErrorHandler');
                $user = $_POST['tok'];
                $arrValue = false;
                $arrValue = loadModel(MODEL_MODULE, "profile_model", "select_user", $user);
        restore_error_handler();
            
        echo json_encode($arrValue);
    }
    function load_data_favorites(){
        set_error_handler('ErrorHandler');
            $user = $_POST['tok'];
            $arrValue = false;
            $arrValue = loadModel(MODEL_MODULE, "profile_model", "select_user_fav", $user);
        restore_error_handler();
            echo json_encode($arrValue);
    }
    function load_data_purchases(){
        set_error_handler('ErrorHandler');
            $user = $_POST['tok'];
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
        $_SESSION['result_prodpic'] = $result_prodpic;
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