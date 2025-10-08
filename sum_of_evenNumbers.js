"use strict";

// Function to calculate sum of even numbers
function sumOfEvens(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

// Example input
let numbers = [1, 2, 3, 4, 5, 6];

// Call the function
console.log("Array:", numbers);
console.log("Sum of even numbers:", sumOfEvens(numbers));
