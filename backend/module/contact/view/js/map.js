
$(document).ready(function () {
  if(document.getElementById("mapa") != null){
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key="+keymaps+"&callback=initMap";
    script.async;
    script.defer;
    document.getElementsByTagName('script')[0].parentNode.appendChild(script);
  }
})
function initMap() {
    var ontinyent = {lat: 38.8220593, lng: -0.6063927};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: ontinyent
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">ESTAMOS AQUIIIII</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Ontinyent</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        'Heritage Site.</p>'+
        '<p>Attribution:<b> IES LESTACIÓ</b>, <a href="http://www.iestacio.com/</a> '+
        '(last visited June 22, 2019).</p>'+
        '</div>'+
        '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
  
          var marker = new google.maps.Marker({
            position: ontinyent,
            map: map,
            title: 'Ontinyent'
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        }
      
  