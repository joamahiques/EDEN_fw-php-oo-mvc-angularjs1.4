<div id="contenido" class="content">
    <div class="container_12">
    	<div class="flex">
                <h3>LISTA DE CASAS</h3>
                <a class="btn1" href="<?php amigable('?module=crud&function=create'); ?>">Añadir Casa</a>
    	</div>
    	<div class="list">
    		<!-- DATATABLE -->
            
        </div>
        <div class="flex">
                <a class="btn1" href="<?php amigable('?module=home&function=list_home'); ?>">INICIO</a>
                <a class="btn1" href="<?php amigable('?module=crud&function=delete_all'); ?>">Borrar todo</a>
    	</div>
    </div>
</div>

<!-- modal window -->
<section id="home_modal">
    <div id="details_home" hidden>
        <div id="details">
            <div id="container">
                <div class="grid2">
                    <div class="text1"><span id="nombre"></span></div> 
                    <div class="flex2" id="modalcontent">
                        <!-- Content -->
                    </div>
                </div>
            </div>
            
        </div>
    </div>
   
</section>
