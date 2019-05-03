<div id="contenido" class="content">
    <div class="container_12">
    <div class="grid_12">
        <div class="row">
            <h3 id='home'>ELIMINAR: 
            </h3>
        </div>
        <form autocomplete="on" method="post" name="delete_home" id="deletehome" action="index.php?page=controller_homes&op=delete&id=<?php echo $_GET['id']; ?>">
            <span >
            
                <h3>¿Está seguro?</h3>
                
                
                <button type="submit" class="btn" name="delete" id="delete">Eliminar</button>
                <a class="btn" href="index.php?page=controller_homes&op=list">Cancelar</a>
        
            </span>
        </form>
</div>
    </div>
</div>