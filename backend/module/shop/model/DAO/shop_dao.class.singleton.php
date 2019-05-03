<?php

class shop_dao {
    static $_instance;

    private function __construct() {

    }

    public static function getInstance() {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self();
        }
        return self::$_instance;
    }
    
    
    public function count_DAO($db, $data) {
        $provi=$data['provi'];
        $local=$data['local'];
        $val=$data['val'];
        
        if ($val=='null'){
            $val='';
        }
        if ($provi=='null'){
            $provi='';
        }
        if ($local=='null'){
            $local='';
        }
        $sql = "SELECT count(*)as total FROM casas WHERE provincia LIKE '%" . $provi . "%' AND localidad like '%" . $local . "%' AND nombre LIKE '%" . $val . "%'";
        $stmt = $db->ejecutar($sql);
        return $db->listar($stmt);
        
    }

    public function alldrops_DAO($db, $data){ //$provi,$local,$val
        
        $provi=$data['provi'];
        $local=$data['local'];
        $val=$data['val'];
        $start = $data['start'];
        $records_per_page = $data['records'];
        if ($val=='null'){
            $val='';
        }
        if ($provi=='null'){
            $provi='';
        }
        if ($local=='null'){
            $local='';
        }
        $sql = "SELECT * FROM casas WHERE provincia LIKE '%" . $provi . "%' AND localidad like '%" . $local . "%' AND nombre LIKE '%" . $val . "%' ORDER BY provincia ASC, localidad ASC, capacidad ASC LIMIT $start, $records_per_page";
        // $sql = "SELECT * FROM casas WHERE provincia='$provi' AND localidad='$local' AND nombre LIKE '".$val."%'";
        // if(($provi=='null')&&($local=='null')&&($val=='null')){//sacar todo
        //     $sql = "SELECT * from casas ORDER BY provincia ASC LIMIT $start, $records_per_page";
        // }else if(($local=='null') && ($val=='null')&& ($provi!='null')){//provincia
        //     $sql = "SELECT * FROM casas WHERE provincia='$provi' ORDER BY localidad ASC,capacidad ASC ";//LIMIT $start, $records_per_page";
        // }else if(($provi!='null')&&($local!='null') && ($val=='null')){//provincia y localidad
        //     $sql = "SELECT * FROM casas WHERE provincia='$provi' AND localidad='$local' ORDER BY capacidad ASC ";//LIMIT $start, $records_per_page";
        // }else if (($provi!='null')&&($local!='null') &&($val!='null')){///busqueda por los 3 campos
        //     $sql = "SELECT * FROM casas WHERE provincia='$provi' AND localidad='$local' AND nombre LIKE '".$val."%'";// LIMIT $start, $records_per_page";
        // }else if(($provi=='null') &&($local=='null') && ($val!='null')){//por valor del autocomplete
        //     $sql = "SELECT * FROM casas WHERE nombre LIKE '".$val. "%' ORDER BY provincia ASC, localidad ASC, capacidad ASC";// LIMIT $start, $records_per_page";
        // }
        
        
        $stmp = $db->ejecutar($sql);
        return $db->listar($stmp);
    }
    public function productsmap_DAO($db, $data){ //$provi,$local,$val
        
        $provi=$data['provi'];
        $local=$data['local'];
        $val=$data['val'];
        if ($val=='null'){
            $val='';
        }
        if ($provi=='null'){
            $provi='';
        }
        if ($local=='null'){
            $local='';
        }
        $sql = "SELECT * FROM casas WHERE provincia LIKE '%" . $provi . "%' AND localidad like '%" . $local . "%' AND nombre LIKE '%" . $val . "%' ORDER BY provincia ASC, localidad ASC, capacidad ASC";
        $stmp = $db->ejecutar($sql);
        return $db->listar($stmp);
    }

    
}