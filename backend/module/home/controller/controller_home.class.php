<?php

class controller_home {
    function __construct() {
        $_SESSION['module'] = "home";
    }

function scroll_home() {
    //echo json_encode($_POST['row']);
    // echo json_encode($_POST['rowperpage']);
    // exit;
    set_error_handler('ErrorHandler');
    //     $totalResults = loadModel(MODEL_MODULE, "home_model", "count");/// to count the total of houses
    //     if( isset($_POST['p']) ){
    //         $page					=	intval($_POST['p']);//number of page
    //         $current_page			=	$page - 1;
    //         $records_per_page		=	6; // records to show per page
    //         $start					=	$current_page * $records_per_page;//first limit to search
            $arrArgument = array(
                'start'=>$_POST['row'],
                'records'=>$_POST['rowperpage']
            );
    // echo json_encode(MODEL_MODULE);
    // exit;
            $arrValue = loadModel(MODEL_MODULE, "home_model", "select_scroll", $arrArgument);
    restore_error_handler();
    //         $result= array('totalcount'=>$totalResults,'results' => $arrValue);
    echo json_encode($arrValue);
            //echo json_encode($result);
            exit;
        //}
}
///////////active a 1
function active_user(){
    $token=json_decode($_POST['token'],true);
        set_error_handler('ErrorHandler');
        loadModel(MODEL_MODULE,"home_model","active_user",$token);
        restore_error_handler();
        //echo json_encode($token);
}
}
 ?>       