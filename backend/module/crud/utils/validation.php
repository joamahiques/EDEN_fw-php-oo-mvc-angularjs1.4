<?php
   
   function validatephp(){
       $error='';
        try{
            //echo('create1');
            $DAOhome = new DAOhome();
            $check = $DAOhome->validate();
            //var_dump($check);
            //die();
        }catch (Exception $e){
            //print_r($rdo);
            $callback = 'index.php?page=503';
            die('<script>window.location.href="'.$callback .'";</script>');
        }

        // if ($check != false){
        //     $error='ERROR: Ya existe esta casa en el registro';
        // }
       
        return $check;
   }
        
    