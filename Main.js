/**
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

var plusOne = function(digits) {
    let one = BigInt(digits.join(''));
  console.log(one)
//converts to string then into a BigInt

  
    let two = BigInt(one + BigInt(1));
  console.log(two)
//increments the BigInt by 1

  
    let newArr = [];
    newArr = (""+two).split("").map(Number);
    console.log(newArr)
//creates new array by converting BigInt to a string and splitting, then convert to Number and add to array

  
    return newArr;
};
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
