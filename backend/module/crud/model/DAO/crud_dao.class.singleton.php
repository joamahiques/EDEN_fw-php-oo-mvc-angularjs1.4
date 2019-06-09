<?php
class crud_dao {

    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    function select_all_homes_DAO($db){
        $sql = "SELECT * FROM casas ORDER BY provincia ASC";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt); 
    }

    function validate_DAO($db,$home){
        $nombre=$home[name];
        $city=$home[city];
        $sql = "SELECT * FROM casas WHERE nombre='$nombre' and localidad='$city'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt); 

    }

    function select_home_DAO($db,$home){

        $home=substr($home,1);
        $sql = "SELECT * FROM casas WHERE nombre='$home'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt); 
    }

    function delete_home_DAO($db,$home){
        $sql = "DELETE FROM casas WHERE nombre='$home'";
        return  $db->ejecutar($sql);
        
    }
    
    function insert_home_DAO($db,$datos){
            $nombre=$datos[name];
			$localidad=$datos[city][DMUN50];
        	$provincia=$datos[provi][PRO];
			$nombrePropietario=$datos[proname];
			$dni=$datos[dni];
        	$email=$datos[email];
        	$telefono=$datos[tf];
        	$capacidad=$datos[capacity];
			$habitaciones=$datos[rooms];
            $entera=$datos[comp];
            foreach($datos[services] as $key=>$value) {
                $servicios=$servicios."$key,";
            }
            foreach($datos[activities] as $key=>$value) {
                $actividades=$actividades."$key,";
            }
            $fecha = substr($datos[dateregister], 0, 10);
            $fechacons=substr($datos[datecons], 0, 10);
			$edadcasa=$this->calculaAnos($fechacons);
			$precionoche=$datos[price];
			
			$sql ="INSERT INTO `casas`(`ID`, `nombre`, `localidad`, `provincia`, `nombrePropietario`, `dni`, `email`, `telefono`, `capacidad`, `habitaciones`, `entera`, `servicios`, `actividades`, `fecha`, `fechacons`, `edadcasa`, `precionoche`)
            VALUES (null,'$nombre','$localidad','$provincia','$nombrePropietario','$dni','$email','$telefono','$capacidad','$habitaciones','$entera','$servicios','$actividades','$fecha','$fechacons','$edadcasa', '$precionoche')";
            return  $db->ejecutar($sql);
    }

    function update_home_DAO($db, $datos){
            $nombre=$datos[name];
			$localidad=$datos[city][DMUN50];
        	$provincia=$datos[provi][PRO];
			$nombrePropietario=$datos[proname];
			$dni=$datos[dni];
        	$email=$datos[email];
        	$telefono=$datos[tf];
        	$capacidad=$datos[capacity];
			$habitaciones=$datos[rooms];
            $entera=$datos[comp];
            foreach($datos[services] as $key=>$value) {
                $servicios=$servicios."$key,";
            }
            foreach($datos[activities] as $key=>$value) {
                $actividades=$actividades."$key,";
            }
            $fecha = substr($datos[dateregister], 0, 10);
            $fechacons=substr($datos[datecons], 0, 10);
			$edadcasa=$this->calculaAnos($fechacons);
			$precionoche=$datos[price];
        
        $sql = " UPDATE casas SET localidad='$localidad',provincia='$provincia',nombrePropietario='$nombrePropietario',dni='$dni',email='$email',telefono='$telefono',capacidad='$capacidad',
        habitaciones='$habitaciones', entera='$entera', servicios='$servicios',actividades='$actividades',fecha='$fecha',fechacons='$fechacons',edadcasa='$edadcasa' ,precionoche='$precionoche' WHERE nombre='$nombre'";
        return  $db->ejecutar($sql);
    }

    function delete_all_homes_DAO($db){
        $sql = "DELETE FROM casas";
        return  $db->ejecutar($sql);
    }

    function calculaAnos($fechacons){
		
		$fecha = new DateTime($fechacons);
		//echo ($fechacons); 
		$fecha_y_m_d = $fecha->format('y-m-d');
		//echo ("......") ;
        $tiempo = time() - strtotime($fecha_y_m_d);
        //echo $tiempo;
		$edad = floor($tiempo/31556926);
		//echo ("......") ;
       // echo $edad;
		
		if($edad<0){
			$edad=0;
		}
		return $edad;
	}
}