<div id="contenido"  class="content">
<div class="container_12">
        <div class="row">
    			<h3>INFORMACIÓN DE: 
                     <?php
                    echo $home['nombre'];
                    echo '</br>';
                    ?>
                </h3>
    	</div>
        <?php
        $fechaCons=$home['fechacons'];
        $edadcasa=calculaAnosRead($fechaCons);
        ?>
        <div class="grid2">
                 <div class="text1"><?php echo $home['nombre']  ?></div> 
                <div class="flex2">
                    <div>
                    <br><span>Localidad:<?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['localidad']  ?></span></br>
                    <br><span>Provincia:  <?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['provincia']  ?></span></br>
                    <br><span>Capacidad Total: <?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['capacidad'] ?> </span></br>
                    <br><span>Propietario:  <?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['nombrePropietario'] ?></span></br>
                    <br><span>DNI: <?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['dni']  ?></span></br>
                    <br><span>Email: <?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['email']  ?></span></br>
                    <br><span>Teléfono: <?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['telefono'] ?></span></br>
                    </div>
                    <div>
                    <br><span>Número de habitaciones: <?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['habitaciones']  ?></span></br>
                    <br><span>Reserva entera:  <?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['entera']  ?></span></br>
                    <br><span>Servicios:  <?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['servicios']  ?></span></br>
                    <br><span>Actividades: <?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['actividades']  ?></span></br>
                    <br><span>Fecha de Alta:<?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['fecha']  ?></span></br>
                    <br><span>Fecha de construccion: <?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$home['fechacons']  ?></span></br>
                    <br><span>Años de la casa: <?php echo '&nbsp;&nbsp;&nbsp;&nbsp;'.$edadcasa ?></span> </br>
                    </div>
                   
                </div>
                <p><a class="btn" href="index.php?page=controller_homes&op=list">Volver</a></p>
        </div>
</div>
</div>