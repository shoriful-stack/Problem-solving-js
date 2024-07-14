// ১।  একটা ফাংশন লিখুন যেখানে ইনপুট হিসাবে যাই গ্রহণ করুক আউটপুট আসবে লেটারের প্রথম অক্ষর বড় হাতের মানে (Capitalize)

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("sazid"));

// 2.। একটা ফাংশন লিখুন যেখানে ইনপুট হিসাবে নিবে এন এবং আউটপুট হিসাবে ইন্টিজারের সাথে এন যুক্ত হয়ে একটা এরে আসবে।

function createArrayWithN(n) {
    let array = [];
    for(let i = 0; i < n; i++){
        array.push(i);
    }
    return array
}
console.log(createArrayWithN(5))

// ৩। একটা ফাংশন লিখুন যেখানে আউটপুট হিসাবে লিখা গুলো রিভার্স হবে।

function reverseString(string){
    return string.split("").reverse().join("");
}
console.log(reverseString("Habiba"));

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



