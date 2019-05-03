<?php
/* * * nullify any existing autoloads ** */

// echo('autoload');
//     exit;
spl_autoload_register(null, false);
spl_autoload_extensions('.php,.inc.php,.class.php,.class.singleton.php');

 //spl_autoload_register('loadClasses');
// echo ($className);
// exit;

// spl_autoload_register( function($className){
//     
//     include_once $className . '.class.singleton.php';
// });
  
// function loadClasses($className) {
spl_autoload_register( function($className){  
    // echo json_encode($className); 
    // exit; 
    //Get module name 
    $portions = explode("_", $className);//separa la string por _ conviertiendo los datos en elementos de arrays.
    $module_name = $portions[0];
    $model_name = "";
    
    //we need have this because if not exist $porciones[1], app will have problems when we sent error (showErrorPage(2..)).
    if(isset($portions[1])){
        $model_name = $portions[1];
        $model_name = strtoupper($model_name);
    }
    
        //singleton modules;
        if (file_exists('module/' . $module_name . '/model/'.$model_name.'/' . $className . '.class.singleton.php')) {//require(BLL_USERS . "user_bll.class.singleton.php");
            set_include_path('module/' . $module_name . '/model/'.$model_name.'/');
            spl_autoload($className);
        } 
        ///singletons components
        elseif (file_exists('components/' . $module_name . '/model/'.$model_name.'/' . $className . '.class.singleton.php')) {//require(BLL_USERS . "user_bll.class.singleton.php");
            set_include_path('components/' . $module_name . '/model/'.$model_name.'/');
            spl_autoload($className);
        } 
        //model
        elseif (file_exists('model/' . $className . '.class.singleton.php')) {
            set_include_path('model/');
            spl_autoload($className);
        }
        //log i JWT
        elseif (file_exists('classes/' . $className . '.class.singleton.php')) {
            set_include_path('classes/');
            spl_autoload($className);
        }
    
});