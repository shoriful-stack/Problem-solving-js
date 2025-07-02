// CodeWars
// Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

function summation(num){
    let total = 0;
    for(let i = 1; i<= num; i++){
        total += i
    }
    return total
}
console.log(summation(5));

function summationWithTrick(num1){
    return (num1 * (num1 + 1) / 2);
}
console.log(summationWithTrick(3));