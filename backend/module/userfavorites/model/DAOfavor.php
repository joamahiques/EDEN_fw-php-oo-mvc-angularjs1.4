<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/www/EDEN/'; ///opt/lampp/htdocs
include($path . "model/connect.php");

class DAOfavor{
        
    function selectfavor($email){
			//$sql = "SELECT nombre,localidad,provincia,capacidad,entera FROM favoritos";
			$sql = "SELECT nombre,localidad,provincia,capacidad,entera FROM casas, favoritos1 WHERE ID =home_id and user_id = ( SELECT id FROM users WHERE email='$email')";

			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;

		}
    }
    
