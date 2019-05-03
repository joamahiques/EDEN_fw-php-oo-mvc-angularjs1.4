$(document).ready(function () {
    if(document.getElementById("mapa_ubi") != null){
      var script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key="+keymaps+"&libraries=places";
      script.async;
      script.defer;
      document.getElementsByTagName('script')[0].parentNode.appendChild(script);
    }

    $('#ubi').on('click',function(){
        window.location.href=amigable('?module=shop&function=list_map')
    });
    ///saca el mapa de la provincia buscada
    if(document.getElementById("mapa_ubi") != null){
        if(provi!='null'){
            ubi={'ubi':sessionStorage.getItem('provincia'),'muni':sessionStorage.getItem('local')}
        }else{
            ubi={'ubi':'España'}
        }
            $.ajax({
                type: "POST",
                url: amigable('?module=shop&function=ubication'), 
                data: ubi//{'ubi':sessionStorage.getItem('provincia')},
            })
            .done(function( data, textStatus, jqXHR ) {
                    ubic=JSON.parse(data);
                    //console.log(data);
                    $('#h2local').html(ubic['loc']);
                    initMap1()
            })
      }
  })
  var provi=sessionStorage.getItem('provincia');
  var local= sessionStorage.getItem('local'); 
  var val= sessionStorage.getItem('val'); 
  var map, infoWindow;
  var ubic;
  var zoom;
  var markers = [];
  var MARKER_PATH = 'https://maps.gstatic.com/intl/en_us/mapfiles/marker_green';
  
  if(!val){
      ///console.log('entra');
      val=null;
  }
  if((local=='false')||(local==0)){
      local=null;
  }
  if(provi==0){
      provi=null;
  }
  
      
      
    //   var ubiprovi=sessionStorage.getItem('provincia');
     //console.log(sessionStorage.getItem('provincia'));
      function initMap1() {
        //console.log(val);
            if(provi==='null'){
                zoom=6;
            }else if((local===null)&&(provi!='null')){
                zoom=8;
            }else if((local!=null)&&(provi!=null)){
                zoom=13;
            }
            if((val!='null')&&(val)){
              zoom=15;
            }
            console.log(zoom);
            map = new google.maps.Map(document.getElementById('mapa_ubi'), {
              zoom: zoom,
              center: {lat:ubic['lat'], lng:ubic['long']},
              mapTypeControl: false,
              panControl: false,
              zoomControl: false,
              streetViewControl: false
            });

            infoWindow = new google.maps.InfoWindow({
              content: document.getElementById('info-content')
            });
            search();
      }

      // Search for hotels in the selected city, within the viewport of the map.
      function search() {
            var searchmap = JSON.stringify({'provi':provi,'local':local,'val':val});
           $.ajax({
              type: "POST",
              dataType: "json",
              url:amigable('?module=shop&functions=productsmap'),
              data:{searchmap}
          })
          .done(function( data, textStatus, jqXHR ) {
                    //console.log(data);
                    clearResults();
                    clearMarkers();
                    // Create a marker for each hotel found, and
                    // assign a letter of the alphabetic to each marker icon.
                    for (var i = 0; i < data.length; i++) {   
                            var markerLetter = String.fromCharCode('A'.charCodeAt(0) + i);
                            var markerIcon = MARKER_PATH + markerLetter + '.png';
                            var latlng = new google.maps.LatLng(data[i].latitud, data[i].longitud);
                            // Use marker animation to drop the icons incrementally on the map.
                            markers[i] = new google.maps.Marker({
                                //position: data[i].geometry.location,
                                position:latlng,
                                animation: google.maps.Animation.DROP,
                                icon: markerIcon,  
                            });
                            // If the user clicks a hotel marker, show the details of that hotel
                            // in an info window.
                            markers[i].placeResult = data[i];
                            google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                            setTimeout(dropMarker(i), i * 100);
                            addResult(data[i], i);
                    }
                //}
        })
        .fail(function( data, textStatus, jqXHR ) {
                console.log(data);
        });
      }

      function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          if (markers[i]) {
            markers[i].setMap(null);
          }
        }
        markers = [];
      }

      function dropMarker(i) {
        return function() {
          markers[i].setMap(map);
        };
      }

      function addResult(result, i) {
       // console.log(result);

        var results = document.getElementById('results');
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + i);
        var markerIcon = MARKER_PATH + markerLetter + '.png';

        var tr = document.createElement('tr');
        tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
        tr.onclick = function() {
          google.maps.event.trigger(markers[i], 'click');
        };

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = markerIcon;
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.nombre);
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        results.appendChild(tr);
      }

      function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }

      // Get the place details for a hotel. Show the information in an info window,
      // anchored on the marker for the hotel that the user selected.
      function showInfoWindow() {
            var marker = this;
            //console.log(marker);
            infoWindow.open(map,marker);
            buildIWContent(marker.placeResult);
      }

      // Load the place information into the HTML elements used by the info window.
      function buildIWContent(place) {
          $('#info-content').html(
            '<div>'+ 
            '<div class="text1 flex">'+ place.nombre + '<a class="corazon" id="'+place.nombre+'"><i class="far fa-heart" ></i></a></div>'+
            '<br><span>Localidad:   <span id="localidad">'+place.localidad+'</span></span></br>'+
            '<br><span>Provincia:   <span id="prov">'+place.provincia+'</span></span></br>'+
            '<br><span>Capacidad Total:     <span id="capacidad">'+place.capacidad+'</span></span></br>'+
            '<div>'+
            '<a  class="read"  id="'+place.nombre+'">READ MORE</a>'+
            '</div>'+
            '</div>'
            
          ).fadeIn(1000)

       }