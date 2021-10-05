//Shift the Values

// Given any array X, for example [2,1,6,4,-7],
//  create an algorithm that shifts each number by one to the front.
//  When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// pseudo code 
// 1- we have array.
// 2- for loop to count the elements of the array.
// 3- shifts each number by one to the front buy using push.
// 4- print the result.

 //code 
//  var x= [2,1,6,4,-7],
//   for (let i = 0; i < x.length; i++) {
//       console. log(x);
//   }

var x = [2,1,6,4,-7];
var y = []
for(var i=x.length-1; i>=0; i--){
    y.push(x[i])
}
console.log(y)

