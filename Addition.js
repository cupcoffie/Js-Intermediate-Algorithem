//Addition

//Add all the values between 200 and 2700 (inclusively)
// that are divisible by 3 or 5, but not both 3 and 5.
// To solve this task you might want to use the modulus operator.

// pseudo code 
// 1- we have numbers between 200 and 2700.
// 2- for loop to count the numbers from 200 to 2700.
// 3- if statement to count if the number able to divide op 3 or 5 without rest.
// 4- print the result.


//code 

for(var i=200; i<=2700; i++){
    if((i % 3 === 0 || i % 5 === 0 ) ) {
            console.log(i);
    };
};


