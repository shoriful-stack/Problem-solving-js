// ৪। একটা ফাংশন লিখুন যেখানে ইনপুট হিসাবে নিবে ইন্টিজার আউটপুট আসবে আসবে শুধুমাত্র জোড় সংখ্যা। 

function evenNumber(array){
    return array.filter(num => num % 2 === 0);
}

console.log(evenNumber([1, 3, 2, 4, 5]))

// ৪। একটা ফাংশন লিখুন যেখানে ইনপুট হিসাবে নিবে ইন্টিজার আউটপুট আসবে আসবে শুধুমাত্র bজোড় সংখ্যা।

function oddNumber(array){
    return array.filter(num => num % 2 === 1);
}

console.log(oddNumber([1, 2,3,4,5,6]))



