function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  const array1 = [1, 3, 5];
  const array2 = [2, 4, 6];
  const merged = mergeArrays(array1, array2);
  
  console.log(merged); // Output: [1, 3, 5, 2, 4, 6]
  