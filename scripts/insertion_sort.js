function insertionSort(bar)
{
  const sortedColor = color(148, 179, 253);

  if(j >= 0 && key.height < bar[j].height)
  {
    let speed = 1;
    if(count == 0)
    {
      dist = abs(bar[j+1].x - bar[j].x);
      bar[j+1].colorBar(color(255,0,0));
      bar[j].colorBar(color(0,255,0));
      busy = 1;
    }

    if(count < dist) // Animate the swapping of two Bars
    {
      bar[j+1].moveBar(bar[j+1].x-speed, ylevel);
      bar[j].moveBar(bar[j].x+speed,  ylevel);
      count+=speed;
    }
    console.log(dist)

    if(count >= dist)
    {
      count = 0;
      busy = 0;
    }

    if(!busy)
    {
      bar[j+1].colorBar(color(100));
      temp = bar[j];
      bar[j] = bar[j+1];
      bar[j+1] = temp;
      j--;
    }
  }
  else
  {
    if(i <= bar.length && !busy)
    {
      console.log("else")
      key = bar[i];
      j = i-1;
      if(i < bar.length)
      {
        for(let k = 0; k < i; k++)
        {
          bar[k].colorBar(color(100));
        }
        bar[j+1] = key;
      }
      i++;
    }

    if(i > bar.length)
    {
      for(let d = 0; d < bar.length; d++)
      {
        bar[d].colorBar(sortedColor);
      }

      noLoop()
      insertion = false;

      i = 1;
      j = i-1;
      key = bar[i].height; // bar is a  global element
      pos = 0;
      count = 0;
      busy = 0;
      status = 0;
      console.log("finished");
    }
  }
  disp();
}
