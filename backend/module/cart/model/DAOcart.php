<?php

	$path = $_SERVER['DOCUMENT_ROOT'] . '/www/EDEN/'; ///opt/lampp/htdocs
    include($path ."model/connect.php");
    include($path ."module/homes/model/Dates.php");
	class DAOcart{

        function insert_cart($db,$data){
            print_r($datos) ;
            $datos=$data['cart'];
            
            //die();
            foreach ($datos as $row) {
                $tok=$data['tok'];
                $nombre = $row['Home'];
                $precio = $row['Price'];
                $cantidad = $row['Qty'];
                $total = $row['Total']; 
            
       
            $sql ="INSERT INTO `carro`(`ID`,`IDclient`, `IDproducto`, `nombre`, `cantidad`, `precio`, `total`) 
            VALUES (null,(SELECT IDuser from users2 WHERE token='$tok') ,(SELECT id from casas WHERE nombre='$nombre'),'$nombre' ,'$cantidad',
            (SELECT precionoche from casas WHERE nombre='$nombre'),(SELECT (precionoche*$cantidad)as total from casas WHERE nombre='$nombre'))";
            
            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            
            }
            connect::close($conexion);
            return $res;
            
        }

        function read_cart($user){
            $sql = "SELECT * FROM `carro` WHERE IDclient=(SELECT IDuser FROM users2 WHERE token='$user')";
             $conexion = connect::con();
             $res = mysqli_query($conexion, $sql);
             connect::close($conexion);
             return $res;

        }

        function confirm_purchase($user){
            $sql = "INSERT INTO compras (id_user,id_product,cantidad,precio,total) 
            SELECT IDclient, IDproducto, cantidad, precio, total FROM carro 
            WHERE IDclient=(SELECT id from users where email='$user')";
            
             
            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
             
             $sql ="DELETE FROM `carro` WHERE IDclient=(SELECT id from users where email='$user')";
             $conexion = connect::con();
             $res = mysqli_query($conexion, $sql);
             connect::close($conexion);
             return $res;
        }


    }