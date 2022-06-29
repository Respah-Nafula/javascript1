
1 // Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
// function Numbers()


for (var num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(num);
    }
}


// Write a JavaScript program to sum the multiples of 3 and 5 under 1000


var add = 0;
for (var addition = 0; addition < 1000; addition++)

    if (addition % 3 === 0 || addition % 5 === 0) {
        add += addition;
    }
console.log(add)





// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even


for (var i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i + " is an even number")
    }
    else {
        console.log(i + " is an odd number")

    }

}

// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array

let nums = [-2, 4, -5, 6, 0];
let largest = 0

for (var x = 0; x <=nums.length; x++) {
    if (nums[x] > largest) {
        largest = nums[x]
    }
}
console.log(x)


// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
let numbers = [10, 40]
let newNumbers = 0
for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > newNumbers) {
        newNumbers = numbers[i]
    }

}
console.log(newNumbers)



// //  Write a JavaScript program to find leap years from 2000 to 2022

for (var k = 2000; k < 2023; k++) {
    if (k % 4 === 0) {
        console.log(k + " is a leap year")
    } else {
        console.log(k + " is not a leap year")
    }

}










