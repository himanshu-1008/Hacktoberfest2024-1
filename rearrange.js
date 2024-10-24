// JavaScript program to rearrange an 
// array in minimum maximum form 

// Prints max at first position, min at 
// second position second max at third 
// position, second min at fourth 
// position and so on. 
function rearrange(arr, n) {
    // Initialize index of first minimum and first 
    // maximum element 
    let max_idx = n - 1, min_idx = 0;

    // Store maximum element of array 
    let max_elem = arr[n - 1] + 1;

    // Traverse array elements 
    for (let i = 0; i < n; i++) {
        // At even index : we have to put 
        // maximum element 
        if (i % 2 == 0) {
            arr[i] += ((arr[max_idx] % max_elem) *
                max_elem);
            max_idx--;
        }

        // At odd index : we have to put 
        // minimum element 
        else {
            arr[i] += ((arr[min_idx] % max_elem) *
                max_elem);
            min_idx++;
        }
    }

    // Array elements back to it's 
    // original form 
    for (let i = 0; i < n; i++)
        arr[i] = Math.floor(arr[i] / max_elem);
}

// Driver code
let arr = [1, 2, 3, 4, 5,
    6, 7, 8, 9];
let n = arr.length;

console.log("Original Array");
for (let i = 0; i < n; i++)
    console.log(arr[i]);

rearrange(arr, n);

console.log("Modified Array");
for (let i = 0; i < n; i++)
    console.log(arr[i]);
// This code is contributed by Surbhi Tyagi.
