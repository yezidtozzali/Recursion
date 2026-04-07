const merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const firstHalf = array.slice(0, Math.floor(array.length / 2));
  const secondHalf = array.slice(Math.floor(array.length / 2));

  let firstHalfDiv = mergeSort(firstHalf);
  let secondHalfDiv = mergeSort(secondHalf);

  return merge(firstHalfDiv, secondHalfDiv);
};

console.log(mergeSort([105, 79, 100, 110]));
