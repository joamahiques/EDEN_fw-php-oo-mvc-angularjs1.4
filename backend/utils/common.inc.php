<?php
  function loadModel($model_path, $model_name, $function, $arrArgument = ''){
    $model = $model_path . $model_name . '.class.singleton.php';
    // $_SESSION['module']=$model_name;
    if (file_exists($model)) {///si existe la clase 'model' que pedimos
        include_once($model);
        $modelClass = $model_name;//por ejemplo profile_model
            
        if (!method_exists($modelClass, $function)){
            throw new Exception();
        }

        $obj = $modelClass::getInstance();
        if (isset($arrArgument)){
            return $obj->$function($arrArgument); //la funcion que le pasamos y los argumentos
        }
    } else {
        throw new Exception();
    }
  }

  