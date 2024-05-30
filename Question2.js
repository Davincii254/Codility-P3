// 2. CommonLetter
// Given an array of strings, find a pair of strings that share the same letter at the same position.
// Task description
// You are given an array S consisting of N strings. Every string is of the same length M. Your task is to find a pair of strings in array S, such that there exists a position in which both of the strings have the same letter. Both the index in array S and the positions in the strings are numbered from zero.
// For example, given S = ["abc", "bca", "dbe"], string 0 ("abc") and string 2 ("dbe") have the same letter 'b' in position 1. On the other hand, for strings "abc" and "bca" there does not exist a position in which they have the same letter.
// Write a function:
// function solution(S);
// that, given a zero-indexed array S of N strings, returns an array describing a pair of strings from S which share a common letter at some index. If there is no such pair, the function should return an empty array. If there is more than one correct answer, the function can return any of them.
// The result should be represented as an array containing three integers. The first two integers are the indexes in S of the strings belonging to the pair. The third integer is the position of the common letter.
// For S = ["abc", "bca", "dbe"], as above, the result array should be represented as [0, 2, 1]. Another correct answer is [2, 0, 1], as the order of indexes of strings does not matter.
// Examples:
// 1. Given: S = ["abc", "bca", "dbe"], your function may return [0, 2, 1] as described above.
// 2. Given: S = ["zzzz", "ferz", "zdsr", "fgtd"], your function may return [0, 1, 3]. Both "zzzz" and "ferz" have 'z' in position 3. The function may also return [1, 3, 0], which would reflect strings "ferz", "fgtd" and letter 'f'.
// 3. Given A = ["gr", "sd", "rg"], your function should return []. There is no pair of strings that fulfils the criteria.
// 4. Given A = ["bdafg", "ceagi"], your function may return [0, 1, 2].
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..30,000];
// M is an integer within the range [1..2,000];
// each element of S consists only of lowercase English letters (a-z);
// N * M ≤ 30,000.


function solution(S) {
    // Create a map to store character positions
    const charPosMap = new Map();

    // Iterate through each string in the array S
    for (let x = 0; x < S.length; x++) {
        const string = S[x]; // Get the current string
        
        // Iterate through each character in the string
        for (let position = 0; position < string.length; position++) {
            const char = string[position]; // Get the current character
            // Create a unique key for the character at the specific position
            const key = `${char},${position}`;
            
            // Check if this character position has already been recorded
            if (charPosMap.has(key)) {
                // If it has been recorded, return the positions of the first and second occurrences
                return [charPosMap.get(key), x, position];
            } else {
                // If not recorded, store the current position in the map
                charPosMap.set(key, x);
            }
        }
    }

    // If no repeating character position is found, return an empty array
    return [];
}
