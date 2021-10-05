// FizzBuzz

// Create an algorithm that inserts the numbers from 1 to 135 into an array,
//  while replacing the values that are divisible by 3 with the word "Fizz",
//   the numbers that are divisible by 5 with the word "Buzz", 
//   and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
//    Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]

var x = [];
for(var i=1; i<=135; i++){
    x.push(i);
    if(x[i-1] % 15 === 0){
        x[i-1] = "FizzBuzz"
    }
    if(x[i-1] % 3 === 0){
        x[i-1] = "Fizz"
    }
    if(x[i-1] % 5 === 0){
        x[i-1] = "Buzz"
    }
}
console.log(x)