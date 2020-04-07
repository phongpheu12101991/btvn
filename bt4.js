//1.

// let n = Number(prompt('Nhap so N'));
// let tc = 0;
// let tl = 0;
// for (let i = 0;i<=n;i+=2) {tc=tc+i};
// for (let i1= 1;i1<=n;i1+=2) {tl=tl+i1};
// console.log(`Tong cac so chan trong doan tu 1 den N: ${tc}
// Tong cac so le trong doan tu 1 den N : ${tl}`);


//2.

// let n = Number(prompt('Nhap so N'));
// let snt = true;
// if ((Math.floor(n)!=n) || n<=1) {console.log('N phai la so tu nhien >1')}
// else {for (let i=2;i<=Math.sqrt(n);i++) {
//     if (n%i == 0) {snt = false;break}
// }
// }
// console.log(snt);


//3.

// let n = Number(prompt('Nhap so N'));

// for (let x=0;x<=n;x++) {
//      let snt = true;
//      if (x < 2) {snt = false}
//      else if (x == 2){snt = true}
//      else {for (let i = 2; i <= Math.sqrt(x); i++)
//             {if (x%i == 0) {snt = false;
//                               break;}
//             }
//         }
//         if (snt == true) {console.log(x)}
//         }
    

//4.


// let a = 1;
// let b = 0;
// let c
// for (let n = (Number(prompt("nhap n"))-1);n>=0; n--) {c = a; a = a+b; b = c};
// console.log(b)

//5.

// let a = 0;
// while (true) {
//     let n = Number(prompt('Nhap n'));
//     if (n>=0) {a=a + n}
//     else {break};}
// console.log(`Tong cac so da nhap = ${a}`);


//6.

// let ss = prompt('Nhap chuoi bat ki');
// let xx ='';
// for (let i=ss.length-1 ; i>=0; i--) {xx=xx+ss[i]};
// if (ss==xx) {console.log('chuoi doi xung')}
// else {console.log('Chuoi khong doi xung')};

//7.

// let m = Number(prompt('Nhap chieu dai'));
// let n = Number(prompt('Nhap chieu rong'));
// let hcn ='';
// for (let i=1;i<=m;i++) {for (let x=1;x<=n;x++) {hcn=hcn+'*'};hcn=hcn+'\n'};
// console.log(hcn);

//8.

// let a = Number(prompt('Tong so ga va cho'));
// let b = Number(prompt('Tong so chan'));
// let x = (4*a-b)/2;
// let y = 36 - x;
// if ((4*a-b)>=0 && (2*a)<=b &&  Math.floor((4*a-b)/2)==((4*a-b)/2)) {
// console.log(`So ga la : ${x}`);
// console.log(`So cho la : ${y}`);}
// else {console.log('Ko co ket qua')};

//9.   ax + by = c
//     a1x+ b1y = c1
//  (a-a1)x + (b-b1)y  = c-c1

// let a = Number(prompt('Nhap a'));
// let b = Number(prompt('Nhap b'));
// let c = Number(prompt('Nhap c'));
// let a1 = Number(prompt('Nhap a1'));
// let b1 = Number(prompt('Nhap b1'));
// let c1 = Number(prompt('Nhap c1'));
// let x = (c-c1)/(a-a1);
// let y = (c-c1)/(b-b1);
// let y1 = (c-c1)/(b-b1) +'-'+ (((a-a1)/(b-b1))+'*x')


// if ((a-a1)==0 && (b-b1)==0 && (c-c1)==0) {console.log(`x co vo so nghiem
// y co vo so nghiem`)}
// else if ((a-a1)==0 && (b-b1)==0 && (c-c1)!==0) {console.log(`PT vo nghiem`)}
// else if ((a-a1)!==0 && (b-b1)==0) {console.log(`x = ${x}
// y co vo so nghiem`)}
// else if ((a-a1)==0 && (b-b1)!==0) {console.log(`x co vo so nghiem
// y = ${y}`)}
// else if ((a-a1)!==0 && (b-b1)!==0) {console.log(`X co vo so nghiem
// y = ${y1}`)};