// const canvas = document.getElementById('container_canvas');
// ctx.resizeCanvas(500,300)

let canv;
let bar = [];

function setup()
{
  canv = createCanvas(windowWidth/1.2, windowHeight/1.2);
  canv.parent("container_canvas");
  canv.position(100,100,"sticky");


  for (let i = 0; i < 8; i++)
  {
    bar[i] = new Bar(i); // no of elements
    bar[i].createBar(50, random(height-50));
    bar[i].moveBar(50+(i*100),0);
    bar[i].colorBar(color(0));
   //values[i] = noise(i/100.0)*height;
 }

  frameRate(5);
}

var i = 0;
var j = 0;

function draw()
{
  canv.background(226, 222, 169);
  bubbleSort(bar);

  for(let k = 0; k < bar.length; k++)
  {
    bar[k].displayBar();
    console.log(bar[k]);
  }
  // window.requestAnimationFrame(draw);
}


function bubbleSort(bar)
{
  let a = bar[j].height;
  let b = bar[j + 1].height;

  if (a > b)
  {
    // swapping the object
    let temp = bar[j];
    bar[j] = bar[j+1];
    bar[j+1] = temp;

    // swapping the x values
    temp = bar[j].x;
    bar[j].x = bar[j+1].x;
    bar[j+1].x = temp;
    // console.log(temp);
  }

  if (i < bar.length)
  {
    j++;
    if (j >= bar.length-i-1)
    {
      j = 0;
      i++;
    }
  } else
  {
    noLoop();
    console.log("finished");
    for(let k = 0; k < bar.length; k++)
    {
      bar[k].displayBar();
      console.log(bar[k].height);
    }
  }
}
