<?php

class controller_cart {

    function __construct() {
        $_SESSION['module'] = "cart";
    }

    function list_cart() {
        require_once(VIEW_PATH_INC . "top-page.php");
        require_once(VIEW_PATH_INC . "header-home.php");
        require_once(VIEW_PATH_INC . "menu.php");
        include(MODULE_VIEW_PATH . "cart.html");
        require_once(VIEW_PATH_INC . "footer.php");
    }
    function insert_cart() {
        // echo json_encode($_POST['cart']);
        // exit;
        set_error_handler('ErrorHandler');
            $arrArgument = array(
                'cart'=>$_POST['cart'],
                'tok'=>$_POST['token']
            );
            try {
                $arrValue = loadModel(MODEL_MODULE, "cart_model", "insert_cart", $arrArgument);
            } catch (Exception $e) {
                echo ("error");
                exit();
            }
        restore_error_handler();
        if($arrValue['res']==false){
            echo json_encode($arrValue);
            exit();
        }else{
            echo json_encode($arrValue);
        }
    }
    function read_cart() {
        // echo json_encode($_GET['aux']);
        set_error_handler('ErrorHandler');
            try {
                $arrValue = loadModel(MODEL_MODULE, "cart_model", "read_cart", $_GET['aux']);
            } catch (Exception $e) {
                echo json_encode("error");
                exit();
            }
        restore_error_handler();

        if(!$arrValue){
            $datos['success'] = false;
            $datos['mess'] = $arrValue;
           echo json_encode($datos);
            //echo json_encode($arrValue);
            exit();
        }else{
            $datos['success'] = true;
            $datos['mess'] = $arrValue;
            echo json_encode($datos);
            //$_SESSION['cart'][$arrValue[0]];
        //    echo json_encode($arrValue);
            exit;
        }

    }
    function confirm_purchase(){
        set_error_handler('ErrorHandler');
            try {
                $arrValue = loadModel(MODEL_MODULE, "cart_model", "confirm_purchase", $_POST['tok']);
            } catch (Exception $e) {
                echo json_encode("error");
                exit();
            }
        restore_error_handler();

        if(!$arrValue){
            echo json_encode($arrValue);
            exit();
        }else{
            /////enviar un mail con la compra.
            // $rlt['type']='purchase';
			// $rlt['inputEmail']=$arrArgument['reset-email'];
			// $rlt['token']=$arrValue['tok'];
			// enviar_email($rlt);
            echo json_encode($arrValue);
            exit;
        }

    }
}