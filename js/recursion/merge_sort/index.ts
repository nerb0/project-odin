function mergeSort(array: number[]): number[] {
  merge(array, 0, array.length - 1);
  return array;
}

function merge(array: number[], start: number, end: number) {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);
    merge(array, start, middle);
    merge(array, middle + 1, end);
    sort(array, start, middle, end);
  }
}
function sort(array: number[], left: number, right: number, end: number) {
  const array1 = array.slice(left, right + 1);
  const array2 = array.slice(right + 1, end + 1);
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      array[left++] = array1[i++];
    } else {
      array[left++] = array2[j++];
    }
  }
  while (i < array1.length) {
    array[left++] = array1[i++];
  }
  while (j < array2.length) {
    array[left++] = array2[j++];
  }
}

const unsortedArr = [5, 4, 3, 2, 1];
console.log(mergeSort(unsortedArr));
