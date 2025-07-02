// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

function removeChar(string){
    if(string.length <= 2){
        return "";
    }
    return string.slice(1, -1);
}
console.log(removeChar("object"));