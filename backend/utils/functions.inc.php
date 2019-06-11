<?php

function generate_JWK($name){
    $header = '{"typ":"JWT", "alg":"HS256"}';
    $secret = secretkey;
    //$secret = rand(0, 1) ? 'maytheforcebewithyou' : 'ettelefonomicasa';
    //iat: Tiempo que inició el token
    //exp: Tiempo que expirará el token (+1 hora)
    //name: info user
    $payload = '{
        "iat":"'.time().'", 
        "exp":"'.(time() + (60*60)).'",
        "name":'.$name.'
       }';
    $JWT = new jwt;
    $token = $JWT->encode($header, $payload, $secret);
    // $json = $JWT->decode($token, $secret);
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
        if ($amigableson) {
            $url = explode("&", str_replace("?", "", $url));
           
            foreach ($url as $key => $value) {
                $aux = explode("=", $value);
                $link .=  $aux[1]."/";
            }
        } else {
            $link = "index.php" . $url;
        }

        if ($return) {
            return SITE_PATH . $link;
        }
        $url=SITE_PATH .$link;
        echo $url;
    }


    