
function bubbleSort(bar)
{
  const sortedColor = color(148, 179, 253);

  let a = bar[j].height;
  let b = bar[j + 1].height;

  bar[j].colorBar(color(255));
  bar[j+1].colorBar(color(255));

  if (a > b)
  {
    let speed = 1;
    if(count == 0)
    {
      diff = (bar[j+1].x - bar[j].x);
      console.log(diff);
    }

    if(count < diff) // Animate the swapping of two Bars
    {
      bar[j].moveBar(bar[j].x+speed,  ylevel);
      bar[j+1].moveBar(bar[j+1].x-speed,  ylevel);
      count+=speed;
      // disp();
    }

    // Directly swapping the bars

    // let temp = bar[j].x;
    // bar[j].x = bar[j+1].x;
    // bar[j+1].x = temp;


    // swapping the object
    // temp = bar[j];
    // bar[j] = bar[j+1];
    // bar[j+1] = temp;

    // console.log(temp);
  }
  if(count == 0)
  {
    // count = 0;
    if (i < bar.length)
    {
      bar[j].colorBar(color(100));
      bar[j+1].colorBar(color(100));
      j++;
      if (j >= bar.length-i-1)
      {
        bar[j].colorBar(sortedColor);
        j = 0;
        i++;
      }

    } else
    {
      for(let d = 0; d < bar.length; d++)
      {
        bar[d].colorBar(sortedColor);
      }
      noLoop();
      i = 0;
      j = 0;
      k = 0;
      count = 0;
      dist = 0;
      status = 0;
      bubble = false;
      console.log("finished");
    }
  }
  else if(count >= diff)
  {
    count = 0;
    temp = bar[j];
    bar[j] = bar[j+1];
    bar[j+1] = temp;

    if (i < bar.length)
    {
      bar[j].colorBar(color(100));
      bar[j+1].colorBar(color(100));
      j++;
      if (j >= bar.length-i-1)
      {
        bar[j].colorBar(sortedColor); // sorted part is green
        j = 0;
        i++;
      }

    } else
    {
      for(let d = 0; d < bar.length; d++)
      {
        bar[d].colorBar(sortedColor);
      }
      noLoop();
      i = 0;
      j = 0;
      k = 0;
      count = 0;
      dist = 0;
      status = 0;
      bubble = false;
      console.log("finished");
    }
  }
  disp();
}
