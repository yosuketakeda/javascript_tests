/*
You are keeping score for a baseball game with strange rules.
The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.
At the beginning of the game, you start with an empty record.
You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following.

0. An integer 'x' - Record a new score of 'x'.
0. '+' - Record a new score that is the sum of the previous two scores. Its guaranteed there will always be two previous scores.

0. 'D' - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.

0. 'C' - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.

Return the sum of all the scores on the record

Example 1;

Input: ops = ['5', '2', 'C', 'D', '+']
Output : 30
Explanation :
'5' - Add 5 to the record, record is now [5]
'2' - Add 2 to the record, record is now [5, 2].
'C' - Invalidate and remove the previous score, record is now [5].
'D' - Add 2 * 5 = 10 to the record, record is now [5, 10]
'+' - Add 5 + 10 = 15 to the record, record is now [5, 10, 15]

Total 5 + 10 + 15 = 30


Example 2;

Input: ops = ['5', '-2', '4', 'C', 'D', '9', '+', '+']
output : 27

5 - record[5]
-2 - record[5, -2]
4 - [5, -2, 4]
C - [5, -2]
D - [5, -2, -4]
9 - [5, -2,-4, 9]
+ - add -4 + 9 = 5 -> [5, -2,-4, 9, 5]
+ - [5, -2,-4, 9, 5, 14]

total 27

Example 3;
Input : ops = ['1']
output : 1

Constraints : 
- 1<=ops.length<=1000
- ops[i] is 'C', 'D', '+', or a string representing an integer in the range [-3 *104, 3*104]
- For operation '+', there will always be at least two previous scores on the record.
- For operations 'C' and 'D', there will always be at least on previous score on the record.
*/

function baseball_score(arr) {
    let record = [];
    for(let i=0; i<arr.length; i++) {
        if(!isNaN(arr[i])){            
            record.push(parseInt(arr[i]));
        } else {            
            let op = arr[i].toLowerCase();            
            switch(op) {
                case 'c':
                    record.pop();                    
                    break;
                case 'd':
                    record.push(parseInt(record.at(-1))*2);
                    break;
                case '+':
                    let rt1 = record.at(-1);
                    let rt2 = record.at(-2);
                    record.push(parseInt(rt1)+parseInt(rt2));                    
                break;
            }
        }
    }
    
    return record.reduce((a, b) => a + b, 0);
}
  
inputVal = ['5', '2', 'C', 'D', '+']; // input value
result = baseball_score(inputVal); 

document.getElementById('baseball_score').append(inputVal, " --- score : ", result);