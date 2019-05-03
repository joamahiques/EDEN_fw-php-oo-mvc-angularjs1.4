<?php
//echo json_encode("home_dao.class.singleton.php");
//exit;

class favorites_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    function insertFavorites_DAO($db,$data){
        $home= $data['id'];
        $tok=$data['tok'];
        $sql="INSERT INTO `favoritos1`(`user_id`, `home_id`) VALUES ((SELECT IDuser FROM users2  WHERE token='$tok'), (SELECT id FROM casas  WHERE nombre='$home'))";
       
        return $db->ejecutar($sql);        
     }
     function readFavorites_DAO($db,$data){
         
         $sql = "SELECT nombre FROM casas, favoritos1 WHERE ID = home_id and user_id = ( SELECT IDuser FROM users2 WHERE token='$data')";
         $stmt = $db->ejecutar($sql);
         return $db->listar($stmt);
      }

      function deleteFavorites_DAO($db,$data){
        $home= $data['id'];
        $tok=$data['tok'];
        $sql="DELETE FROM `favoritos1` WHERE user_id=(SELECT IDuser FROM users2  WHERE token='$tok') and home_id=(SELECT id FROM casas  WHERE nombre='$home')";
       
        return $db->ejecutar($sql);  
        
      }
}