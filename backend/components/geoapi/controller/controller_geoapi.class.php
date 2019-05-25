<?php

class controller_geoapi{

    function __construct() {
        
    }
    function load_provinces(){
            $json = array();
            $tmp = array();
            $provincias = simplexml_load_file(SITE_ROOT.'/components/geoapi/resources/provinciasypoblaciones.xml');
            $result = $provincias->xpath("/lista/provincia/nombre | /lista/provincia/@id");
            for ($i=0; $i<count($result); $i+=2) {
                $e=$i+1;
                $provincia=$result[$e];
                $tmp = array(
                  'CPRO' => (string) $result[$i], 'PRO' => (string) $provincia
                );
                array_push($json, $tmp);
              }
            echo json_encode($json);
            exit;
    }
    function load_cities(){
            $json = array();
            $tmp = array();
    
            $filter = (string) $_GET['aux2'];;
            $xml = simplexml_load_file(RESOURCES . 'provinciasypoblaciones.xml');
            $result = $xml->xpath("/lista/provincia[@id='$filter']/localidades");
            for ($i = 0; $i < count($result[0]); $i++) {
                $tmp = array(
                    'DMUN50' => (string) $result[0]->localidad[$i]
                );
                array_push($json, $tmp);
            }
            echo json_encode($json);
            exit;
    }
}