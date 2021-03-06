var w = 400;
var d = 2;

function setup() {
  createCanvas(w, w);
  fill(255);
  noStroke();
  frameRate(5);
  power = createSlider(0, 1000, 20);
  power.position(10, w+10);
  power.style('width', '400px');

  powerDisp = createDiv('');
}

function draw() {
  background(0);
  pixelDensity(d);
  var pow = power.value()/10;
  loadPixels();
  for (var x = 0; x < w*d; x++) {
    for (var y = 0; y < w*d; y++) {
      var idx=4*((x)+w*(y*d));
      if (Math.pow((Math.pow(Math.abs(x-w*d/2),pow)+Math.pow(Math.abs(y-w*d/2),pow)),1/pow)<=256){
        pixels[idx] = 255;
        pixels[idx + 1] = 255;
        pixels[idx + 2] = 255;
        pixels[idx + 3] = 255;
      }else{
        pixels[idx] = 0;
        pixels[idx + 1] = 0;
        pixels[idx + 2] = 0;
        pixels[idx + 3] = 255;
      }
    }
  }

  updatePixels();
  text("d(x,y)^"+pow+" = |x|^"+pow+" + |y|^"+pow,10,w-10);

}
