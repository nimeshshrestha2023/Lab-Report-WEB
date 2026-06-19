// Write a JavaScript program that accept three integers and display the larger and smaller.
let num1 = parseInt(prompt("Input the first integer"));
let num2 = parseInt(prompt("Input the second integer"));
let num3 = parseInt(prompt("Input the third integer"));

let larger,smaller;

if(num1 > num2 && num1 > num3)
{
    larger = num1;
}else if(num2 > num1 && num2 > num3)
{
    larger = num2;
}else{
    larger = num3;
}

if(num1 < num2 && num1 < num3)
{
    smaller = num1;
}else if(num2 < num1 && num2 < num3)
{
    smaller = num2;
}else{
    smaller = num3;
}

console.log(`Largest:${larger} | Smallest:${smaller}`)
