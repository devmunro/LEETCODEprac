/*3146. Permutation Difference between Two Strings
Easy
Topics
Companies
Hint
You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

Return the permutation difference between s and t.*/

//### Question ###
var findPermutationDifference = function (s, t) {};

//###answer###

var findPermutationDifference = function (s, t) {
  let sumTotal = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        sumTotal += Math.abs(i - j);
        console.log(sumTotal);
      }
    }
  }
};
