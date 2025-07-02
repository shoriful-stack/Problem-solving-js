// Codewars
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num * num;
  }
  return total
}

console.log(squareSum([1, 2, 3, 4]));
