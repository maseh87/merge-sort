//have a pointer at the left index and the right index
//compare the two
//stop the loop when both left and right index is at the end
//if the left is bigger than right put value in a new array
//add 1 to the relevant counter
var mergeArrays = function(left, right) {
  console.log('left ' + left);
  console.log('right ' + right);
  var leftIndex = 0,
  rightIndex = 0,
  result = [];
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  };
  var sorted = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  return sorted;
};

//function that takes an array and splits it in half
//pass each half into mergeArrays
//and return the value of mergeArrays
//if the length of array is 0 or 1 do not sort

var mergeSort = function(array) {
  console.log('array in mergeSort ' + array);
  if(array.length < 2) {
    return array;
  }
  var half = Math.floor(array.length / 2),
      left = array.slice(0, half),
      right = array.slice(half);
  return mergeArrays(mergeSort(left), mergeSort(right));
};

var x = [4,6,3,6,5,45,8,653,2,6,7,5,9];
console.log(mergeSort(x));



