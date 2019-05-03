<?php
   


    class search_dao{

        function readProvince(){
            
            $sql = "SELECT DISTINCT provincia FROM casas ORDER BY provincia ASC";
             
             $conexion = connect::con();
             $res = mysqli_query($conexion, $sql);
             connect::close($conexion);
             return $res;
         }

         function readMuni($provi){
            
            $sql = "SELECT DISTINCT localidad FROM casas WHERE provincia='$provi' ORDER BY localidad ASC";
             
             $conexion = connect::con();
             $res = mysqli_query($conexion, $sql);
             connect::close($conexion);
             return $res;
         }

         function autocomplete(){
            $val = $_POST['auto'];
            $local = $_POST['drop2'];
           //$sql = "SELECT *  FROM casas WHERE nombre LIKE '".$val. "%'";
            $sql = "SELECT *  FROM casas WHERE localidad='$local' and nombre LIKE '".$val. "%'";
             
             $conexion = connect::con();
             $res = mysqli_query($conexion, $sql);
             connect::close($conexion);
             return $res;
         }
    }