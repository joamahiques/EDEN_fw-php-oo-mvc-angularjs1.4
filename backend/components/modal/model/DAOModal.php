<?php

	$path = $_SERVER['DOCUMENT_ROOT'] . '/www/EDEN/'; ///opt/lampp/htdocs
	//include($path . "module/homes/model/DAOhomes.php");
    include($path ."model/connect.php");

    class DAOModal{

        function select_home($home){
			$sql = "SELECT * FROM casas WHERE nombre='$home'";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);
            return $res;
        }
        
    }