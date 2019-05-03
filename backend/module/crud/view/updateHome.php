
<div id="contenido" class="content">
<div class="container_12">
<div>

            <h3 class="botno">ACTUALIZAR CASA
                <?php
                    // if ($error != '')
                    //     print ("<SPAN CLASS='error-message' color:red;>" . "* ".$error . "</SPAN>");
				?> 
            </h3>

<form method="post" name="formcasa" class="update" id="formcasa" autocomplete="on">
<div id="datoscasa">
    <p>
        <label for="nombre" class="update">Nombre</label>
        <input name="nombre" id="nombre" type="text" placeholder="Nombre" value="<?php echo $home['nombre'];?>" readonly />
        <span id="e_nombre" class="styerror"></span>
    </p>
    <p>
        <label for="localidad" class="update">Localidad</label>
        <input name="localidad" id="localidad" type="text" placeholder="localidad" value="<?php echo $home['localidad'];?>" />
        <span id="e_localidad" class="styerror"></span>
    </p>
    <p>
        <label for="provincia" class="update">Provincia</label>
        <select  name="provincia" id="provinciaini">
            <!-- <option <?php  //if  ( $home['provincia']=="Alava")  echo  'selected'  ;  ?> value="Alava">Álava</option>
            <option <?php  //if  ( $home['provincia']=="Albacete")  echo  'selected'  ;  ?> value="Albacete">Albacete</option >
            <option <?php  //if  ( $home['provincia']=="Alicante")  echo  'selected'  ;  ?> value="Alicante"> Alicante</option>-->
            <!-- ETC -->
         </select> 
    </p>
    <p>
             <label for="fechaAlta" class="update">Fecha de Construcción</label> 
            <input id="datepicker" type="text" name="fechacons" placeholder="Fecha de Construcción" value="<?php echo $home['fechacons'];?>">
            <span id="e_fechacons" class="styerror"></span>
	</p>
</div>
<div id="datospropietario">
    <p>
        <label for="nombrePropietario" class="update">Nombre del Propietario</label>
        <input name="nombrePropietario" id="nombrePropietario" type="text" placeholder="nombre del propietario" value="<?php echo $home['nombrePropietario'];?>" readonly />
        <span id="e_nombrePropietario" class="styerror"></span>
    </p>
    <p>
        <label for="dni" class="update">DNI del Propietario</label>
        <input name="dni" id="dni" type="text" placeholder="DNI" value="<?php echo $home['dni'];?>" />
        <span id="e_dni" class="styerror"></span>
    </p>
    <p>
        <label for="email" class="update">Email del Propietario</label>
        <input name="email" id="email" type="text" placeholder="email" value="<?php echo $home['email'];?>" />
        <span id="e_email" class="styerror"></span>
    </p>
    <p>
        <label for="telefono" class="update">Teléfono del propietario</label>
        <input name="telefono" id="telefono" type="text" placeholder="telefono" value="<?php echo $home['telefono'];?>" />
        <span id="e_telefono" class="styerror"></span>
    </p>
</div>
<div id="carac">
    <div class="medio">
        <p>
            <label for="capacidad" class="update">Capacidad Total</label>
            <input name="capacidad" id="capacidad"" type="text"  placeholder="capacidad" value="<?php echo $home['capacidad'];?>" />
            <span id="e_capacidad"" class="styerror"></span>
        </p>
        <p>
            <label for="habitaciones" class="update">Num de Habitaciones</label>
            <input name="habitaciones" id="habitaciones"" type="text" placeholder="habitaciones" value="<?php echo $home['habitaciones'];?>" />
            <span id="e_habitaciones"" class="styerror"></span>
        </p>
        <p>
            <label for="precionoche" class="update">Precio por noche</label>
            <input name="precionoche" id="precionoche" type="text" placeholder="Precio por noche" value="<?php echo $home['precionoche'];?>" />
            <span id="e_precio"" class="styerror"></span>
        </p>
    </div>
    <div class="medio">
        <p>
            <label for="fechaAlta" class="update">Fecha de Alta</label>
            <input id="datepicker2" type="text" name="fecha" value="<?php echo $home['fecha'];?>">
            <span id="e_fechaAlta" class="styerror"></span>
        </p>
        <p class="inputupdate"><label class="update">Reserva Completa:</label>	
        <span> Si <input <?php  if  ( $home['entera']=="si")  echo  'checked'  ;  ?> name="completa" type="radio" value="si"></span>
        <span> No <input <?php  if  ( $home['entera']=="no")  echo  'checked'  ;  ?> name="completa" type="radio" value="no"></span>
        <span id="e_completa"  class="styerror"></span>
        </p>
    </div>
        <p class="chec"><label class="update">Servicios: <span id="e_servicios" " class="styerror"></span></label>	
                <?php
                    $servicios=explode(":", $home['servicios']); //separa los datos del array 
                   
                ?>
            <span>Comidas<input <?php $busca_array=in_array("comidas", $servicios); if($busca_array){ echo "checked";} ?> type="checkbox" name="servicios[]" value="comidas"></span>
            <span>Piscina <input <?php $busca_array=in_array("piscina", $servicios); if($busca_array){ echo "checked";} ?> type="checkbox" name="servicios[]" value="piscina"></span>
            <span>Gimnasio  <input <?php $busca_array=in_array("gimnasio", $servicios); if($busca_array){ echo "checked";} ?> type="checkbox" name="servicios[]" value="gimnasio"></span>
            <span>Masajes<input <?php $busca_array=in_array("masajes", $servicios); if($busca_array){ echo "checked";} ?> type="checkbox" name="servicios[]" value="masajes"></span>
            <span>Hidromasaje<input <?php $busca_array=in_array("hidromasaje", $servicios); if($busca_array){ echo "checked";} ?> type="checkbox" name="servicios[]" value="hidromasaje"></span>
            <span>Acepta Mascotas<input <?php $busca_array=in_array("mascotas si", $servicios); if($busca_array){ echo "checked";} ?> type="checkbox" name="servicios[]" value="mascotas si"></span>
            <!-- <span id="e_servicios" " class="styerror"></span> -->
        </p>
        
        <p class="chec"><label class="update">Actividades: <span id="e_actividades"" class="styerror"></span></label>	
                <?php
                    $actividades=explode(":", $home['actividades']);
                   
                ?>
            <span>Yoga <input <?php $busca_array=in_array("yoga", $actividades); if($busca_array){ echo "checked";} ?> type="checkbox" name="actividades[]" value="yoga"></span>
            <span>Meditacion<input <?php $busca_array=in_array("meditacion", $actividades); if($busca_array){ echo "checked";} ?> type="checkbox" name="actividades[]" value="meditacion"></span>
            <span>Tai chi<input <?php $busca_array=in_array("tai chi", $actividades); if($busca_array){ echo "checked";} ?> type="checkbox" name="actividades[]" value="tai chi"></span>
            <span>Senderismo<input <?php $busca_array=in_array("senderismo", $actividades); if($busca_array){ echo "checked";} ?> type="checkbox" name="actividades[]" value="senderismo"></span>
            <!-- <span id="e_actividades"" class="styerror"></span> -->
        </p>
    </div>
    <div class="btns">
			<a class="btn"  name="alta"  onclick="validate_data()" type="button" value="Alta" id="alta" />Actualizar</a>
	</div>
    <div>
      <?php
            // if ($error_nom != "")
              // 	print ("<SPAN CLASS='styerror' color: #ff0000;>" . "* ".$error_nom . "</SPAN>");
         ?> 
    </div>
</form>
</div>
</div>
</div>