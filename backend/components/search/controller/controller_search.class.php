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
                    $data=($_GET['aux2']);
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
                    
                    echo json_encode($arrValue);
                    exit;
                }
        }
        function autocomplete(){
            
            try{
                    $data=($_GET['aux2']);
                    $arrValue = false;
                    $arrValue = loadModel(MODEL_SEARCH, "search_model", "autocomplete",$data);
                }catch (Exception $e){
                    echo json_encode("error");
                    exit;
                }
                if(!$arrValue){
                    echo json_encode("error");
                    exit;
                }else{
                    echo json_encode($arrValue);
                    // foreach ($arrValue as $row) {
                    //         echo json_encode($arrValue);
                    //         // '<div class="autoelement">
                                
                    //         //     <a  class="element" data="'.$row['provincia'].'" id="'.$row['nombre'].'">'.utf8_encode($row['nombre']).'</a>
                    //         // </div>';
                    // }
                    exit;
                }
        }

    }
?>