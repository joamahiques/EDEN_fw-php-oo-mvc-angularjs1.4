

<div id="contenido" class="content">
<div class="container_12">
<div>
	<!-- <div class="row"> -->
				<h3 class="botno">ALTA NUEVA CASA
				<?php
							if ($error != '')
								print ("<SPAN CLASS='error-message' color:red;>" . "* ".$error . "</SPAN>");
				?> 
				</h3>
    <!-- </div> -->
	
			<form method="post" name="formcasa" id="formcasa" autocomplete="on">
				<div id="datoscasa">
					<p>
						<!-- <label for="nombre" class="name">Nombre</label> -->
						<input name="nombre" id="nombre"  type="text" placeholder="Nombre" value="<?php echo $_POST?$_POST['nombre']:""; ?>" class="nombre" />
						<span id="e_nombre" class="styerror"></span>
					</p>
					<p>
						<!-- <label for="localidad">Localidad</label> -->
						<input name="localidad" id="localidad" type="text" placeholder="Localidad" value="<?php echo $_POST?$_POST['localidad']:""; ?>" />
						<span id="e_localidad" class="styerror"></span>
					</p>
					<p>
						<!-- <label for="provincia">Provincia:</label> -->
						<select  name="provincia" id="provinciaini" placeholder="Provincia">
							<!-- <option disabled selected>Provincia</option>-->
						</select> 
					</p>
					<p>
							<!-- <label for="fechacons">Fecha de Construccion</label> -->
							<input id="datepicker" type="text" name="fechacons" placeholder="Fecha de Construcción" value="<?php echo $_POST?$_POST['fechacons']:""; ?>">
							<span id="e_fechacons" class="styerror"></span>
					</p>
				</div>
				<div id="datospropietario">
					<p>
						<!-- <label for="nombrePropietario">Nombre del Propietario</label> -->
						<input name="nombrePropietario" id="nombrePropietario" type="text" placeholder="Nombre del propietario" value="<?php echo $_POST?$_POST['nombrePropietario']:""; ?>" />
						<span id="e_nombrePropietario" class="styerror"></span>
					</p>
					<p>
						<!-- <label for="dni">DNI del Propietario</label> -->
						<input name="dni" id="dni" type="text" placeholder="DNI" value="<?php echo $_POST?$_POST['dni']:""; ?>" />
						<span id="e_dni" class="styerror"></span>
					</p>
					<p>
						<!-- <label for="email">Email del Propietario</label> -->
						<input name="email" id="email" type="text" placeholder="Email del propietario" value="<?php echo $_POST?$_POST['email']:""; ?>" />
						<span id="e_email" class="styerror"></span>
					</p>
					<p>
						<!-- <label for="telefono">Teléfono del propietario</label> -->
						<input name="telefono" id="telefono" type="text" placeholder="Telefono del Propietario" value="<?php echo $_POST?$_POST['telefono']:""; ?>" />
						<span id="e_telefono" class="styerror"></span>
					</p>
				</div>
				
				<div id="carac">
					<div>
						<p>
							<!-- <label for="capacidad">Capacidad Total</label> -->
							<input name="capacidad" id="capacidad"" type="text"  placeholder="Capacidad" value="<?php echo $_POST?$_POST['capacidad']:""; ?>" />
							<span id="e_capacidad"" class="styerror"></span>
						</p>
						<p>
							<!-- <label for="habitaciones">Num de Habitaciones</label> -->
							<input name="habitaciones" id="habitaciones"" type="text" placeholder="Num de habitaciones" value="<?php echo $_POST?$_POST['habitaciones']:""; ?>" />
							<span id="e_habitaciones"" class="styerror"></span>
						</p>
						<p>
							<!-- <label for="habitaciones">Num de Habitaciones</label> -->
							<input name="precionoche" id="precionoche" type="text" placeholder="Precio por noche" value="<?php echo $_POST?$_POST['precionoche']:""; ?>" />
							<span id="e_precio"" class="styerror"></span>
						</p>
					</div>
					<div >
						<p>
							<!-- <label for="fechaAlta">Fecha de Alta</label> -->
							<input id="datepicker2" type="text" name="fecha" placeholder="Fecha de Alta" value="<?php echo $_POST?$_POST['fecha']:""; ?>">
							<span id="e_fechaAlta" class="styerror"></span>
						</p>
						<p><label class="reserva">Reserva Completa:  
						<span> Si <input name="completa" type="radio" value="si"></span>
						<span> No <input name="completa" type="radio" value="no"></span>
						<span id="e_completa"  class="styerror"></span>
						</label>	
						</p>
					</div>
						<p class="chec"><label>Servicios:<span id="e_servicios" " class="styerror"></span></label>	
							<span>Comidas<input type="checkbox" id="servicios" name="servicios[]" value="comidas"></span>
							<span>Piscina <input type="checkbox" id="servicios" name="servicios[]" value="piscina"></span>
							<span>Gimnasio  <input type="checkbox" id="servicios"  name="servicios[]" value="gimnasio"></span>
							<span>Masajes<input type="checkbox" id="servicios" name="servicios[]" value="masajes"></span>
							<span>Hidromasaje<input type="checkbox" id="servicios" name="servicios[]" value="hidromasaje"></span>
							<span>Acepta Mascotas<input type="checkbox" id="servicios" name="servicios[]" value="mascotas si"></span>
							<!-- <span id="e_servicios" " class="styerror"></span> -->
						</p>
						<p class="chec"><label>Actividades:<span id="e_actividades"" class="styerror"></span></label>	
							<span>Yoga <input type="checkbox" id="actividades" name="actividades[]" value="yoga"></span>
							<span>Meditacion<input type="checkbox" id="actividades" name="actividades[]" value="meditacion"></span>
							<span>Tai chi<input type="checkbox" id="actividades" name="actividades[]" value="tai chi"></span>
							<span>Senderismo<input type="checkbox" id="actividades" name="actividades[]" value="senderismo"></span>
							<!-- <span id="e_actividades"" class="styerror"></span> -->
						</p>
				</div>
			
				<div class="btns">
					<a class="btn"  name="alta"  onclick="validate_data()" type="button" value="Alta" id="alta" />Enviar </a>
				</div>
				
			</form>
	</div>
</div>
</div>