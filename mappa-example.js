<!DOCTYPE html>
<html lang="en">

<head>
  <title>Basic Mappa Tutorial</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js" type="text/javascript"></script>
  <script src="https://unpkg.com/mappa-mundi/dist/mappa.js" type="text/javascript"></script>
</head>

<body>
  <script>
  // Create a variable to hold our map
let myMap;
let canvas;
const mappa = new Mappa('Leaflet');

// Lets put all our map options in a single object
const options = {
  lat: 49.2606,
  lng: -123.2460,
  zoom: 13,
  style: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
}

function setup(){
  canvas = createCanvas(640,640); 
  // background(100); let's uncomment this, we don't need it for now

  // Create a tile map with the options declared
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
  
  
  // Load the data
  meteorites = loadTable('Meteorite_Landings.csv', 'csv', 'header');

  // Only redraw the meteorites when the map change and not every frame.
  myMap.onChange(drawMeteorites);

  
    // Add a color to our ellipse
  fill(200, 100, 100);
  stroke(100);
  
  
}

function draw(){

}


function drawMeteorites() {
  // Clear the canvas
  clear();

  for (let i = 0; i < meteorites.getRowCount(); i++) {
    // Get the lat/lng of each meteorite 
    const latitude = Number(meteorites.getString(i, 'reclat'));
    const longitude = Number(meteorites.getString(i, 'reclong'));

    // Only draw them if the position is inside the current map bounds. We use a
    // Leaflet method to check if the lat and lng are contain inside the current
    // map. This way we draw just what we are going to see and not everything. See
    // getBounds() in http://leafletjs.com/reference-1.1.0.html
    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      // Transform lat/lng to pixel position
      const pos = myMap.latLngToPixel(latitude, longitude);
      // Get the size of the meteorite and map it. 60000000 is the mass of the largest
      // meteorite (https://en.wikipedia.org/wiki/Hoba_meteorite)
      let size = meteorites.getString(i, 'mass (g)');
      size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
      ellipse(pos.x, pos.y, size, size);
    }
  }
}


  </script>
</body>

</html>