
function bubbleSort(bar)
{
  const sortedColor = color(148, 179, 253);

  let a = bar[j].height;
  let b = bar[j + 1].height;

  bar[j].colorBar(color(255));
  bar[j+1].colorBar(color(255));

  if (a > b)
  {
    busy = 1;
    if(busy)
    {
      let speed = 1;
      if(count == 0)
      {
        dist = abs(bar[j+1].x - bar[j].x);
        console.log(dist);
      }

      if(count < dist) // Animate the swapping of two Bars
      {
        bar[j].moveBar(bar[j].x+speed,  ylevel);
        bar[j+1].moveBar(bar[j+1].x-speed,  ylevel);
        count+=speed;
        disp();
      }

      if(count >= dist)
      {
        count = 0;
        busy = 0;
      }

    }
    if(!busy)
    {
      temp = bar[j];
      bar[j] = bar[j+1];
      bar[j+1] = temp;
    }
  }
  if(!busy)
  {
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
      busy = 0;
      console.log("finished");
    }
  }
  disp();
}
