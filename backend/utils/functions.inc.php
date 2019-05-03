<?php

function generate_JWK($name){
    //require_once "classes/JWT.class.singleton.php";
    $header = '{"typ":"JWT", "alg":"HS256"}';
    $secret = 'ettelefonomicasa';
    //$secret = rand(0, 1) ? 'maytheforcebewithyou' : 'ettelefonomicasa';
    //iat: Tiempo que inició el token
    //exp: Tiempo que expirará el token (+1 hora)
    //name: info user
    //echo json_encode($secret);
    
    
    $payload = '{
        "iat":"'.time().'", 
        "exp":"'.(time() + (60*60)).'",
        "name":'.$name.'
       }';

    $JWT = new jwt;
    $token = $JWT->encode($header, $payload, $secret);
    $json = $JWT->decode($token, $secret);
    // echo 'JWT sandomera: '.$token."\n\n"; echo '<br>';
    // echo 'JWT Decoded sandomera: '.$json."\n\n"; echo '<br>'; echo '<br>';
    // exit;
    return $token;
}
////////debug
    function debugPHP($array){
        echo "<pre>";
        print_r($array);
        echo "</pre><br>";
    }
    function console_log( $data ){
        echo '<script>';
        echo 'console.log('. json_encode( $data ) .')';
        echo '</script>';
      };
    /////callback  
    function redirect($url){
        die('<script>top.location.href="'.$url.'";</script>');
    }
/////////pretty URL
    function amigable($url, $return = false) {
        
        $amigableson = URL_AMIGABLES;
        $link = "";
        // $find=array(' ','&','?');
        // $link=str_replace($find, "/", $url);
        // $url = "index.php" . $link;
        if ($amigableson) {
            $url = explode("&", str_replace("?", "", $url));
           
            foreach ($url as $key => $value) {
                $aux = explode("=", $value);
                // if ($value === end($url)) {
                //     $link .= "/". $aux[1];
                // }else{
                //     $link .=  $aux[1]."/";
                // }
                // $aux = explode("=", $value);
                 $link .=  $aux[1]."/";
            }
        } else {
            $link = "index.php" . $url;
        }

        if ($return) {
            return SITE_PATH . $link;
        }
        // $url=SITE_PATH . "index.php/" .$link;
        $url=SITE_PATH .$link;
        echo $url;
        
        //echo $url;
        // echo SITE_PATH.'index.php/module=home/function=list_home';
        
    }


    