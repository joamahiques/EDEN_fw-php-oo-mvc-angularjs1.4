<?php

class controller_favorites{

    function __construct() {
        
    }
    function favorites(){
        //set_error_handler('ErrorHandler');
        try{
            $arrArgument = array(
                'id'=>$_POST['id'],
                'tok'=>$_POST['tok']
            );
            $arrValue = false;
            $arrValue = loadModel(MODEL_FAVORITES, "favorites_model", "insertFavorites", $arrArgument);
           
        }catch(Exception $e) {echo json_encode($e+"error FAVORITES");}
        //restore_error_handler();
        if($arrValue){
            echo json_encode($arrValue);
        }else{
            echo json_encode($arrValue);
        }

    }
    
    function read_favorites(){
    //set_error_handler('ErrorHandler');

        try{
            $user=$_GET['aux2'];
            $arrValue = false;
            $arrValue = loadModel(MODEL_FAVORITES, "favorites_model", "readFavorites", $user);

        }catch (Exception $e){
            echo json_encode("error");
            exit;
        }
        //restore_error_handler();
        if(!$arrValue){
            echo json_encode("error");
            exit;
        }else{
            echo json_encode($arrValue);
            exit;
        }
    }

    function delete_favorites(){
        //set_error_handler('ErrorHandler');
        try{
            $arrArgument = array(
                'id'=>$_POST['id'],
                'tok'=>$_POST['tok']
            );
            $arrValue = false;
            $arrValue = loadModel(MODEL_FAVORITES, "favorites_model", "deleteFavorites", $arrArgument); 
        }catch (Exception $e){
            //echo ("conexion");
            echo json_encode($e+"error FAVORITES");
            exit;
        }
        //restore_error_handler();
        if($arrValue){
            echo json_encode($arrValue);
            exit;
        }else{
            echo json_encode($arrValue);
            exit;
        }
    }

}