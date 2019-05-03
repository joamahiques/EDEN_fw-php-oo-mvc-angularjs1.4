<?php
     class controller_crud {
       
		function __construct() {
                //include(FUNCTIONS_MODULE . "utils.inc.php");
               
				$_SESSION['module'] = "crud";
        }

        function list_crud(){
            require_once(VIEW_PATH_INC . "top-page.php");
            require_once(VIEW_PATH_INC . "header.php");
            require_once(VIEW_PATH_INC . "menu.php");
            include(MODULE_VIEW_PATH . "list_homes.php");
            require_once(VIEW_PATH_INC . "footer.php");
             echo "<script>";
                echo "protecturl();";
                echo "</script>";
        }

        function lista(){
            try{
                $arrValue = loadModel(MODEL_MODULE,'crud_model','select_all_homes');
            }catch (Exception $e){
                echo 'error';
            }
            
            if(!$arrValue){
                echo 'error de conexión';
            }else{
                echo json_encode($arrValue);
            }
        }

        function delete(){
            require_once(VIEW_PATH_INC . "top-page.php");
            require_once(VIEW_PATH_INC . "header.php");
            require_once(VIEW_PATH_INC . "menu.php");
            include(MODULE_VIEW_PATH . "deleteHome.php");
            require_once(VIEW_PATH_INC . "footer.php");
            
        }

        function delete_home(){
                    try{
                       $home=$_POST['home'];
                        $arrValue = loadModel(MODEL_MODULE,'crud_model','delete_home',$home);
                    }catch (Exception $e){
                        echo ("error de conexion");
                    }
                    //print_r($rdo);
                    if($arrValue){
                        echo json_encode($arrValue);
                    }else{
                        echo json_encode($arrValue);
                    }
        }
            
        
    }
//     $path = $_SERVER['DOCUMENT_ROOT'] . '/www/EDEN/'; ///opt/lampp/htdocs
//     include($path . "module/homes/model/DAOhomes.php");
//     include($path . "module/homes/model/validation.php");
//     //include($path . "model/functions.php");
//     @session_start();
    
    
    
//     if(isset ($_SESSION['type'])&&($_SESSION['type'])==='admin'){
//     switch($_GET['op']){
//     ////////////LIST   
//         case 'list';
//             try{
//                 $DAOhome = new DAOhome();
//             	$rdo = $DAOhome->select_all_homes();
//             }catch (Exception $e){
//                 $callback = 'index.php?page=503';
// 			    die('<script>window.location.href="'.$callback .'";</script>');
//             }
            
//             if(!$rdo){
//     			$callback = 'index.php?page=503';
// 			    die('<script>window.location.href="'.$callback .'";</script>');
//     		}else{
               
//                     include("module/homes/view/list_homes.php");
           
//     		}
//             break;
//     /////////CREATE        
//         case 'create';
        
//            //include("module/homes/model/validation.php");//AQUI validacion php
//             $check = true;
//             $error='';
            
//             if ($_POST){
               
//                 $check=validatephp();
                
//             ////si no hay ninguno registrado( si es null)
//                 if (!$check){
//                     $_SESSION['home']=$_POST;
                    
//                     try{
//                         $DAOhome = new DAOhome();
//                         $rdo = $DAOhome->insert_home($_POST);
                       
//                     }catch (Exception $e){
                        
//                         $callback = 'index.php?page=503';
//         			    die('<script>window.location.href="'.$callback .'";</script>');
//                     }
//                     ///si se ha registrado correctamente
// 		            if($rdo){
                        
//             			$callback = 'index.php?page=controller_homes&op=list';
//         			    die('<script>window.location.href="'.$callback .'";</script>');
//             		}else{
                        
//                         $callback = 'index.php?page=503';
//     			        die('<script>window.location.href="'.$callback .'";</script>');
//                     }
//             /////errores, SI HAY CASA IGUAL.
//                 }else{
//                     $error= "ERROR: Ya existe esta casa en el registro";
//                 }
//             }
//             include("module/homes/view/createHome.php");
//             break;
    
// ////////UPDATE       
//         case 'update';
//             //include("module/homes/model/validation.php");
//             $check = true;
//             if ($_POST){
//                 //$check=validatephp();///No puedo validar en PHP en UPDATE por que los campos que valido son los que no se pueden cambiar en la validacion (onlyRead)
//                 if ($check){
//                     $_SESSION['home']=$_POST;
//                     try{
//                         $DAOhome = new DAOhome();
//                         $rdo = $DAOhome->update_home($_POST);
//                         // print_r($_POST);
//                         // print_r($rdo);
//                         // die();
//                         if(!$rdo){
//                             echo ("FALSEEEEE update controller");
//                         }
//                        // die();
//                     }catch (Exception $e){
//                         $callback = 'index.php?page=503';
//         			    die('<script>window.location.href="'.$callback .'";</script>');
//                     }
                    
// 		            if($rdo){
//             			//echo ("Actualizado en la base de datos correctamente");
//             			$callback = 'index.php?page=controller_homes&op=list';
//         			    die('<script>window.location.href="'.$callback .'";</script>');
//             		}else{
//             			$callback = 'index.php?page=503';
//     			        die('<script>window.location.href="'.$callback .'";</script>');
//             		}
//                 /////errores, SI HAY CASA IGUAL.
//                 // }else{
//                 //     $error= "ERROR: Ya existe esta casa en el registro";
//                  }
//             }
            
//             try{
//                 $DAOhome = new DAOhome();
//             	$rdo = $DAOhome->select_home($_GET['id']);
//             	$home=get_object_vars($rdo);
//             }catch (Exception $e){
//                 $callback = 'index.php?page=503';
// 			    die('<script>window.location.href="'.$callback .'";</script>');
//             }
            
//             if(!$rdo){
//     			$callback = 'index.php?page=503';
//     			die('<script>window.location.href="'.$callback .'";</script>');
//     		}else{
//         	    include("module/homes/view/updateHome.php");
//     		}
//             break;
        
//     ////////READ   
//         case 'read';
//             try{
//                 $DAOhome = new DAOhome();
//             	$rdo = $DAOhome->select_home($_GET['id']);
//             	$home=get_object_vars($rdo);
//             }catch (Exception $e){
//                 $callback = 'index.php?page=503';
// 			    die('<script>window.location.href="'.$callback .'";</script>');
//             }
//             if(!$rdo){
//     			$callback = 'index.php?page=503';
//     			die('<script>window.location.href="'.$callback .'";</script>');
//     		}else{
//                 include("module/homes/view/readHome.php");
//     		}
//             break;
    
//     ///////DELETE   
//         case 'delete';
//              if (isset($_POST['delete'])){
//                 try{
//                     $DAOhome = new DAOhome();
//                 	$rdo = $DAOhome->delete_home($_GET['id']);
//                 }catch (Exception $e){
//                     //echo ("conexion");
//                     $callback = 'index.php?page=503';
//     			    die('<script>window.location.href="'.$callback .'";</script>');
//                 }
//             	//print_r($rdo);
//             	if($rdo){
//         			//echo ("Borrado en la base de datos correctamente");
//         			$callback = 'index.php?page=controller_homes&op=list';
//     			    die('<script>window.location.href="'.$callback .'";</script>');
//         		}else{
//                     //echo ("conexion1");
//         			$callback = 'index.php?page=503';
// 			        die('<script>window.location.href="'.$callback .'";</script>');
//         		}
//              }
            
//             include("module/homes/view/deleteHome.php");
//             break;

//     ///////DELETE ALL
//         case 'deleteall';
//         //echo "deleteall1";
//         //die();
//             if (isset($_POST['deleteall'])){
//                 try{
//                     $DAOhome = new DAOhome();
//                     $rdo = $DAOhome->deleteallhomes();
//                 }catch (Exception $e){
//                     //echo ("conexion");
//                     $callback = 'index.php?page=503';
//                     die('<script>window.location.href="'.$callback .'";</script>');
//                 }
//             //print_r($rdo);
//             if($rdo){
//                 //echo ("Borrado en la base de datos correctamente");
//                 $callback = 'index.php?page=controller_homes&op=list';
//                 die('<script>window.location.href="'.$callback .'";</script>');
//             }else{
//                 //echo ("canexion1");
//                 $callback = 'index.php?page=503';
//                 die('<script>window.location.href="'.$callback .'";</script>');
//             }
//             }
        
//         include("module/homes/view/deleteAllHomes.php");
//         break;
   
//     ////DEFAULT
//     default;
//         include("vista/include/error404.php");
//         break;
//     }
// }