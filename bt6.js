//1.
// let x = Number(prompt('Nhap x'));
// let y = Number(prompt('Nhap y'));
// let arr = [];
// let sum = 0;
// if (x > y) {[x,y] = [y,x]}
// for (let i = x;
//     i <= y;
//     i+=2) {arr.push(i);
//             sum+=i;   }
//     tbc = sum/(arr.length);
//     console.log(...arr);
//     console.log(`Trung binh cong cac so trong mang = ${tbc}`);   


//2.
// let numbers = prompt(`Nhap day so`);
// let arr = numbers.split(',');
// console.log(...arr); 
// let tc = 0;
// let tl = 0;
// for (let i = 0;
//      i <= arr.length-1;
//      i++) {arr[i]=Number(arr[i])}      
// for (let ii = 0;
//     ii<=arr.length-1;
//     ii++) {
//         if (arr[ii] % 2 == 0) {tc+=arr[ii]}
//         else {tl+=arr[ii]}
// };


// console.log(`Tong chan = ${tc}`);
// console.log(`Tong le = ${tl}`);
// console.log(`Min cua mang la ${Math.min.apply(Math,arr)}`);
// console.log(`Max cua mang la ${Math.max.apply(Math,arr)}`);

//3.

// let arr = [1,2,4,6,[3,5],[10,12]];
// let sum = 0;
// console.log(...arr)
// let newarr = [].concat.apply([],arr);
// console.log(...newarr);
// for (let i = 0;
//     i<=newarr.length-1;
//     i++) {sum += newarr[i]}
// console.log(sum)
// let newarr10 = newarr.map(function (value, index) {return (value+=10)})
// console.log(...newarr10)

//4.
// let ss = prompt('Nhap day so');
// let arr = (ss.split(',')).map(function (value, index) {return (value=Number(value))});

// let newarr = [...new Set(arr)];
// console.log(newarr);


//5.

// let ss = prompt('Nhap 1 cau');
// let arr = ss.split('');
// for (let i = 0;
//     i <= arr.length-1;
//     i++) {if ( arr[i] == ' ') {arr[i+1]= arr[i+1].toUpperCase()}
//     }
// arr[0]=arr[0].toUpperCase();
//  console.log(`${arr.join('')}`);

//6. 7.
// let n = Number(prompt('Nhap n'));
// let cc = prompt('Nhap chuoi');
// let arr = cc.split(',');
// console.log(arr);
// let narr = [];
// let arr2 = [];
// for (let i = 0;
//     i<= n-1;
//     i++) {narr.push(arr[i])};
//     console.log(narr);
// for (let ii = 0;
//     ii <= arr.length-1;
//     ii += n) {
//         arr2.push(arr.slice(ii,ii+n))
//     }
// console.log(...arr2);


//8. 9.
// let ss = prompt('Nhap chuoi');
// let arr = (ss.split(',')).map(function (value, index) {return (value=Number(value))});
// console.log(`Hieu lon nhat la ${Math.max.apply(Math,arr)-Math.min.apply(Math,arr)}
// (hieu cua ${Math.max.apply(Math,arr)} va ${Math.min.apply(Math,arr)})`);

// // let arrdup = arr.filter((item, index) => arr.indexOf(item) !== index);
// let arrdup = arr.filter(function(value, index) {return arr.indexOf(value) !== index})
// console.log(`Cac so lap lai ${arrdup}`);

//10

// let cc = prompt('nhap chuoi');
// let arr = cc.split('');
// console.log(arr);
// let ch = true;
// for (
//     let i = 0;
//     i < arr.length/2;
//     i++) {
//         if (arr[i] !== arr[arr.length-i-1]) {
//             ch= false;
//             break;
//         } else {
//             ch = true;
//         }
//     }
//     if (ch == true) {console.log('Chuoi doi xung')}
//     else {console.log('Chuoi ko doi xung')}

