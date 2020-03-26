//1.What is Boolean? Write down 3 different expression that results a Boolean type (i.e. 5 == 6)
//Boolean is a datatype that returns either of two values i.e. true or false. In JavaScript, boolean is used as a function to get the value of a variable, object, conditions, expressions etc. in terms of true or false.

//2.What is nested conditionals? Write a piece of code that uses nested conditionals
//-A nested if is an if statement that is the target of another if or else. Nested if statements means an if statement inside an if statement.

// let age = Number(prompt('Age ?'));
// if (age>=18) {
//     if (age<=22) {
//         console.log('La sinh vien');
//     }
//     else {
//         console.log('Da tot nghiep');
//     }
// }
// else {
//     console.log('Chua hoc dai hoc');
// }


//=============BTVN============


//1.'Write a program that asks user their height (cm) and weight (kg), and then calculate their BMI (Body Mass Index):
// 'BMI = mass (kg) / (height(m) x height(m) 
// Note: you must do the conversion from cm to m before calculation

// Then based on the BMI, tell them that they are:
// Severely underweight if BMI < 16
// Underweight if BMI is between 16 and 18.5
// Normal if BMI is between 18.5 and 25 
// Overweight if BMI is between 25 and 30
// Obese if BMI is more than 30'


// let m = Number(prompt('Can nang? (kg)'));
// let h = Number(prompt('Cheu cao? (cm)'))/100;
// let BMI = m/(h*h);
// console.log(BMI.toFixed(1));
// if (BMI<16) {
//     console.log('Severely underweight');
// }
// else if (BMI>=16 && BMI<18.5) {
//     console.log('Underweight');
// }
// else if (BMI>=18.5 && BMI<25) {c
//     onsole.log('Normal');
// }
// else if (BMI>=25 && BMI<30) {
//     console.log('Overweight');
// }
// else {
//     console.log('Obese')
// };

//2.Write a program that asks users enter a number and then calculates factorial of n: (1 * 2 * 3 *... *n)

// let i = 1;
// let n = Number(prompt('enter a number'));
// for (let y = 1;y <= n;y++) {i=i*y};
// console.log(`factorial of ${n} = ${i}`);
