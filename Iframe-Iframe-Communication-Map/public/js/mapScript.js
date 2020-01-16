var map, marker;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 8.5686, lng: 76.8731},
    zoom: 8
  });

  marker = new google.maps.Marker({
    position: {lat: 8.5686, lng: 76.8731},
    map: map,
    title: 'Hello World!'
  });

  map.addListener('click', function(e) {
      placeMarker(e.latLng, map);
  });
}


function placeMarker(position) {
    debugger
    parentSource.postMessage(JSON.stringify(position), parentOrigin);
    marker.setPosition(position);
}

function setMarker(position){
    debugger
    var copenhagen = new google.maps.LatLng(parseFloat(position.lat), parseFloat(position.lng));
    marker.setPosition(copenhagen);
    map.setZoom(8);
    map.panTo(marker.position);
}