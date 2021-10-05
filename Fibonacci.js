//For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers 
//that is created by adding the last two numbers in the series. 
//A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
// 0 1 1 2 3 5 8 13 21...


var x =[0,1]
var n = 1000000
 for(i=2; (x[i-1] + x[i-2]<n); i++){
     x.push(x[i-1] + x[i-2])
 }
 console.log(x)