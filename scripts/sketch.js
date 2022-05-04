let bar = [];
let canv;

let bubble;
let selection;
let insertion;

let status = 0;

function runAlgo()
{
  if(status === 0)
  {
    bubble = false;
    selection = false;
    insertion = false;

    // alert(document.getElementById('algo').value);
    let val = document.getElementById('algo').value;

    if(val === 'bubble')
    {
      bubble = true;
      i = 0;
      j = 0;
      k = 0;
      count = 0;
      dist = 0;
      status = 1;
      busy = 0;
    }
    if(val === 'insertion')
    {
      insertion = true;
      i = 1;
      j = i-1;
      key = bar[i]; // bar is a  global element
      pos = 0;
      count = 0;
      status = 1;
    }
    if(val === 'selection')
    {
      selection = true;
      i = 0;
      j = 1;
      mn = i;
      busy = 0;
      status = 1;
      count = 0;
      dist = 0;
    }
  }
}

function setup()
{
  canv = createCanvas(windowWidth/1.2, windowHeight/1.4);
  canv.parent("container_canvas");
  canv.position(100,100,"sticky");
  canv.background(226, 222, 169);

  ylevel = -10;
  for (let i = 0; i < 25; i++)
    {
      bar[i] = new Bar(i); // no of elements
      bar[i].createBar(20, random((height-50)));
      bar[i].moveBar(20+(i*30), ylevel);
      bar[i].colorBar(color(100));
   }
   frameRate(144);
}

let speedZero = 10; //-(1-10) +(11 - 50)
let sp = 1; // initially 1 is the speed of animation
let tmp = speedZero;

function draw()
{
  canv.background(226, 222, 169);

  if(mouseIsPressed)
  {
    sp = map(mouseX,0, width, 1, 50);
    tmp = speedZero;
    // console.log(sp);
  }
  if(floor(sp) >= speedZero)
  {
    for(let i = speedZero; i <= floor(sp)+1; i++)
    {
      canv.background(226, 222, 169);
      runSorting();
    }
  }
  else
  {
    if(floor(tmp) == floor(sp))
    {
      runSorting();
      tmp = speedZero;
    }
    else
    {
      tmp--;
    }
  }
  disp();
}

function runSorting()
{
  if(bubble === true)
  {
    bubbleSort(bar);
  }
  else if(selection === true)
  {
    selectionSort(bar);
  }
  else if(insertion === true)
  {
    insertionSort(bar);
  }
}

function createNewBars() // when the Draw Random Values Button is clicked this will be executed
{
  loop();
  if(status === 0)
  {
    //TODO : check if the button is clicked during an ongoing sorting process if yes then dont create new Bars /// DONE
    // bar = [];

    ylevel = -10;
    for (let i = 0; i < 25; i++)
    {
      bar[i] = new Bar(i); // no of elements
      bar[i].createBar(20, random((height-50+ylevel)));
      bar[i].moveBar(20+(i*30), ylevel);
      bar[i].colorBar(color(100));
    }
  }
}

function changeSize()
{
  canv.resize(windowWidth/1.2, windowHeight/1.4);
  createNewBars();
}

function disp()
{
  for(let k = 0; k < bar.length; k++)
  {
    bar[k].displayBar();
  }
}
