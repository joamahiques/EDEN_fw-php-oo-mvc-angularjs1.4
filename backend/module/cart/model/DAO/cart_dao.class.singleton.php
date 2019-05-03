<?php


class cart_dao {

    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    function insert_cart_DAO($db, $data){///li passem el datos del carro i el usuari
        //fer un select xa traure el nom i cambiar el token??
        $user=$this->select_user_DAO($db, $data['tok']);
        $nomuser=$user[0][0]['IDuser'];
        $tok=$user[1];
        $sql="DROP TABLE if EXISTS altaCasas.$nomuser";
        $stmp = $db->ejecutar($sql);
        
        $sql="CREATE TABLE `altaCasas`.`$nomuser` (
             `ID` INT(3) NOT NULL AUTO_INCREMENT , 
             `IDclient` VARCHAR(20) NOT NULL , 
             `IDproducto` INT(4) NOT NULL , 
             `nombre` VARCHAR(30) NOT NULL , 
             `cantidad` INT(3) NOT NULL , 
             `precio` INT(4) NOT NULL , 
             `total` INT(5) NOT NULL , 
             PRIMARY KEY (`ID`)) ENGINE = InnoDB";
        $stmp = $db->ejecutar($sql);


        $datos=$data['cart'];
        
        //die();
        foreach ($datos as $row) {
            //$tok=$user[0][1];
            $nombre = $row['Home'];
            $precio = $row['Price'];
            $cantidad = $row['Qty'];
            $total = $row['Total']; 
   
            $sql ="INSERT INTO `$nomuser`(`ID`,`IDclient`, `IDproducto`, `nombre`, `cantidad`, `precio`, `total`) VALUES (null,(SELECT IDuser from users2 WHERE token='$tok') ,(SELECT id from casas WHERE nombre='$nombre'),'$nombre' ,'$cantidad',(SELECT precionoche from casas WHERE nombre='$nombre'),(SELECT (precionoche*$cantidad)as total from casas WHERE nombre='$nombre'))";
            $stmp = $db->ejecutar($sql);
        }

        $res=array(
            'res'=>$stmp,
            'tok'=>$tok
        );
        // echo json_encode($res);
        // exit;
        return $res;
       //return array($tmp, $tok);//true or false/ token nuevo
        
    }

    function read_cart_DAO($db,$user){ ///leer carro del ususario
        $sql= "SELECT IDuser from users2 WHERE token='$user'";
        $stmp = $db->ejecutar($sql);
        $res= $db->listar($stmp);

        $user=$res[0]['IDuser'];
        
        $sql = "SELECT * FROM `$user`";
        //$sql = "SELECT * FROM `$user` WHERE IDclient=(SELECT IDuser FROM users2 WHERE token='$user')";
         
         $stmp = $db->ejecutar($sql);
         return $db->listar($stmp);

    }

    function confirm_purchase_DAO($db,$user){
        $user=$this->select_user_DAO($db, $user);
        $nomuser=$user[0][0]['IDuser'];
        $tok=$user[1];
        $sql = "INSERT INTO compras (id_user,id_product,cantidad,precio,total) SELECT IDclient, IDproducto, cantidad, precio, total FROM altaCasas.$nomuser";
        $stmp = $db->ejecutar($sql);
        if($stmp){
            $sql ="DROP TABLE if EXISTS altaCasas.$nomuser";
            $stmp = $db->ejecutar($sql);
        }
        $res=array(
            'res'=>$stmp,
            'tok'=>$tok
        );
        return $res;
         
    }
    public function select_user_DAO($db, $token){
        $sql = "SELECT * FROM users2 WHERE token = '$token'";
        $stmt = $db->ejecutar($sql);
        $res= $db->listar($stmt);
        
        $newtok=$this->update_token_DAO($db,$res[0]['IDuser'],$token);///user
        return array ($res, $newtok); 
    }
    public function update_token_DAO($db,$nombre,$tok){
       
        $token= generate_JWK($nombre);
        $sql = "UPDATE users2 set token ='$token' WHERE token='$tok'";
        //$sql = "UPDATE users2 set token ='$token' WHERE user='$nombre'";

        $stmt = $db->ejecutar($sql);
        return $token;
        //return $db->listar($stmt);
    }



}