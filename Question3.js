// 3. DigitSumReplacement
// In one move you can replace a number by the sum of its digits. Find the minimum sum of the array after applying at most two moves.
// Task description
// There is an array A that consists of N integers. In one move you can select a number from A and replace it by the sum of its digits. One number can be selected multiple times. You can apply at most two moves. What is the minimum sum of the array you can achieve?
// Write a function:
// function solution(A);
// that, given an array A, returns the minimum sum of the array you can achieve after applying at most two moves.
// Examples:
// 1. Given A = [1, 10, 12, 3], you can apply the move on the second and third elements. Then A = [1, 1, 3, 3] and the function should return 8.
// 2. Given A = [2, 29, 3], you can apply the move twice on the second element. Then A = [2, 2, 3] and the function should return 7.
// 3. Given A = [100, 101, 102, 103], you can apply the move on the first and second elements. Then A = [1, 2, 102, 103] and the function should return 208.
// 4. Given A = [55], you can apply the move twice on the first element. Then A = [1] and the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..50,000];
// each element of array A is an integer within the range [1..10,000].


function solution(A) {
    // Helper function to sum the digits of a number
    function sumDigits(num) {
        let sum = 0;
        // Loop to extract and add each digit of the number
        while (num > 0) {
            sum += num % 10; // Add the last digit to sum
            num = Math.floor(num / 10); // Remove the last digit
        }
        return sum; // Return the sum of the digits
    }

    // Calculate the initial sum of all numbers in the array A
    let firstSum = A.reduce((acct, num) => acct + num, 0);

    // Array to store the trimming values
    let trimmings = [];

    // Loop through each number in the array A
    for (let num of A) {
        // Calculate the initial reduction of the number by subtracting the sum of its digits
        let initialReductions = num - sumDigits(num);
        // Push the initial reduction to the trimmings array
        trimmings.push(initialReductions);

        // Calculate the sum of the digits of the number
        let reduced = sumDigits(num);
        // Calculate the second reduction by subtracting the sum of its digits
        let secondReductions = reduced - sumDigits(reduced);
        // Push the second reduction to the trimmings array
        trimmings.push(secondReductions);
    }

    // Sort the trimmings array in descending order
    trimmings.sort((a, b) => b - a);

    // Variable to store the total trimming value
    let totalTrimming = 0;
    // If there are trimmings, add the largest value to totalTrimming
    if (trimmings.length > 0) {
        totalTrimming += trimmings[0];
    }
    // If there are more trimmings, add the second largest value to totalTrimming
    if (trimmings.length > 1) {
        totalTrimming += trimmings[1];
    }

    // Return the initial sum minus the total trimming value
    return firstSum - totalTrimming;
}
