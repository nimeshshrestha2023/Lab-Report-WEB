// Write a JavaScript program that accept two integers and display the larger and smaller.
let num1 = parseInt(prompt("Input the first integer"));
let num2 = parseInt(prompt("Input the second integer"));

if (num1 > num2) {
    console.log("Larger: " + num1 + " | Smaller: " + num2);
} else if (num2 > num1) {
    console.log("Larger: " + num2 + " | Smaller: " + num1);
} else {
    console.log("Both numbers are equal: ");
}
