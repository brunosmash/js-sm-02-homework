function initMap() {

  var location = {lat: 34.052, lng: -118.243};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: location
  });

  var geocoder = new google.maps.Geocoder();
  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });

}


function geocodeAddress(geocoder, resultsMap) {

  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {

    if (status === 'OK') {

      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({

        map: resultsMap,  
        position: results[0].geometry.location
      
      });

    } else {

      alert('Search was not successful for the following reason: ' + status);
    
    }
  
  });

console.log(resultsMap);

}
