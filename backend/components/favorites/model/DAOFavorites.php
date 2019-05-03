<?php
//    $path = $_SERVER['DOCUMENT_ROOT'] . '/www/EDEN/'; ///opt/lampp/htdocs
//    include($path ."model/connect.php");


//     class DAOFavorites{

//         function insertFavorites($home,$email){
//            // echo('insert!!');
//            //$mail=$_SESSION['mail'];
//            //$sql="INSERT INTO favoritos SELECT * from casas WHERE nombre='$home'";
          
//             $sql="INSERT INTO `favoritos1`(`user_id`, `home_id`) VALUES ((SELECT id FROM users  WHERE email='$email'), (SELECT id FROM casas  WHERE nombre='$home'))";

// 			$conexion = connect::con();
//             $res = mysqli_query($conexion, $sql);
//             connect::close($conexion);
//             return $res;
//         }
//         function readFavorites($email){
            
//             //$sql = "SELECT nombre FROM favoritos";
//             $sql = "SELECT nombre FROM casas, favoritos1 WHERE ID =home_id and user_id = ( SELECT id FROM users WHERE email='$email')";
//              $conexion = connect::con();
//              $res = mysqli_query($conexion, $sql);
//              connect::close($conexion);
//              return $res;
//          }

//          function deleteFavorites($home,$email){
            
//             //$sql = "DELETE FROM `favoritos1` WHERE nombre='$home'";
//             $sql="DELETE FROM `favoritos1` WHERE user_id=(SELECT id FROM users WHERE email='$email') and home_id=(SELECT ID FROM casas WHERE nombre='$home')";

// 			$conexion = connect::con();
//             $res = mysqli_query($conexion, $sql);
//             connect::close($conexion);
//             return $res;
//          }

//     }