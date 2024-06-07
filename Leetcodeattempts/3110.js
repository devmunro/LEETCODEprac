//#### QUESTION ####

var scoreOfString = function(s) {
    let charCodeTotal = 0

    for(let i = 0; i < (s.length-1); i++) {
        console.log(s.length)
        let charCode = s.charCodeAt(i) - s.charCodeAt(i+1);
        console.log(charCode)
        charCodeTotal += charCode
    }
    return charCodeTotal
};

//#### WRONG ANSWER ####
var scoreOfString = function(s) {
    let charCodeTotal = 0

    for(let i = 0; i < (s.length-1); i++) {
        console.log(s.length)
        let charCode = s.charCodeAt(i) - s.charCodeAt(i+1);
        console.log(charCode)
        charCodeTotal += charCode
    }
    return charCodeTotal
};