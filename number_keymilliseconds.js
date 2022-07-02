/*
A digit-only keyboard contains all 10 digits from 0 to 9. They all exist in one line.
Given a string of 10 digits illustrating how the keys are positioned. To type a digit, you start from index zero to the index of the target digit.
It takes |a-b| milliseconds to move from index a to index b.

Write a function to calculate the number of milliseconds needed to type a number with one finger.

Example 1;
	input: digits = "0123456789", num = "210"
	output : 4

Example 2;
	input: digits = "8459761203", num = "5439"
	output : 17

Constraints : 
	digits.length == 10
	digits contains each digit [0-9] exactly once in some order
	1 <= num.length <= 10 square 4
	num[i] is digit
*/


function check_parenthesis(digits, num) {
    let milliseconds = 0;
    let indexs = [];
    for(let i=0; i < num.length ; i++) {
        indexs.push(digits.indexOf(num[i]));
        
        if(i==0) milliseconds = indexs[i];
        else {            
            milliseconds += Math.abs(indexs[i]-indexs[i-1]);
        }
    }  
    
    return milliseconds;
}
  
digits = "8459761203"; // input value
num = "5439";   

result = check_parenthesis(digits, num); 

document.getElementById('number_milliseconds').append("Digits : ", digits, " Num : ", num, " --- milliseconds : ", result);