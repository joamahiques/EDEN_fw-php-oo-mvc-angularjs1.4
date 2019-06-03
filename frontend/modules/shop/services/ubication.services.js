 eden.factory('ubication_map',['$rootScope','services','$timeout','favoritesServices',
function($rootScope,services, $timeout,favoritesServices){
  var service={};
  service.initmap1=initMap1;
  var map, infoWindow;
  var zoom;
  var markers = [];
  var MARKER_PATH = 'https://maps.gstatic.com/intl/en_us/mapfiles/marker_green';
  
      function initMap1(searchservices,ubic) {
        provi=searchservices.data.provincia;
        local= searchservices.data.localidad; 
        val= searchservices.data.home;
        //console.log(provi);
            if(!provi){
                zoom=6;
            }else if((!local)&&(provi)){
                zoom=8;
            }else if((local)&&(provi)){
                zoom=13;
            }
            if((val!='null')&&(val)){
              zoom=15;
            }
            //console.log(zoom);
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
            search(provi, local, val);
      }

//       // Search for hotels in the selected city, within the viewport of the map.
      function search(provi, local, val) {
            var searchmap = JSON.stringify({'provi':provi,'local':local,'val':val});
            //console.log(searchmap);
            services.get('shop','productsmap',searchmap).then(function (response) {
                //console.log(response);
                 //$scope.local = response;
                clearResults();
                clearMarkers();
                // Create a marker for each hotel found, and
                // assign a letter of the alphabetic to each marker icon.
                for (var i = 0; i < response.length; i++) {   
                        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + i);
                        var markerIcon = MARKER_PATH + markerLetter + '.png';
                        var latlng = new google.maps.LatLng(response[i].latitud, response[i].longitud);
                        // Use marker animation to drop the icons incrementally on the map.
                        markers[i] = new google.maps.Marker({
                            //position: data[i].geometry.location,
                            position:latlng,
                            animation: google.maps.Animation.DROP,
                            icon: markerIcon,  
                        });
                        // If the user clicks a hotel marker, show the details of that hotel
                        // in an info window.
                        markers[i].placeResult = response[i];
                        google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                        setTimeout(dropMarker(i), i * 100);
                        addResult(response[i], i);
                }
                
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

//       // Get the place details for a hotel. Show the information in an info window,
//       // anchored on the marker for the hotel that the user selected.
      function showInfoWindow() {
            
            var marker = this;
            //console.log(marker);
            infoWindow.open(map,marker);
            buildIWContent(marker.placeResult);
      }

//       // Load the place information into the HTML elements used by the info window.
      function buildIWContent(place) {
        $rootScope.place={};
        $timeout(function () {
          //favoritesServices.readfavorites();
          $rootScope.place = place;
          

      },20);
      
        }
    return service;

}]);