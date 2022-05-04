function selectionSort(bar)
{
  const sortedColor = color(148, 179, 253);
  bar[i].colorBar(color(255,0,0));
  bar[mn].colorBar(color(0,255,0));

  if(!busy)
  {
    let a = bar[j].height;
    let b = bar[mn].height;

    if(a < b)
    {
      bar[mn].colorBar(color(100));
      mn = j;
    }
  }

  if (i < bar.length-1)
  {
    if(!busy)
    {
      j++;
    }
    if (j > bar.length-1)
    {
      // swapping will happe here

      if(!busy)
      {
        let temp = bar[i];
        bar[i] = bar[mn];
        bar[mn] = temp;
        busy = 1;
      }
      // swapping the x values
      if(busy)
      {
        if(count == 0)
        {
          dist = bar[i].x - bar[mn].x;
        }

        if(count < abs(dist)) // Animate the swapping of two Bars
        {
          let speed = 1

          if(dist >= 0)
          {
            bar[i].moveBar(bar[i].x-speed, ylevel);
            bar[mn].moveBar(bar[mn].x+speed, ylevel);
          }
          else
          {
            bar[i].moveBar(bar[i].x+speed, ylevel);
            bar[mn].moveBar(bar[mn].x-speed, ylevel);
          }
          count+=speed;
        }
        if(count >= abs(dist))
        {
          count = 0;
          busy = 0;
        }
      }

      if(!busy)
      {
        bar[mn].colorBar(color(100));
        bar[i].colorBar(sortedColor);
        j = i+1;
        i++;
        mn = i;
      }
    }

  } else
  {
    noLoop();
    for(let d = 0; d < bar.length; d++)
    {
      bar[d].colorBar(sortedColor);
    }

    selection = false;
    i = 0;
    j = 1;
    mn = i;
    busy = 0;
    count = 0;
    status = 0;
    dist = 0;
    console.log("finished");
  }
  disp();
}
