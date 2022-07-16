async function partition(arr, low, high)
    {
      let temp;
      let speed = 5;
      if(!busy && !busy1)
      {
        dist = abs(arr[low].x-arr[high].x)
        fill(255, 204, 0, 200)
        rect(arr[low].x-5, windowHeight/1.4, dist, -windowHeight/1.4)
        pivot = arr[high];



        arr[high].colorBar(color(255,0,0));
        // arr[i+1].colorBar(color(0,250,0));
        i = (low - 1);
        j = low
      }

      while(j <= high - 1) {
            if (arr[j].height <= pivot.height || busy) {
              if(!busy && !busy1)
              {
                i++;

                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;


                // dist = abs(arr[i].x-arr[j].x)
                // count = 0;
                busy = 1;
              }

              if(busy)
              {

                // if(count < dist)
                // {
                //   arr[i].moveBar(arr[i].x - speed, ylevel)
                //   arr[j].moveBar(arr[j].x + speed, ylevel)
                //   count += speed;
                // }
                //
                // if(count >= dist)
                // {
                //   dist = 0;
                //   count = 0;
                //   busy = 0;
                // }

                temp = arr[i].x;
                arr[i].x = arr[j].x;
                arr[j].x = temp;
                busy = 0;
              }
            }
            if(!busy && !busy1)
            {
              j++;
            }
        }

        if(arr[i+1] === arr[high])
        {
          arr[i+1].colorBar(color(255,0,255))
        }
        else {
          arr[i+1].colorBar(color(0,0,255))
        }
        await sleep(1500).then(()=>loop());

        if(!busy && !busy1)
        {
          temp = arr[i + 1];
          arr[i + 1] = arr[high];
          arr[high] = temp;

          // dist = abs(arr[i+1].x-arr[high].x)
          // count = 0;
          // arr[i+1].colorBar(color(0,200,0));
          busy1 = 1;
        }

        if(!busy && busy1)
        {
          // while(count < dist)
          // {
          //   arr[i+1].moveBar(arr[i+1].x - speed, ylevel)
          //   arr[high].moveBar(arr[high].x + speed, ylevel)
          //   count += speed;
          // }
          //
          // if(count >= dist)
          // {
          //   dist = 0;
          //   count = 0;
          //   busy1 = 0;
          // }


          temp = arr[i + 1].x;
          arr[i + 1].x = arr[high].x;
          arr[high].x = temp;
          busy1 = 0;
        }


        // arr[high].colorBar(color(100));
        // arr[i+1].colorBar(color(100));
        await sleep(1500).then(()=>loop());
        return i + 1;
    }

  async function quickSort(arr, l, h)
    {
      if(!lock)
      {
        lb = l
        ub = h
        stack = new Array(h - l + 1);
        stack.fill(0);

        tp = -1;

        stack[++tp] = l;
        stack[++tp] = h;

        lock = 1;
      }


        if (tp >= 0) {

          if(!busy && !busy1)
          {
            h = stack[tp--];
            l = stack[tp--];

          }


            for(let lj = l; lj <=h; lj++)
            {
              arr[lj].colorBar(color(0,200,0))
            }

            p = await partition(arr, l, h);

            for(let lj = l; lj <=h; lj++)
            {
              if(lj != p)
              {
                arr[lj].colorBar(color(100))
              }
              else {
                arr[lj].colorBar(color(148, 179, 253))
              }
            }


            if(!busy && !busy1)
            {
              if (p - 1 > l) {
                stack[++tp] = l;
                stack[++tp] = p - 1;
              }

              if (p + 1 < h) {
                stack[++tp] = p + 1;
                stack[++tp] = h;
              }
            }


        }
        if(tp < 0) {
          for(let lj = lb; lj <=ub; lj++)
          {
            arr[lj].colorBar(color(148, 179, 253))
          }
          quick = false;
          status = 0;
          lock = 0;
          return;
        }
    }


    function sleep(ms) {
      return new Promise(resolve => {setTimeout(resolve, ms), noLoop()});
    }
