var i = 0;
var j = 1;
var mn = i;

function selectionSort(bar)
{
  let a = bar[j].height;
  let b = bar[mn].height;
  if(a < b)
  {
    mn = j;
  }

  if (i < bar.length-1)
  {
    j++;
    if (j >= bar.length-1)
    {
      // swapping will happe here
      let temp = bar[i];
      bar[i] = bar[mn];
      bar[mn] = temp;

      // swapping the x values
      temp = bar[i].x;
      bar[i].x = bar[mn].x;
      bar[mn].x = temp;

      j = i+1;
      i++;
      mn = i;
    }

  } else
  {
    noLoop();
    console.log("finished");
    // disp();
  }
}
