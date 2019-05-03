<?php


class search_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    function readProvince_DAO($db){
            
        $sql = "SELECT DISTINCT provincia FROM casas ORDER BY provincia ASC";

        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
     }

     function readMuni_DAO($db,$data){
            
        $sql = "SELECT DISTINCT localidad FROM casas WHERE provincia='$data' ORDER BY localidad ASC";
         
        $stmt = $db->ejecutar($sql);
         return $db->listar($stmt);
     }

     function autocomplete_DAO($db,$data){
        $val = $data['auto'];
        $local = $data['drop2'];
       //$sql = "SELECT *  FROM casas WHERE nombre LIKE '".$val. "%'";
        $sql = "SELECT *  FROM casas WHERE localidad='$local' and nombre LIKE '".$val. "%'";
         
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
     }
}