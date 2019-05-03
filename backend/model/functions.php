<?php
    
    
    $path = $_SERVER['DOCUMENT_ROOT'] . '/www/EDEN_ANGULARJS/'; ///opt/lampp/htdocs
	@session_start();
    
   
    
    switch($_GET['op']){
    ////////////LIST   
        case 'controluser':
            if (!isset ($_SESSION['type'])||($_SESSION['type'])!='admin'){
        
                if(isset ($_SESSION['type'])&&($_SESSION['type'])!='admin'){
                    echo 'okay';
                    exit();
                }
                echo 'ok';
                exit();

                // http://localhost/www/EDEN/index.php?page=controller_homes&op=list
            }
                
            break;
        default:
				include("view/include/error/error404.php");
		break;
	}
    

?>


