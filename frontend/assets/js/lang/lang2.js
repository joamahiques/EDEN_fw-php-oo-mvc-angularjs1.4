


  function cambiarIdioma(lang) {
    lang = lang || sessionStorage.getItem('app-lang') || 'es';
    sessionStorage.setItem('app-lang', lang);
    $.ajax({
       // url: "/www/ejercici9/vista/js/"+lang+".json",
        url: "/www/EDEN_ANGULARJS/view/js/lang/"+lang+".json",
        dataType: 'json',
        type: 'GET',
        success: function (data) {
           //console.log(lang); 
            //console.log(data); 
            var elems = document.querySelectorAll('[data-tr]');
            for (var x = 0; x < elems.length; x++) {
            elems[x].innerHTML = data.frases.hasOwnProperty(lang)
                ? data.frases[lang][elems[x].dataset.tr]
                : elems[x].dataset.tr;
            }

        },
        error: function (data) {
            alert("fail", data);
            console.log(data);
        },
    });
}
window.onload = function(){
    
    cambiarIdioma();
   
    $(document).ready(function(){
        ///clic en el boton cambiar lang
      $("#btn-lang").on('click',function(){
        ///valor del select y le aplicamos la funcion
         var languages =  $("#lang").val();
         console.log(languages);
        
         cambiarIdioma(languages);
   });
        
    });
};