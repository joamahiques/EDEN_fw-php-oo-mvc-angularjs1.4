<?php
    function enviar_email($arr) {
        $html = '';
        $subject = '';
        $body = '';
        $ruta = '';
        $return = '';
        switch ($arr['type']) {
            case 'alta':////mail para enviar el token y darse de alta
                $subject = 'Tu Alta en EDEN';
                $ruta = "<a href=http://localhost/www/EDEN_ANGULARJS/#/home/active_user/" . $arr['token'] . ">aqu&iacute;</a>";
                $body = 'Gracias por unirte a nuestra aplicaci&oacute;n<br> Para finalizar el registro, pulsa ' . $ruta;
                break;
    
            case 'changepass':///para cambiarse la contraseña
                $subject = 'Cambio de Password en EDEN';
                $ruta = "<a href=http://localhost/www/EDEN_ANGULARJS/#/login/changepass/" . $arr['token'] . ">aqu&iacute;</a>";
                $body = 'Para cambiar tu password pulsa ' . $ruta;
                break;
                
            case 'contact':///el form del contact
                $subject = 'Tus comentarios a EDEN han sido enviados';
                $ruta = "<a href='" . amigable("?module=home&function=list_home", true) . "'>aqu&iacute;</a>";
                $body = 'Para visitar nuestra web, pulsa ' . $ruta;
                break;

            case 'newuser':///new pass para el registro por redes sociales
                $subject = 'Bienvenid@ a EDEN';
                $ruta = "<a href='" . amigable("?module=home&function=list_home", true) . "'>aqu&iacute;</a>";
                $body = 'Para visitar nuestra web, pulsa ' . $ruta  ;
                break;
    
            case 'admin':///para enviar logs al admin
                $subject = $arr['inputSubject'];
                $body = 'inputName: ' . $arr['inputName']. '<br>' .
                'inputEmail: ' . $arr['inputEmail']. '<br>' .
                'inputSubject: ' . $arr['inputSubject']. '<br>' .
                'inputMessage: ' . $arr['inputMessage'];
                break;
            // case 'purchase':
            //     $subject = $arr['inputSubject'];
            //     $body = 
            //     ' <table width=100% id="table_crud">' .
            //     '<thead>' .
            //         '<tr>' .
            //             '<td><b>Nombre</b></th> ' .
            //             '<td><b>Localidad</b></th>' .
            //             '<td><b>Provincia</b></th>' .
            //             '<td><b>Capacidad</b></th>' .
            //             '<td><b>Precio</b></th>' .
            //         '<th class="td1"><b>Accion</b></th>' .
            //         '</tr>' .
            //     '</thead>' .
            //     '<tbody>' . mailpurchase($arr['token']) .'</tbody>' .
            //     '</table>';
            //     break;
        }
        ///cuerpo del mensaje
        $html .= "<html>";
        $html .= "<body>";
            $html .= "Asunto:";
            $html .= "<br><br>";
	       $html .= "<h4>". $subject ."</h4>";
           $html .= "<br><br>";
           $html .= "Mensaje:";
           $html .= "<br><br>";
           $html .= $arr['inputMessage'];
           $html .= "<br><br>";
	       $html .= $body;
	       $html .= "<br><br>";
	       $html .= "<p>Sent by EDEN</p>";
		$html .= "</body>";
		$html .= "</html>";

        set_error_handler('ErrorHandler');
            try{
                if ($arr['type'] === 'admin')
                    $address = 'joamahiques@gmail.com';
                else
                    $address = $arr['inputEmail'];
                    $result = send_mailgun('joamahiques@gmail.com', $address, $subject, $html);    
            } catch (Exception $e) {
                $return = 0;
            }
		restore_error_handler();
        return $result;
    }

function send_mailgun($from, $email, $subject, $html){
    $config = array();
    //$config['api_key'] = "bc5805ea5df1fe1751896a341d702f39-6140bac2-de5253c0"; //API Key
    $config['api_key'] = apikeymailgun; //API Key
    //$config['api_url'] = "https://api.mailgun.net/v3/sandboxb20b48a4b8d2462abf42247fc9e7536c.mailgun.org/messages"; //API Base URL
    $config['api_url'] = apiurlmailgun; //API Base URL

   $message = array();
   $message['from'] = $from;
   $message['to'] =  $email;
   $message['h:Reply-To'] = "joamahiques@gmail.com";
   $message['subject'] = $subject;
   $message['html'] = $html;

   $ch = curl_init();
   curl_setopt($ch, CURLOPT_URL, $config['api_url']);
   curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
   curl_setopt($ch, CURLOPT_USERPWD, "api:{$config['api_key']}");
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
   curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
   curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
   curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
   curl_setopt($ch, CURLOPT_POST, true);
   curl_setopt($ch, CURLOPT_POSTFIELDS,$message);
   $result = curl_exec($ch);
   curl_close($ch);
   return $result;
 }

//  function mailpurchase($user){
//     try {
//         $arrValue = loadModel(MODEL_MODULE, "cart_model", "read_cart", $user);
//     } catch (Exception $e) {
//         echo json_encode("error");
//         exit();
//     }
//     if ($arrValue){
//                 foreach ($arrValue as $row) {
//                        echo '<tr>';
//                        echo '<td><br>'. $row['nombre'] . '</br></td>';
//                     echo '<td><br>'. $row['localidad'] . '</br></td>';
//                     echo '<td><br>'. $row['provincia'] . '</br></td>';
//                     echo '<td><br>'. $row['capacidad'] . '</br></td>';
//                     echo '<td><br>'. $row['precionoche'] . '€</br></td>';
//                     echo '<td><br>';
//                        echo "<a  class='read'  id='".$row['nombre']."'>Read</a>";
//                        echo '&nbsp;';
//                        echo '<a class="btn" href="index.php?page=controller_homes&op=update&id='.$row['nombre'].'">Update</a>';
//                        echo '&nbsp;';
//                        echo '<a class="btn" href="index.php?page=controller_homes&op=delete&id='.$row['nombre'].'">Delete</a>';
//                        echo '</td>';
//                        echo '</tr>';
//                 }
//             }       
// }
