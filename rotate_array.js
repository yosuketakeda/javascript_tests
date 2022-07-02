/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1: 
    input : nums = [1,2,3,4,5,6,7], k=3
    Output : [5,6,7,1,2,3,4]

Explanation : 
    After rotating 1 steps to the right, array : [7,1,2,3,4,5,6]
    After rotating 2 steps to the right, array : [6,7,1,2,3,4,5]
    After rotating 3 steps to the right, array : [5,6,7,1,2,3,4]
*/
function rotate_array(arr, k) {
    var nums = [...arr];
    var last;
    
    for(i=0; i<k; i++) {
        var last = nums[nums.length-1];
        nums.splice(0, 0, last);  // insert last into index 0
        nums.pop();               // remove last element
    }

    return nums;
}

inputVal = [1,2,3,4,5,6,7]; // input value
k = 3;
result = rotate_array(inputVal, k); 

document.getElementById('rotate_array').append("array : ", inputVal, " - k : ", k, " --- array : ", result);
