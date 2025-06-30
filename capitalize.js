// ১।  একটা ফাংশন লিখুন যেখানে ইনপুট হিসাবে যাই গ্রহণ করুক আউটপুট আসবে লেটারের প্রথম অক্ষর বড় হাতের মানে (Capitalize)

//  লজিক:
// প্রথমে চেক করবো ইনপুটটি ফাঁকা কিনা। যদি ফাঁকা হয়, তাহলে খালি string রিটার্ন করবো।
// যদি না হয়:
// প্রথম অক্ষরটি বের করবো: str.charAt(0)
// এটি বড় হাতের করবো: .toUpperCase()
// এরপর বাকি অংশটুকু নেবো: str.slice(1)
// প্রথম অক্ষর (বড় হাতের) + বাকি অংশ একসাথে জুড়ে রিটার্ন করবো।

// Pseudo Code:
// Function CapitalizeFirstLetter(Input: str)
//     If str is empty Then
//         Return empty string
//     End If

//     firstChar = first character of str
//     capitalFirstChar = convert firstChar to uppercase

//     remainingPart = substring of str from index 1 to end

//     result = capitalFirstChar + remainingPart

//     Return result
// End Function


function capitalizeFirstLetter(string){
    if(!string) {
        return "";
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("habii"));