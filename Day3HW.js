// // Using the remainder % operator, write a for loop that iterates between 0 and 10 and prints all 
// // even numbers.

// for(let i = 1; i <= 10; i++){
//     if(i%2 === 0) {
//         console.log(i)
//     }
// }

// // Write an if/else statement for the following requirements:

// // If student gets 80 or higher: console log You did a good job
// // If students get 70 or above: console log Keep trying
// // If students get 60 or above: console log ehhhh
// // If students get 55 or above: console log Not to good
// // Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

let grade = 0;

if(grade >= 80 ){
    console.log("Your score is " + grade + ". You did a great job.")
}
else if(grade >= 70 ){
    console.log("Your score is " + grade + ". Keep trying.")
}
else if(grade >= 60 ){
    console.log("Your score is " + grade + ". Ehhh")
}
else if(grade >= 55 ){
    console.log("Your score is " + grade + ". Not to good.")
}
else if(grade < 55){
    console.log("Your score is " + grade + ". Bad grade but you'll get em next time.")
}





// // //Write a for loop for the given output: 10, 30, 50, 70, 90 20, 40, 60, 80, 100
// let num = 10;
// if(i % 2 === 1) {
//     for(let i = 1; i <= 10; i++) {
//         num += 20
//     }
// }
// else {
//     num += 10
// }

// // Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" 
// // instead of the number and for the multiples of '5' print "Buzz". If can be multiplied by 3&5 console 
// // log 'FizzBuzz'


// for(let i = 1; i <= 100; i++) {
//     if(i%3 === 0) {
//         if(i%5 == 0) {
//             console.log("FizzBuzz")
//         }
//         else{
//             console.log("Fizz")
//         }
//     }
//     else if(i%5 === 0) {
//         console.log("Buzz")
//     }
//     else { 
//         console.log(i)
//     }
// }



// // Day 3 class exercises

// // Declare a variable ‘num’
// // Write a statement that checks if an ‘num’ is positive or negative

// let anyNum = 6
// if(anyNum <= 0) {
//     console.log("The num is negative.")
// }
// else if(anyNum === 0) {
//     console.log("The is neither positive nor negative.")
// }
// else {
//     console.log("The number is negative.")
// }

// // You are tasked with setting up the security for a web site that only grants users over the age
//  // of 18+ access to the site. Write a conditional that gives users who are 18+ access and logs access 
//  // denied for users who do not meet the given condition.

// let age = 17;
// if(age >= 18) {
//     console.log("Access Granted")
// }
// else {
//     console.log("Access Denied")
// }

// // Write a nested if/else statement
// // Declare a variable ‘num’
// // Add an if/else statement that checks if ‘num’ is positive & greater than 100
// // Add another statement that checks if ‘num’ is positive but less than 100
// // Add an the final statement to check if ‘num’ is negative

// let num1 = 10
// if(num > 0) {
//     if(num > 100){
//         console.log("The number is positive and greater than 100.")
//     }
//     else {
//         console.log("The number is positive and less than 100")
//     }
// }
// else {
//     console.log("The number is negative.")
// }

// // What is your letter grade?

// // Write an if/else statement for the following requirements:

// // If student gets 90 or higher: console log A
// // If students get 80 or above: console log B
// // If students get 70 or above: console log C
// // If students get 55 or above: console log D
// // Any grade lower than 55 is F

// let score = 10
// if(score >= 90){
//     console.log("A")
// }
// else if(score >= 80){
//     console.log("B")
// }
// else if(score >= 70){
//     console.log("C")
// }
// else if(score >= 55){
//     console.log("D")
// }
// else {
//     console.log("F")
// }


// // For loop structures
// // Write a for loop that counts down from 10 to 1.

// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }

// // Write a for loop for the given output: 1, 3, 5, 7, 9 2, 4, 6, 8, 10

// for(let i = 1; i <= 10; i += 2){
//     console.log(i)
// }

// // create a loop that outputs multiples of 3 starting at 6 ending at 60.
// {
// for(i =6; i <= 60; i++) {
//     if(i%3 === 0) {
//         console.log(i)
//     }
// }

// // Write a for loop for the given output:    #
//                                         //   ##
//                                         //   ###
//                                         //   ####
//                                         //   #####
//                                         //   ######
//                                         //   #######

// let string = "#"
// console.log(string)
// for(i = 1; i <= 6; i++) {
//     string += string
//     console.log(string)
// }

// // Using the remainder % operator, write a for loop that iterates between 0 and 10 and prints all even
// // numbers.

// for(let j = 0; j < 10; j++ ) {
//     if(j % 2 == 0){
//         console.log(i)
//     }
// }

// Write a for loop that iterates from 1 - 20. Prints “prime” for all prime numbers, “even” for 
// all even numbers, and “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd

// for(num2 = 1; num2 <= 20; num2++) {
//     if(num2 % 2 === 1) {
//         if(isPrime) {
//             console.log("Prime")
//         }
//         else {
//             console.log("Odd")
//         }
//     }
//     else {
//         console.log("Even")
//     }
// }

