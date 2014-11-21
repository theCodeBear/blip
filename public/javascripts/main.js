$(function () {


var heatMapData = [
  { location: new google.maps.LatLng(37.495, -121.9178)},
  { location: new google.maps.LatLng(37.495, -121.9178)}
];


// GET GEOLOCATION DATA AND DISPLAY MAP
  var map;
  if (navigator.geolocation) {  // Check to see if the browser supports the GeoLocation API.
  // Get the location
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
    // Show the map
    console.log(lat+" "+ lon);
      map = showMap(lat, lon);
    });
  } else {
  // Print out a message to the user if no geolocation support.
    document.write('Your browser does not support GeoLocation');
  }



// DISPLAY'S THE GOOGLE MAP IN THE HTML CENTERED ON THE USER'S POSITION
  function showMap(myLat, myLong) {
    // Create a LatLng object with the GPS coordinates.
    // var myLatLng = new google.maps.LatLng(lat, lon);
    // Create the Map Options
    var mapOptions = {
      zoom: 14,
      center: {lat: myLat, lng: myLong},
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // Generate the map
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatMapData
    });
  // Setting the map to the html div
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  // Setting the heatmap layer onto the map (must come after the above line of code)
    heatmap.setMap(map);
    return map;
  }



  


});