<?php
   
   function validatephp(){
       set_error_handler('ErrorHandler');
        try{
            $arrArgument = array(
                'name'=>$_POST[name],
                'city'=>$_POST[city][DMUN50]
            );
            $arrValue = loadModel(MODEL_MODULE,'crud_model','validate',$arrArgument);
            
        }catch (Exception $e){
            $arrValue=true;
            exit;
        }
        restore_error_handler();

        if ($arrValue){
            return false;
            exit;
        }else{
            return true;
        }
       
   }