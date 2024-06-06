// ### Concatenate two string
/* 06/06/2024
Day 1
*/


function attempt1(s1,s2) {

    return s1 + s2
}


function attempt2(s1,s2) { 

    return s1 + "" + s2
}


function attempt3(s1,s2) {
 return s1 + " " + s2

}
// console.log(attempt3("hello", "world"))


// practice complete

// ### Incorrect Function to reverse a string
function reverseString(s) {
    let reversed = "";
    for (let i = 0; i < s.length; i++) {
        reversed = s[i] + reversed;
    }
    return reversed; // added this part
}

// Test the function
// console.log(reverseString("Hello"));  // Expected Output: "olleH"


//Testing it out

function reverseString2(s) {
    let reversed = "";
    for (let i = 0; i < s.length; i++) {
        reversed = s[i] + reversed;
    }
    return reversed; // added this part
}

// Test the function
// console.log(reverseString2("olleh"));  // Expected Output: "olleH"


// practice complete

// ### Incorrect Function to count the frequency of each character in a string
function characterFrequency(s) {
    let frequency = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    return frequency
}
// console.log(characterFrequency("hello"));  // Expected Output: { h: 1, e: 1, l: 2, o: 1 }


///new problem
// ### Incorrect Function to check if a string is a palindrome
function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--; // changed to right --
    }
    return true;
}

// Test the function
// console.log(isPalindrome("racecar"));  // Expected Output: true
// console.log(isPalindrome("hello"));    // Expected Output: false
