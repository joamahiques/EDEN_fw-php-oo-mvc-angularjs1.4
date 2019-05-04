eden.factory('contact_map',['$rootScope',
function($rootScope){
    
    var service={};
    service.initmap=initmap;
    return service;

     function initmap(){
        console.log('mapa');
        var ontinyent = {lat: 38.8220593, lng: -0.6063927};
        var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: ontinyent
    });

    var contentString = 
    '<div id="content">'+
        '<p>ENCUENTRANOS AQUÍ</p>'+
        '<p><b>Ontinyent</b>, Calle Alicante num. 23.</p>'+
        '<p>Teléfono: 682200625,</p>'+
        '<p><a href="http://www.iestacio.com/">IES LESTACIÓ</a></p>'+
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
}
]);