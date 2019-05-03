<?php
//echo json_encode("profile_dao.class.singleton.php");
//exit;

class profile_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function select_user_DAO($db, $token){
        $sql = "SELECT * FROM users2 WHERE token = '$token'";
        $stmt = $db->ejecutar($sql);
        $res= $db->listar($stmt);
        
        $newtok=$this->update_token_DAO($db,$res[0]['IDuser'],$token);///user
        return array ($res, $newtok); 
    }
    public function select_user_fav_DAO($db, $user){
        
        $sql = "SELECT nombre,localidad,provincia,capacidad,entera FROM casas, favoritos1 WHERE ID = home_id and user_id = ( SELECT IDuser FROM users2 WHERE token='$user')";
        $stmp = $db->ejecutar($sql);
        return $db->listar($stmp);
    }
    public function select_user_pur_DAO($db, $user){

        $sql = "SELECT codigo, (SELECT nombre from casas where compras.id_product = casas.ID) as nombre ,fecha, cantidad,precio,total 
                 FROM compras WHERE id_user =(SELECT IDuser FROM users2 WHERE token='$user') ";
        $stmp = $db->ejecutar($sql);
        return $db->listar($stmp);
    }
      public function update_user_DAO($db, $arrArgument){
        $user = $arrArgument['name'];
        $usertf = $arrArgument['tf'];
        $userprovince = $arrArgument['province'];
        $usercity = $arrArgument['city'];
        $useravatar = $arrArgument['prodpic'];
        $token = $arrArgument['tok'];
        $sql = " UPDATE users2 SET phone='$usertf', province='$userprovince', city='$usercity', avatar='$useravatar'
                         WHERE token='$token'";;
        $res = $db->ejecutar($sql);
        $newtok=$this->update_token_DAO($db,$user,$token);
        return array ($res, $newtok); 
         
    }
    public function update_pass_pro_DAO($db, $arrArgument){
        $passw=$arrArgument['password'];
        $tok=$arrArgument['tok'];
        $user='newpass';
        $hashed_pass = password_hash($passw, PASSWORD_DEFAULT);
        $sql = "UPDATE users2 set password ='$hashed_pass' WHERE token='$tok'";
        $res = $db->ejecutar($sql);
        $newtok=$this->update_token_DAO($db,$user,$tok);
        return array ($res, $newtok);

    }
    public function delete_favo_DAO($db, $arrArgument){
        $user = $arrArgument['tok'];
        $home = $arrArgument['home'];
        $sql = $sql="DELETE FROM `favoritos1` WHERE user_id=(SELECT IDuser FROM users2 WHERE token='$user') and home_id=(SELECT ID FROM casas WHERE nombre='$home')";
        
        return $db->ejecutar($sql);
         
    }
public function update_token_DAO($db,$nombre,$tok){
       
        $token= generate_JWK($nombre);
        $sql = "UPDATE users2 set token ='$token' WHERE token='$tok'";
        $stmt = $db->ejecutar($sql);
        return $token;
        //return $db->listar($stmt);
    }
   
    
}//End DAO
