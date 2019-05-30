<?php

class controller_cart {

    function __construct() {
        $_SESSION['module'] = "cart";
    }

    function insert_cart() {
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
        echo json_encode($arrValue);
        exit();
    }
    function read_cart() {
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
            exit();
        }else{
            $datos['success'] = true;
            $datos['mess'] = $arrValue;
            echo json_encode($datos);
            exit;
        }

    }
    function confirm_purchase(){
        set_error_handler('ErrorHandler');
            try {
                $arrValue = loadModel(MODEL_MODULE, "cart_model", "confirm_purchase", $_POST['token']);
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

    function count(){
        set_error_handler('ErrorHandler');
            try {
                $arrValue = loadModel(MODEL_MODULE, "cart_model", "count", $_GET['aux']);
            } catch (Exception $e) {
                echo json_encode("error");
                exit();
            }
        restore_error_handler();
        echo json_encode($arrValue);
        exit;
    }
}