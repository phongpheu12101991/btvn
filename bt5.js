//1.Variable swap

//destructuring assignment
// let a = 1;
// let b = 2;
// console.log(a,b);
// [a,b] = [b,a];
// console.log(a,b);
//using a temporary variable
// let a = 1;
// let b = 2;
// let c = a;
// a = b;
// b = c;
// console.log(a,b);

//2.Split String into Array

// let a = 'Hello beauty there';
// let newa = a.split(' ');
// console.log(newa);

//3.
// let a = [1,2,3,6,8,'ss','ds'];
// console.log(...a);

//4.Write a script to simulate a clothes shop, asking and performing certain tasks from users

// let shop = ['The current items are:','Jeans','T-Shirt','Socks'];
// let shopr = [shop[0]];
// while (true)
// {let ui = prompt('Hi there, welcome to shop admin chanel, what do you want (C,R,U,D)?').toUpperCase();

// if (ui == 'R') {
//     for (let a = 1;
//     a <= shop.length-1;
//     a++) {shopr[a] = a+'. '+shop[a];
//     }
//     for (let i = 0;
//         i <= shop.length - 1;
//         i++) {console.log(shopr[i])
//         }
// }
// else if (ui == 'C') {
//     let uic = prompt('Enter the name of new item');
//     shop.push(uic);
//     alert('Done');
// }
// else if (ui == 'U') {
//     let uiu = Number(prompt('Enter the position you want to update'));
//     if (uiu >= 0 && uiu <= shop.length-1 && Math.floor(uiu) == uiu) {
//     let uiu2 = prompt('Enter the new name');
//     shop[uiu] = uiu2;
//     alert('Done');
// }
//     else {alert('The position you entered does not exist')}
// }
// else if (ui == 'D') {
//     let uid = Number(prompt('Enter the position you want to delete'));
//     if (uid >= 0 && uid <= shop.length-1 && Math.floor(uid) == uid) {
//     shop.splice(uid,1);
//     alert('Done');
// }
//     else {alert('The position you entered does not exist')}
// }   
// else {
//     alert('This command is not supported');
//     break;
// };}

//5.Write a script to ask users enter a sequence of numbers, the Numbers are separated by
//commas, calculate the sum of the numbers and show it to users

// let ui = prompt('Enter the sequence of number, separated by commas (,)');
// let numbers = ui.split(',');
// let sum = 0;
// for (let i = 0;
//     i <= numbers.length-1;
//     i++) {sum+=Number(numbers[i])};
// alert(`The sum of them is ${sum}`);

//6.Write a script asking users to enter a sequence of numbers, the numbers are separated
//by commas, find the smallest number and log it out to users

// let ui = prompt('Enter the sequence of number, separated by commas (,)');
// let numbers = ui.split(',');
// let min = Math.min.apply(Math,numbers);
// alert(`The smallest number is ${min}`);

//7.Create an array containing at least 5 numbers, then ask users enter a number, perform a
//search to look for the number in the array, if the number is found, tell user that with the
//index of it in the array, if not, also tell them so

// let arr = [4,6,9,-11,-23,-6,88];
// let num = Number(prompt('Enter the number'));
// function findx(xx) { 
//     return xx == num;
// }
// if (arr.find(findx) == undefined) {
//     alert(`${num} is not Found in my array`)
// }
// else {
//     alert(`${num} is Found in my array at index ${arr.indexOf(num)}`)
// }

// //8.1 Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:

// let sheep = [5,7,300,90,24,50,75];
// alert(`Hello, my name is Phong and here is my sheep sizes
// ${sheep.join(' ')}`);

// //8.2 Add scripts to search for the biggest sheep in your list:

// alert(`Now my biggest sheep has size ${Math.max.apply(Math,sheep)}, let's shave it`);

// //8.3 When your biggest sheer, its size will return to the default size, which is 8.

// sheep[sheep.indexOf(Math.max.apply(Math,sheep))] = 8;
// alert(`After shearing, here is my flock
// ${sheep.join(' ')}`);

// //8.4 In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out

// let nsheep = sheep.map(function (value, index) {return (value+=50);
// });
// sheep = nsheep;
// alert(`MONTH 1
// One month has, passed, my sheeps have grown, here are their sizes
// ${sheep.join(' ')}`);

// //8.5 Let’s do this for 5 months
// for (let i = 2;
//     i<=5;
//     i++
//     ) {
//         alert(`Now my biggest sheep has size ${Math.max.apply(Math,sheep)}, let's shave it`);
//         sheep[sheep.indexOf(Math.max.apply(Math,sheep))] = 8;
//         alert(`After shearing, here is my flock
// ${sheep.join(' ')}`);
//         let nsheep = sheep.map(function (value, index) {return (value+=50);
//         });
//         sheep = nsheep;
//         alert(`MONTH ${i}
// One month has, passed, my sheeps have grown, here are their sizes
// ${sheep.join(' ')}`);
//     }

// //8.6 Write a program to calculate the total size of your sheep as well as the money you would have.
// let totalsize = 0;
// for (let i = 0;
//     i <= sheep.length-1;
//     i++) {
//         totalsize += sheep[i]
//     };
// alert(`My flock has size in total: ${totalsize}
// I would get ${totalsize} * 2$ = ${totalsize*2}`);

//9. Turtle JS
//https://turtle-js.herokuapp.com/?turtle=VWDkMaPquU

// const cl = ['red','gray','blue','purple','cyan'];
// let cm = [0,20,40,60,80];
// for (i=0;
//      i<=4;i++) {color(cl[i]);
//                 for (ii=1;
//                      ii<=4;ii++) {
//                 fd(cm[i]);
//                 rt(90)}};

//10.Create a new array containing the names, each surrounded with <>.

// let name = prompt(`Enter the sequence of names`);
// let namearr = name.split(',');
// let newname = namearr.map(function (value, index) {return (`<`+value+`>`)})
// alert(`${namearr} => ${newname}`);

//11.Create a new array containing only the odd Numbers of the entered sequence.

// let number = prompt(`Enter a sequence number`);
// let arr = number.split(',');
// let odd = arr.filter(function (value, index){return value%2 == 1});
// alert(`${number} => ${odd}`);
