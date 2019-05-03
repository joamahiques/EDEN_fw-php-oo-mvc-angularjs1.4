<?php

function calculaAnos(){
		
		$fecha = new DateTime($_POST['fechacons']);
		echo ($_POST['fechacons']); 
		$fecha_y_m_d = $fecha->format('y-m-d');
		echo ("......") ;
        $tiempo = time() - strtotime($fecha_y_m_d);
        echo $tiempo;
		$edad = floor($tiempo/31556926);
		echo ("......") ;
        echo $edad;
		
		if($edad<0){
			$edad=0;
		}
		return $edad;
		

	}

	function calculaAnosRead($fechaCons){
		
		$fecha = new DateTime($fechaCons);
		$fecha_y_m_d = $fecha->format('y-m-d');
		//echo $fecha_y_m_d; 
        $tiempo = time() - strtotime($fecha_y_m_d);
        //echo $tiempo;
        $edad = floor($tiempo/31556926);
        //echo $edad;
		//die();
		if($edad<0){
			$edad=0;
		}
		return $edad;
		

	}