// SARA J and LILY M: Symbol Scenarios
var lat;
var long;
var dataValue;
var SCALE = 1.5;

function setup() {
  createCanvas((360 * SCALE), (240 * SCALE));
  rectMode(CENTER);

  lat = createInput("").size((25 * SCALE), (15 * SCALE));

  lat.position((180 * SCALE), (210 * SCALE));

  long = createInput("").size((25 * SCALE), (15 * SCALE));

  long.position((250 * SCALE), (210 * SCALE));

  dataValue = createInput("").size((25 * SCALE), (15 * SCALE));

  dataValue.position((320 * SCALE), (210 * SCALE));
}



function draw() {
  background(220);

  // non-map frame area background
  strokeWeight(0);
  fill('white');
  rect((180 * SCALE), (210 * SCALE), (360 * SCALE), (60 * SCALE));
  
  var latNum;
  var longNum;
  var dataNum;
  var xMouse = mouseX;
  var yMouse = mouseY;
  var mouseLongCoord = Math.trunc(((mouseX - (180 * SCALE)) / SCALE));
  var mouseLatCoord = Math.trunc(-((mouseY - (90 * SCALE)) / SCALE));

  // coordinate display
  
  fill(255, 53, 139);
  textSize(7 * SCALE);
  text("Longitude: "+mouseLongCoord, (1 * SCALE), height/1.06);
  text("Latitude: "+mouseLatCoord, (1 * SCALE), height/1.02);

  // input values
  latNum = Number(
    lat.value(),
    10);

  longNum = Number(
    long.value(),
    10);

  dataNum = Number(
    dataValue.value(),
    10);
  
  // text box labels
  textSize(5 * SCALE);
  fill('black');
  text('LAT:', (180 * SCALE), (208 * SCALE));
  
  textSize(5 * SCALE);
  fill('black');
  text('LONG:', (250 * SCALE), (208 * SCALE));
  
  textSize(5 * SCALE);
  fill('black');
  text('SYMBOL:', (320 * SCALE), (208 * SCALE));

  // prime meridian
  strokeWeight(0);
  fill(255, 53, 139);
  rect((180 * SCALE), (90 * SCALE), (0.25 * SCALE), (180 * SCALE));

  // prime merdian label
  textSize(5 * SCALE);
  fill('black');
  text('Prime Meridian', (185 * SCALE), (10 * SCALE));

  // equator
  strokeWeight(0);
  fill(255, 53, 139);
  rect((180 * SCALE), (90 * SCALE), (360 * SCALE), (0.25 * SCALE));

  // equator label
  textSize(5 * SCALE);
  fill('black');
  text('Equator', (5 * SCALE), (85 * SCALE));
  
  // equator
  strokeWeight(0);
  fill('black');
  rect((180 * SCALE), (180 * SCALE), (360 * SCALE), (0.25 * SCALE));

  var xCoord = (longNum + (180 * SCALE));
  var yCoord = ((90 * SCALE) - latNum);
  
  // SYMBOL 
  // if mouse x or y are within 5 points of the symbol produce   a symbol shifted 5 points to the right
  if (((xMouse > (xCoord + (5 * SCALE))) || ((xMouse < (xCoord   - (5 * SCALE))))) || ((yMouse > (yCoord + (5 * SCALE))) ||     ((yMouse < (yCoord - (5 * SCALE)))))) {
    
  if (dataNum < 0) {
    textSize(7);
    fill('red');
    text('X', xCoord, yCoord);
    } else {

    var currentWidth =
    getWidth(dataNum);
    strokeWeight(0);
    fill(255, 53, 139);
    ellipse(xCoord, yCoord, currentWidth, 5);  
  }
    
  } else {
  // otherwise, produce a symbol at the specified coordinate
  if (dataNum < 0) {
    textSize(7);
    fill('red');
    text('X', (xCoord + (10 * SCALE)), yCoord);
    } else {

    var currentWidth =
    getWidth(dataNum);
    strokeWeight(0);
    fill(255, 53, 139);
    ellipse((xCoord + (10 * SCALE)), yCoord, currentWidth, 5);

  }

}
}

function getWidth(w) {
  if ((w > 0) && (w <= 100)) {
    return 5;
  } else if ((w > 100) && (w <= 200)) {
    return 10;
  } else if (w > 200) {
    return 15;
  } else {
    return 5;
  }

}