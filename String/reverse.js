// ৩। একটা ফাংশন লিখুন যেখানে আউটপুট হিসাবে লিখা গুলো রিভার্স হবে।

// লজিক:
// ইনপুট স্ট্রিংটি ফাঁকা কিনা তা আগে চেক করবো।
// যদি ফাঁকা হয়, তাহলে খালি স্ট্রিং রিটার্ন করবো।
// যদি ফাঁকা না হয়, তাহলে:
// স্ট্রিংটিকে character array-তে ভেঙে ফেলবো: split('')
// এই array-কে উল্টে দিবো: reverse()
// আবার এই character array-কে string-এ পরিণত করবো: join('')
// এবং সেই রিভার্স string রিটার্ন করবো।

// Pseudo Code:
// Function ReverseString(Input: str)
//     If str is empty Then
//         Return empty string
//     End If

//     charArray = split str into characters
//     reversedArray = reverse charArray
//     reversedString = join reversedArray into string

//     Return reversedString
// End Function


function reverseString(string){
    return string.split("").reverse().join("");
}
console.log(reverseString("Habiba"));