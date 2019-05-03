<?php
   $path = $_SERVER['DOCUMENT_ROOT'] . '/www/EDEN/'; ///opt/lampp/htdocs
   include($path ."model/connect.php");


    class DAOshop{

        function select_all_homes(){
			$sql = "SELECT * FROM casas ORDER BY provincia ASC";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
        }

        function select_all_homes_and_order($datos){
			$provi=$datos;
			
			$sql = "SELECT * FROM casas WHERE provincia='$provi' ORDER BY localidad ASC,capacidad ASC";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
        }
        function selectProviYLoca($provi,$local){
            $sql = "SELECT * FROM casas WHERE provincia='$provi' AND localidad='$local' ORDER BY capacidad ASC";

            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
        }
        function alldrops($provi,$local,$val){
            $sql = "SELECT * FROM casas WHERE provincia='$provi' AND localidad='$local' AND nombre LIKE '".$val. "%'";

            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
        }

        function search($val){
            $sql = "SELECT * FROM casas WHERE nombre LIKE '".$val. "%' ORDER BY provincia ASC, localidad ASC, capacidad ASC";

            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
        }
    }
