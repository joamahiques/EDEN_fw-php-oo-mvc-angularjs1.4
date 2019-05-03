<?php
//echo json_encode("home_dao.class.singleton.php");
//exit;

class modal_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    function select_home_DAO($db,$home){
        $sql = "SELECT * FROM casas WHERE nombre='$home'";
        $stmt = $db->ejecutar($sql);
         return $db->listar($stmt);
        
    }
     
}