<?php

class home_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function select_scroll_DAO($db, $data){
        //$start = $data['start'];
        //$records_per_page = $data['records'];
        //$sql = "SELECT * from casas ORDER BY provincia ASC LIMIT $start, $records_per_page";
        $sql = "SELECT * from casas order by provincia";
        $stmp = $db->ejecutar($sql);
        return $db->listar($stmp);
    }

    public function count_DAO($db) {
        $sql = "SELECT count(*) as totalcasas FROM casas";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        
    }

    public function active_user_DAO($db,$data){
        $token=$data['token'];
        $sql= "UPDATE users2 SET activate = 1 where tokenMail = '$token'";
        return $db->ejecutar($sql);
    }
}