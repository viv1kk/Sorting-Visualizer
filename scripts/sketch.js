// const canvas = document.getElementById('container_canvas');
// ctx.resizeCanvas(500,300)

let canv;
let bar = [];

function setup()
{
  canv = createCanvas(windowWidth/1.2, windowHeight/1.2);
  canv.parent("container_canvas");
  canv.position(100,100,"sticky");


  for (let i = 0; i < 10; i++)
  {
    bar[i] = new Bar(i); // no of elements
    bar[i].createBar(50, random(height-50));
    bar[i].moveBar(50+(i*100),0);
    bar[i].colorBar(color(100));
   //values[i] = noise(i/100.0)*height;
 }

  frameRate(60);
}

function draw()
{
  canv.background(226, 222, 169);
  // bubbleSort(bar);
  selectionSort(bar);
  disp();

  // window.requestAnimationFrame(draw);
}


function disp()
{
  for(let k = 0; k < bar.length; k++)
  {
    bar[k].displayBar();
  }
}
