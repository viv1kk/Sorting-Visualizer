let bar = [];
let canv;
let bubble;
let selection;
let insertion;
let quick;
let merge;
let no;
let piv;
let status = 0;
let valdraw = false;
let glock = 0;


//quickSort

let stack;
let tp;
let p;
let setV = 0
let busy1;

function runAlgo()
{
  if(status === 0)
  {
    valdraw = false;
    bubble = false;
    selection = false;
    insertion = false;
    quick = false;
    merge = false;
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
    if(val === 'quick')
    {
      i = 0;
      j = 0;
      quick = true;
      busy = 0;
      busy1 = 0;
      lb = 0;
      ub = 0;
      count = 0;
      dist = 0;
      pivot = 0;
      status = 1;
      lock  = 0;
    }

    if(val === 'merge')
    {
      // i = 0;
      // j = 0;
      // merge = true;
      // busy = 0;
      // busy1 = 0;
      // l = 0;
      // h = 0;
      // count = 0;
      // dist = 0;
      // piv = 0;
      // status = 1;
      // lock  = 0;
    }
    no = document.getElementById('no').value;
  }
}
// var s = 239
function setup()
{
  // console.log(no);
  canv = createCanvas(windowWidth/1.2, windowHeight/1.4);
  canv.parent("container_canvas");
  canv.position(100,100,"sticky");
  // canv.position(100,100);
  canv.background(226, 222, 169);

   frameRate(10);
}

let speedZero = 10; //-(1-10) +(11 - 50)
let sp = 1; // initially 1 is the speed of animation
let tmp = speedZero;

function draw()
{
  canv.background(226, 222, 169);

  if(valdraw === false)
  {
    createNewBars();
  }

  canvas.onmousedown = function()
  {
    sp = map(mouseX,0, width, 1, 50);
    tmp = speedZero;
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
  else if(quick === true)
  {
      quickSort(bar, 0, bar.length-1)
    // quickSort(bar, 0, bar.length-1, function()
    // {
    //   quick = false;
    //   status = 0;
    //   console.log("finished");
    // });

    for(let i = 0; i < bar.length; i++)
    {
      console.log(bar[i].height);
    }
  }
  else if(merge === true)
  {
     mergeSort(bar , bar.length)
     for(let i = 0; i < bar.length; i++)
     {
       console.log(bar[i].height);
     }
  }
}

function createNewBars() // when the Draw Random Values Button is clicked this will be executed
{
  loop();
  if(status === 0)
  {
    //TODO : check if the button is clicked during an ongoing sorting process if yes then dont create new Bars /// DONE
    bar = [];
    no = document.getElementById('no').value;
    ylevel = -10;
    for (let i = 0; i < no; i++)
    {
      bar[i] = new Bar(i); // no of elements
      bar[i].createBar(20, random((height-50+ylevel)));
      bar[i].moveBar(20+(i*30), ylevel);
      bar[i].colorBar(color(100));
    }
  }
  valdraw = true;
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
