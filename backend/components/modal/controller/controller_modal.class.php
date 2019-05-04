<?php
    
    class controller_modal {
        
        function __construct() {
            $_SESSION['components'] = "modal";
        }

        function read_modal() {
            
                $data = loadModel(MODEL_MODAL, "modal_model", "select_home", $_GET['aux2']);
                echo json_encode($data);
                exit;
       
        }
    }
