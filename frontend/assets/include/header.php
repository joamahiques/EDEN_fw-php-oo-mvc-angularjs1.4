<body id="top">
<!--==============================header=================================-->
<header>
			<div>
				<div id="rel">
					<div id="contenedor-slider" class="contenedor-slider">
						<h1>
							<a href="="<?php amigable('?module=home&function=list_home'); ?>">
								<img src="<?php echo IMG_PATH ?>logo.png" alt="Eden">
							</a>
						</h1>
						
						<div class="fotohome"> 
							<section class="slider__section"><img  class="slider__img"></section>
						</div>
						
					</div>
					<form class="search">
						
							<select id="drop1">
								<option value="0">Selecciona Provincia</option>
							</select>
						
							<select id="drop2">
								<option value="0">Selecciona Municipio</option>
							</select>
							
							<div class="autocomplete"> 
								<div id="optionsauto"></div> 
							 	<input id="autocom" type="text" />
   						 	</div>	
   						
							<div ><a id="searchlist">BUSCAR</a></div>   <!--<button class="btn">BUSCAR</button>-->
           			 </form>
				</div>
			</div>
			<div class="clear"></div>
			<?php
				//include 'menu.php';
			 ?> 
			</header>

<!-- <header class="header">
			<div class="container_12">
				<div class="grid_12">
				
					<h1>
						<a href="index.php?page=controllerhome&op=list">
							<img src="view/img/logo.png" alt="Eden">
						</a>
					</h1>
				</div>
				<form class="search">
						
							<select id="drop1">
								<option value="0">Selecciona Provincia</option>
							</select>
						
							<select id="drop2">
								<option value="0">Selecciona Municipio</option>
							</select>
							
							<div class="autocomplete"> 
								<div id="optionsauto"></div> 
							 	<input id="autocom" type="text" />
   						 	</div>	
   						
							<div ><a id="searchlist">BUSCAR</a></div>   
						</form>
 
			</div>
			<div class="clear"></div>
			<?php
				//include 'menu.php';
			 ?> 
			</header> -->
