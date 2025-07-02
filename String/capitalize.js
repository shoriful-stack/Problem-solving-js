// ১।  একটা ফাংশন লিখুন যেখানে ইনপুট হিসাবে যাই গ্রহণ করুক আউটপুট আসবে লেটারের প্রথম অক্ষর বড় হাতের মানে (Capitalize)

// Logic:
// 1. check if input is empty..then return the empty string. 
// 2. take the first letter: str.charAt(0)
// 3. convert the first letter into uppercase: .toUpperCase()
// 4. then take the rest of the word: str.slice(1)
// 4. then join the two portion and return

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