<?php
require_once("paths.php");
require_once("keys.php");
require_once(UTILS . "upload.php");
require('autoload.php');
include(UTILS . "functions.inc.php");
include(UTILS . "errors.inc.php");
include(UTILS . "common.inc.php");
include(UTILS . "mail.inc.php");

if (PRODUCTION) { //estamos en producción
    ini_set('display_errors', '1');
    ini_set('error_reporting', E_ERROR | E_WARNING); //error_reporting(E_ALL) ;
    //error_reporting(E_ALL) ; | E_NOTICE --> commit E_NOTICE to use timeout userdao_country
} else {
    ini_set('display_errors', '0');
    ini_set('error_reporting', '0'); //error_reporting(0); 
}

ob_start();
@session_start();
//session_regenerate_id();
$_POST = json_decode(file_get_contents('php://input'), true);

$_SESSION['module'] = "";
$_SESSION['component'] = "";

function handlerRouter() {
    
    if (!empty($_GET['module'])) {
        $URI_module = $_GET['module'];
    } else {
        $URI_module = 'home';
    }
   
    if (!empty($_GET['function'])) {
        $URI_function = $_GET['function'];
    } else {
        $URI_function = 'list_home';
    }
    
    if(($_GET['module'])=='components'){
        //print_r($_GET['function']);//nombre del comopenete
        //print_r($_GET['aux']);//nombre de la funcion
        $comp=$_GET['function'];
        $func=$_GET['aux'];
        $path = COMPONENTS_PATH . $comp . "/controller/controller_" . $comp . ".class.php";
        require_once($path);
                
        $controllerClass = "controller_" . $comp;
                
        $obj = new $controllerClass;
        call_user_func(array($obj, $func));
    }else{
        handlerModule($URI_module, $URI_function);
    }

    
}

function handlerModule($URI_module, $URI_function) {
    // echo json_encode($URI_module);
    // echo json_encode($URI_function);
    // exit;
    $modules = simplexml_load_file('resources/modules.xml');
    $exist = false;

    foreach ($modules->module as $module) {
        if (($URI_module === (String) $module->uri)) {///module exist
            $exist = true;
            //  echo($URI_module);
            $path = MODULES_PATH . $URI_module . "/controller/controller_" . $URI_module . ".class.php";
            
            if (file_exists($path)) {///controller exist
                require_once($path);
                
                $controllerClass = "controller_" . $URI_module;
                
                $obj = new $controllerClass;
            } else {
                require_once(VIEW_PATH_INC ."top-page.php");
                if ((!empty($_GET['module']))||($_GET['module']==='home')){
                    require_once(VIEW_PATH_INC ."header-home.php");///si estamos en homepage
                }else{
                    require_once(VIEW_PATH_INC ."header.php");
                } 
               
                require_once(VIEW_PATH_INC ."menu.php"); 
                require_once(VIEW_PATH_INC_ERROR . "error404.php");
                require_once(VIEW_PATH_INC . "footer.php");
            }
            handlerfunction(((String) $module->name), $obj, $URI_function);
            break;
        }
    }
    if (!$exist) {
        require_once(VIEW_PATH_INC ."top-page.php");
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC ."menu.php"); 
        require_once(VIEW_PATH_INC_ERROR . "error404.php");
        require_once(VIEW_PATH_INC . "footer.php");
    }
}

function handlerFunction($module, $obj, $URI_function) {
    $functions = simplexml_load_file(MODULES_PATH . $module . "/resources/functions.xml");
    $exist = false;
       
    foreach ($functions->function as $function) {
        if (($URI_function === (String) $function->uri)) {
            $exist = true;
            $event = (String) $function->name;
            break;
        }
    }
    if (!$exist) {
        require_once(VIEW_PATH_INC ."top-page.php");
        require_once(VIEW_PATH_INC . "header.php");
        require_once(VIEW_PATH_INC ."menu.php"); 
        require_once(VIEW_PATH_INC_ERROR . "error404.php");
        require_once(VIEW_PATH_INC . "footer.php");
    } else {
        call_user_func(array($obj, $event));
    }
}
handlerRouter();