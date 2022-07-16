function mergeSort(arr , n) {
        var curr_size;
        var left_start;

        for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
            for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
                var mid = Math.min(left_start + curr_size - 1, n - 1);
                var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);
                mergeS(arr, left_start, mid, right_end);
            }
        }



        merge = false;
        status = 0;
    }

    function mergeS(arr , l , m , r) {
        var i, j, k;
        var n1 = m - l + 1;
        var n2 = r - m;

        var L = Array(n1).fill(0);
        var R = Array(n2).fill(0);

        for (i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        i = 0;
        j = 0;
        k = l;
        while (i < n1 && j < n2) {
            if (L[i].height <= R[j].height) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
