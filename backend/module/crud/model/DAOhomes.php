<?php

	$path = $_SERVER['DOCUMENT_ROOT'] . '/www/EDEN/'; ///opt/lampp/htdocs
	//include($path . "module/homes/model/DAOhomes.php");
    include($path ."model/connect.php");
    include($path ."module/homes/model/Dates.php");
	class DAOhome{
		function insert_home($datos){
			
			$nombre=$datos[nombre];
			$localidad=$datos[localidad];
        	$provincia=$datos[provincia];
			$nombrePropietario=$datos[nombrePropietario];
			$dni=$datos[dni];
        	$email=$datos[email];
        	$telefono=$datos[telefono];
        	$capacidad=$datos[capacidad];
			$habitaciones=$datos[habitaciones];
			$entera=$datos[completa];
        	foreach ($datos[servicios] as $indice) {
        	    $servicios=$servicios."$indice:";
        	}
        	foreach ($datos[actividades] as $indice) {
        	    $actividades=$actividades."$indice:";
			}
			$fecha=$datos[fecha];
			$fechacons=$datos[fechacons];
			$edadcasa=calculaAnos();
			$precionoche=$datos[precionoche];
			// echo ($precionoche);
			// die();
			
			$sql ="INSERT INTO `casas`(`ID`, `nombre`, `localidad`, `provincia`, `nombrePropietario`, `dni`, `email`, `telefono`, `capacidad`, `habitaciones`, `entera`, `servicios`, `actividades`, `fecha`, `fechacons`, `edadcasa`, `precionoche`)
		    VALUES (null,'$nombre','$localidad','$provincia','$nombrePropietario','$dni','$email','$telefono','$capacidad','$habitaciones','$entera','$servicios','$actividades','$fecha','$fechacons','$edadcasa', '$precionoche')";
            
            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
			connect::close($conexion);
			
			return $res;
		}
		
		
		
		function select_all_homes(){
			$sql = "SELECT * FROM casas ORDER BY provincia ASC";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
		}
		
		function select_home($home){
			$sql = "SELECT * FROM casas WHERE nombre='$home'";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);
            return $res;
		}
		
		function update_home($datos){
			$nombre=$datos[nombre];
        	$localidad=$datos[localidad];
        	$provincia=$datos[provincia];
			$nombrePropietario=$datos[nombrePropietario];
			$dni=$datos[dni];
        	$email=$datos[email];
        	$telefono=$datos[telefono];
        	$capacidad=$datos[capacidad];
			$habitaciones=$datos[habitaciones];
			$entera=$datos[completa];
        	foreach ($datos[servicios] as $indice) {
        	    $servicios=$servicios."$indice:";
        	}
        	foreach ($datos[actividades] as $indice) {
        	    $actividades=$actividades."$indice:";
			}
			$fecha=$datos[fecha];
			$fechacons=$datos[fechacons];
			$edadcasa=calculaAnos();
			$precionoche=$datos[precionoche];
			
        	$sql = " UPDATE casas SET localidad='$localidad',provincia='$provincia',nombrePropietario='$nombrePropietario',dni='$dni',email='$email',telefono='$telefono',capacidad='$capacidad',
			habitaciones='$habitaciones', entera='$entera', servicios='$servicios',actividades='$actividades',fecha='$fecha',fechacons='$fechacons',edadcasa='$edadcasa' ,precionoche='$precionoche' WHERE nombre='$nombre'";


            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
			connect::close($conexion);
			print_r($res);
			return $res;
		}
		
		function delete_home($home){
			$sql = "DELETE FROM casas WHERE nombre='$home'";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
		}

		function deleteallhomes(){
			//echo "deleteallDAO";
			//die();
			$sql = "DELETE FROM casas";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
		}

		function select_all_homes_and_order($datos){
			$proini=$datos;
			
			$sql = "SELECT * FROM casas WHERE provincia='$proini' ORDER BY localidad ASC,capacidad ASC";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
		}
		
		function validate(){
			
			$nombre=$_POST['nombre'];
			try{
				$conexion = connect::con();
			}catch(Exception $e){
				echo "ERRORRRRRR";
			}
			
			$statement = $conexion->prepare("SELECT * FROM casas WHERE nombre ='$nombre' LIMIT 1");
			$statement->execute();
			//var_dump($statement);
			// print_r($nombre);
				// if ($statement){  
				// 	//Ejecuta sentencia.
				// 	echo "NOOOO Hubo un problema con la consulta";
				// }
				// else{
				// 	echo "Hubo un problema con la consulta";
				// }
			$resultado = $statement->fetch();//devuelve false si no existe registro, 
			//var_dump($resultado);
			//die();
				// if($resultado != false){
				// 	echo ("la casa ya existe");
				// 	die();
				// }else if(!$resultado){
				// 	echo ("la casa no existe");
				// 	die();
				// }
				
			
            connect::close($conexion);
            return $resultado;
	}
	
	
			
		
	}