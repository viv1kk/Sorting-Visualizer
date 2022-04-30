var i = 0;
var j = 0;

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
  // bar[j].colorBar(color(0));

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
    // disp();
  }
}
