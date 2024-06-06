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
console.log(reverseString2("olleh"));  // Expected Output: "olleH"
