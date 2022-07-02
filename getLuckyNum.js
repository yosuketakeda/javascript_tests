/*
There is an array of digits. If there is a duplicate number that the repeat count is the same as its value, we call it a Lucky number. There can be several Lucky numbers in an array. Get a maximum Lucky number in an array, if no lucky number in array, return -1.

Example 1;
    [2, 1, 2, 3, 3, 3]
    output : 3

Example 2;
    [2, 2, 2, 3, 3]
    output: -1
    Explanation : 2 is a repeated number, but the repeat count is different from value (2). Same in 3.

*/


function getLuckyNum(arr) {
    var buff = {};
    // High Order Function
    // if inputVal = [2, 1, 2, 5, 7, 5, 6, 3, 2, 1, 3, 3] --> buff = {1: 2, 2: 3, 3: 3, 5: 2, 6: 1, 7: 1}
    arr.forEach(function (x) { buff[x] = (buff[x] || 0) + 1 }); 

    var luckyNum = -1;
    
    Object.entries(buff).forEach((ele)=>{
        if(ele[0] == ele[1]) {
            luckyNum = ele[1];
        }   
    });
    
    return luckyNum;
}

inputVal =  [2, 1, 2, 3, 3, 3]; // input value
result = getLuckyNum(inputVal); 

document.getElementById('luckyNumber').append(inputVal, " --- Lucky Number : ", result);