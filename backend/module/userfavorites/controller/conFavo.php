<?php

	$path = $_SERVER['DOCUMENT_ROOT'] . '/www/EDEN/'; ///opt/lampp/htdocs
    include($path . "module/userfavorites/model/DAOfavor.php");
	@session_start();
	//echo ('datatable confavo');
	//die();
	
    switch ($_GET['op']) {
		
		case 'list':
				//echo ('datatable confavo1');
				include("module/userfavorites/view/favorites.php");
				
			break;
			
		case 'datatable':
		//echo ('datatable confavo2');
		//die();
            try{
				$daofavor = new DAOfavor();
				$rdo = $daofavor->selectfavor($_GET['email']);
				
			} catch(Exception $e){
				echo json_encode("error");
				exit;
			}

			if(!$rdo){
				echo json_encode("error");
				exit;
			}
			else{
				$finfo = array();///inicializamos el array
				foreach ($rdo as $row) {
					array_push($finfo, $row);//lo rellenamos con array_push
				}
				// $finfo=get_object_vars($rlt);
				//print_r($finfo);
				echo json_encode($finfo);///lo pasamos a json
				exit;
			}
			
			break;
			
		default:
			include("view/inc/error/error404.php");
			break;
	}
    

?>
            