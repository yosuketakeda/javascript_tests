/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.
*/

function check_parenthesis(str) {
  let encounters = {
    ')' : '(', 
    ']' : '[', 
    '}' : '{'
  }
  let buff = [];
  for(let i=0; i<str.length; i++) {    
    if(str[i] === '(' || str[i] === '[' || str[i] ==='{') {
      buff.push(str[i]);      
    } else if(buff.at(-1) === encounters[str[i]]){    
      // array.at() does not support IE & Opera Android
      // Instead can be used array[array.length-1], but at() is more fast.
      buff.pop(); // removing the last element of stack if encounter is correct.
    } else return false;
  }
  
  return buff.length? false: true;
}

inputVal = '(((())))[]{}(({{[]}}))'; // input value
result = check_parenthesis(inputVal); 

document.getElementById('valid_parenthesis').append(inputVal, " --- validatoin : ", result);