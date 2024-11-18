// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Divide the array in half
  let mid = Math.floor(arr.length / 2);

  // Recursively sort the left half
  // Recursively sort the right half
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // Merge the halves together and return
  return merge(left, right);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  let i = 0;
  let j = 0;
  // Create an empty return array
  let merged = [];

  // Point to the first value of each array
  // While there are still values in each array...
  while (arrA[i] || arrB[j]) {
    let num = arrA[i];
    let elem = arrB[j];
    // Compare the first values of each array
    if (num && elem === undefined) {
      merged.push(num);
      i++;
    } else if (elem && num === undefined) {
      merged.push(elem);
      j++;
    } else {
      if (num <= elem) {
        merged.push(num);
        i++;
      } else {
        merged.push(elem);
        j++;
      }

    }
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
  }
  // Return the return array
  return merged;
}

module.exports = [merge, mergeSort];
