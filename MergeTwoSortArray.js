


function merge(arr1, arr2, n, m) {

    //Declare a 3rd array and 2 pointers:
    let arr3 = new Array(n + m);
    let left = 0;
    let right = 0;

    let index = 0;

    //Insert the elements from the 2 arrays into the 3rd array using left and right
    // pointers:

    while (left < n && right < m) {
        if (arr1[left] <= arr2[right]) {
            arr3[index] = arr1[left];
            left++, index++;
        }
        else {
            arr3[index] = arr2[right];
            right++, index++;
        }
    }

    // If right pointer reaches the end
    while (left < n) {
        arr3[index++] = arr1[left++];
    }

    // If left pointer reaches the end
    while (right < m) {
        arr3[index++] = arr2[right++];
    }

    // Fill back the elements from arr3[] to arr1[] and arr2[]
    for (let i = 0; i < n + m; i++) {
        if (i < n) arr1[i] = arr3[i];
        else arr2[i - n] = arr3[i];
    }
}

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6,8];
let n = 4, m = 4;
merge(arr1, arr2, n, m);
console.log("The merged arrays are: ");
console.log("arr1[] = " + arr1.join(" "));
console.log("arr2[] = " + arr2.join(" "));

