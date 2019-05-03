<?php
class crud_dao {

    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    function select_all_homes_DAO($db){
        $sql = "SELECT * FROM casas ORDER BY provincia ASC";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt); 
    }

    function delete_home_DAO($db,$home){
        $sql = "DELETE FROM casas WHERE nombre='$home'";
        return  $db->ejecutar($sql);
        
    }

    function delete_all_homes_DAO($db){
        
        $sql = "DELETE FROM casas";
        return  $db->ejecutar($sql);
    }
}