<?php

class controller_clubrural{

    function __construct() {
        
    }
    function load_homes_provi(){
            
            $idprovi=$_GET['aux2'];
            $homes =file_get_contents("https://api.clubrural.com/api.php?claveapi=".keyclub."&type=provincias&idprov=".$idprovi);
            $xml = simplexml_load_string($homes); // where $xml_string is the XML data you'd like to use (a well-formatted XML string). If retrieving from an external source, you can use file_get_contents to retrieve the data and populate this variable.
            echo json_encode($xml);
            exit;
    }
    function load_homes_geo(){
            
        $idprovi=$_GET['aux2'];
        $datos = json_decode($_GET['aux2'],true);
        $homes =file_get_contents("https://api.clubrural.com/api.php?claveapi=".keyclub."&type=gmaps&lat=".$datos['lat']."&lng=".$datos['long']."&limitkm=".$datos['dis']);
        $xml = simplexml_load_string($homes); // where $xml_string is the XML data you'd like to use (a well-formatted XML string). If retrieving from an external source, you can use file_get_contents to retrieve the data and populate this variable.
        echo json_encode($xml);
        exit;
}
}