// 2.। একটা ফাংশন লিখুন যেখানে ইনপুট হিসাবে নিবে এন এবং আউটপুট হিসাবে ইন্টিজারের সাথে এন যুক্ত হয়ে একটা এরে আসবে।

// Logic:
// 1. create an empty array
// 2. run loop from 0 to n
// 3. push every number into the array
// 4. return the array


// Pseudo Code:
// Function generateArray(Input: n)
//     Create empty list called result

//     For i from 0 to n inclusive
//         Add i to result list
//     End For

//     Return result
// End Function


function createArrayWithN(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    array.push(i);
  }
  return array;
}
console.log(createArrayWithN(5));
