/*
Given an array A of integers and integer K, return the maximum S such that there exists i < j with A[i] + A[j] = S and S < K. If no such i, j exist satisfying this equation, return -1

Example 1;
    input: A = [34,23,1,24,75,33,54,8], K=60
    output: 58

    Explanation : 
    We can use 34 and 24 to sum 58 which is less than 60 and there's no pair with sum of 59. Therefore, the maximum sum is 58

Example 2;
    input: A = [10,20,30], K = 15
    output : -1

    Explanation : 
    In this case its not possible to get a pair sum less than 15

Constraints:
1<= A.length <=100
1<= A[i] <= 1000
1<= K <= 20005
*/


function maxSum_Inarray(A, K) {
    let sums = [];
    let result = 0;
    for(i=0 ; i<A.length-1 ; i++) {
        if( A[i] < K ) {
            for(j=i+1 ; j<A.length ; j++){
                if( A[i]+A[j] < K ){
                    sums.push(A[i]+A[j]);
                }
            }
        }
    }
    if(sums.length > 0) {
        result = sums.reduce((a, b)=>Math.max(a, b), 0);
    } else {        
        result = -1;
    }

    return result;
}
  
inputVal = [10,20,30]; // input value
K = 15;
result = maxSum_Inarray(inputVal, K); 

document.getElementById('maxSum_Inarray').append(inputVal, ' - Number :', K, " --- sum : ", result);

