<?php
    class controller_search{

        function __construct() {
        
        }
        function firstdrop(){
            try{
                
                $arrValue = false;
                $arrValue = loadModel(MODEL_SEARCH, "search_model", "readProvince");
    
            }catch (Exception $e){
                echo json_encode("error");
                exit;
            }
            if(!$arrValue){
                echo json_encode("error2");
                exit;
            }else{
                echo json_encode($arrValue);
                exit;
            }
        }
        function seconddrop(){
            try{
                    // $DAOsearch = new DAOsearch();
                    // $rdo = $DAOsearch->readMuni($_GET['id']);
                    $data=($_POST['id']);
                    $arrValue = false;
                    $arrValue = loadModel(MODEL_SEARCH, "search_model", "readMuni",$data);
        
                }catch (Exception $e){
                    echo json_encode("error");
                    exit;
                }
                if(!$arrValue){
                    echo json_encode("error");
                    exit;
                }else{
                    // $favor = array();///inicializamos el array
                    // foreach ($rdo as $row) {
                    //     array_push($favor, $row);//lo rellenamos con array_push
                    // }
                    echo json_encode($arrValue);///lo pasamos a json
                    exit;
                }
        }
        function autocomplete(){
            try{
                $arrArgument = array(
                    'auto'=>$_POST['auto'],
                    'drop2'=>$_POST['drop2']
                );
                    $arrValue = false;
                    $arrValue = loadModel(MODEL_SEARCH, "search_model", "autocomplete",$arrArgument);
                }catch (Exception $e){
                    echo json_encode("error");
                    exit;
                }
                if(!$arrValue){
                    echo json_encode("error");
                    exit;
                }else{
                    foreach ($arrValue as $row) {
                            echo 
                            '<div class="autoelement">
                                
                                <a  class="element" data="'.$row['provincia'].'" id="'.$row['nombre'].'">'.utf8_encode($row['nombre']).'</a>
                            </div>';
                    }
                    exit;
                }
        }

    }
    
        

?>
            