// My Soution

function mergeSortedArrays(arr1, arr2) {
  let i = 0,
    j = 0;
  const mergedArray = [];
  for (i = 0, j = 0; i < arr1.length, j < arr2.length; ) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  return mergedArray;
}

//ZTM Solution

const mergeSortedArrays2 = (arr1, arr2) => {
  const mergedArray2 = [];
  let array1item = arr1[0];
  let array2item = arr2[0];
  let i = 1,
    j = 1;
  while (array1item || array2item) {
    if (!array2item || array1item <= array2item) {
      mergedArray2.push(array1item);
      array1item = arr1[i++];
    } else {
      mergedArray2.push(array2item);
      array2item = arr2[j++];
    }
  }
  return mergedArray2;
};



//ZTM Solution Cleanup Approach

const mergeSortedArrays3 = (arr1, arr2) => {
  const mergedArray2 = [];
  let array1item = arr1[0];
  let array2item = arr2[0];
  let i = 1,
    j = 1;
  while (array1item || array2item) {
    if (shouldPush(array1item, array2item)) {
      mergedArray2.push(array1item);
      array1item = arr1[i++];
    } else {
      mergedArray2.push(array2item);
      array2item = arr2[j++];
    }
  }
  return mergedArray2;
};

const shouldPush = (array1ItemValue, array2ItemValue) =>
  !array2ItemValue || array1ItemValue < array2ItemValue;

  console.log(mergeSortedArrays3([1, 2, 3, 7, 9], [2, 4, 6, 10]));
