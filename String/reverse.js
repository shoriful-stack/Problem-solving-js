// Codewars
// ৩। একটা ফাংশন লিখুন যেখানে আউটপুট হিসাবে লিখা গুলো রিভার্স হবে।

// Logic:
// 1. check if input is empty..then return the empty string. 
// 2. split the string and create an array: split('')
// 3. then reverse the array: reverse()
// 4. again join the reversed array: join('')
// 5. return the reversed array

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
    if(!string){
        return "";
    }
    return string.split("").reverse().join("");
}
console.log(reverseString("Habiba"));