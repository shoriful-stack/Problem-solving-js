// Codewars

// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] =>
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20

function positiveSum(array) {
  let total = 0;
  for (const item of array) {
    if (item > 0) {
      total += item;
    }
  }
  return total;
}
console.log(positiveSum([1, -4, 7, 12]));

