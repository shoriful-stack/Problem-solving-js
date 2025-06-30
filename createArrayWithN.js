// 2.। একটা ফাংশন লিখুন যেখানে ইনপুট হিসাবে নিবে এন এবং আউটপুট হিসাবে ইন্টিজারের সাথে এন যুক্ত হয়ে একটা এরে আসবে।

// লজিক:
// একটি ফাঁকা array বানাবো।
// 0 থেকে n পর্যন্ত লুপ চালাবো।
// প্রতিটি সংখ্যাকে সেই array-তে push করব।
// শেষে array রিটার্ন করব।


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
