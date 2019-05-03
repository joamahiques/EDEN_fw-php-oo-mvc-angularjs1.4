<?php
	class connect{
		
		public static function con(){
			$host = 'localhost';  
    		$user = "root";                     
    		$pass = "";                             //Remember, there is NO password!
    		$db = "altaCasas";                      //Your database name you want to connect to
    		$port = 3306;                           //The port #. It is always 3306
    		
			
			///creamos nuevo objeto mysqli en la variable conexion para poder utilizarla
    		$conexion = new mysqli($host, $user, $pass, $db, $port);
			/// si hay algun error
			if($conexion->connect_errno){
				die('Lo siento, la conexión ha fallado. Error: (".$conexion->connect_errno.")');
			}else{
				//echo "Connected successfullyOOOHEE".'<br>';
			}
			
			return $conexion;
		}
		///desconectar
		public static function close($conexion){
			mysqli_close($conexion);
		}
	}