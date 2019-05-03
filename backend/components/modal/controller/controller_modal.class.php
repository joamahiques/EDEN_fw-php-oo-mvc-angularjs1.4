<?php
    
    class controller_modal {
        
        function __construct() {
            $_SESSION['components'] = "modal";
        }

        function read_modal() {
            try{
            	$modal=($_POST['modal']);// modal
                $data = loadModel(MODEL_MODAL, "modal_model", "select_home", $modal);
            }catch (Exception $e){
                echo json_encode("error");
                exit;
            }
            if(!$data){
                echo json_encode("error");
                exit;
            }else{
                //$home=get_object_vars($rdo);
                echo json_encode($data);
                exit;
            }
       
        }
    }
