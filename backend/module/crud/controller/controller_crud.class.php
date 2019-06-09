<?php
     class controller_crud {
       
		function __construct() {
                $_SESSION['module'] = "crud";
                include(FUNCTIONS_MODULE . "utils.inc.php");
        }


        function lista(){
            set_error_handler('ErrorHandler');
            try{
                $arrValue = loadModel(MODEL_MODULE,'crud_model','select_all_homes');
            }catch (Exception $e){
                echo 'error';
            }
            restore_error_handler();
            if(!$arrValue){
                echo 'error de conexión';
            }else{
                echo json_encode($arrValue);
            }
        }

        function read_home(){
            set_error_handler('ErrorHandler');
            try{
                $arrValue = loadModel(MODEL_MODULE,'crud_model','select_home',$_GET['aux']);
            }catch (Exception $e){
                echo 'error';
            }
            restore_error_handler();
            if(!$arrValue){
                echo 'error de conexión';
            }else{
                echo json_encode($arrValue);
            }
        }

        function delete_home(){
            set_error_handler('ErrorHandler');
            try{
                $home=$_GET['aux'];
                $arrValue = loadModel(MODEL_MODULE,'crud_model','delete_home',$home);
            }catch (Exception $e){
                echo ("error de conexion");
            }
            restore_error_handler();
            //print_r($rdo);
            if($arrValue){
                echo json_encode($arrValue);
            }else{
                echo json_encode($arrValue);
            }
        }

        function create_home(){
            $valid=validatephp();
            if($valid){//si no existe casa
                set_error_handler('ErrorHandler'); 
                try{
                    $home=$_POST;
                    $arrValue = loadModel(MODEL_MODULE,'crud_model','insert_home',$home);
                }catch (Exception $e){   
                    echo ("error de conexion");
                }
                restore_error_handler();
                if($arrValue){
                    echo json_encode($arrValue = array(
                        'succes'=>'true'));
                    exit;
                }else{
                    echo json_encode($arrValue = array(
                        'succes'=>'false'));
                    exit;
                }
            }else{//si existe casa
                $arrValue = array(
                    'succes'=>'error',
                    'mess'=>'La casa ya está registrada'
                );
                echo json_encode($arrValue);
                exit;
            }
            

        }

        function update_home(){
            set_error_handler('ErrorHandler');
            try{
                $home=$_POST;
                $arrValue = loadModel(MODEL_MODULE,'crud_model','update_home',$home);
            }catch (Exception $e){   
                echo ("error de conexion");
            }
            restore_error_handler();
            if($arrValue){
                echo json_encode($arrValue);
            }else{
                echo json_encode($arrValue);
            }

        }

        function delete_all_homes(){
            set_error_handler('ErrorHandler');
            try{
                $arrValue = loadModel(MODEL_MODULE,'crud_model','deleta_all');
            }catch (Exception $e){   
                echo ("error de conexion");
            }
            restore_error_handler();
            if($arrValue){
                echo json_encode($arrValue);
            }else{
                echo json_encode($arrValue);
            }
        }  
    }
    ?>