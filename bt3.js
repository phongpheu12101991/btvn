// // 1. Cho người dùng nhập vào số bất kỳ.
// //    Kiểm tra xem số có âm hay không
// //    Nếu âm => print(invalid input)
// //    Nếu dương => Tính giai thừa của số đó và in ra

// let i = Number(prompt('Nhập số bất kì'));
// let n = 1
// if (i>0 && Math.floor(i)==i) {
//     for (x=1;x<=i;x++) { n=n*x};
//     console.log(`Giai thừa của ${i} là:
//      ${n}`)
// }   
// else {console.log('Invalid input')};

// // Vì đề bài chưa chuẩn nên mình ko xét số âm mà gộp tất cả số ko phải số nguyên dương đều là invalid !!


// // 2. Cho người dùng nhập vào name + age
// // Nếu tuổi < 18 => print(name chưa đủ tuổi vào trang web này)
// // Nếu tuổi >=18 => tiếp tục hỏi: name có muốn đăng nhập vào trang web này không
// //                              : nếu câu trả lời = yes => print(name đã vào trang web thành công)
// //                              : nếu câu trả lời = no  => print(name thoát khỏi trang web)


// let name = prompt(`Nhap ten cua ban`);
// let age = Number(prompt(`Nhap tuoi cua ban`));
// if (age<18) {console.log(`${name} chua du tuoi vao trang web nay`)}
// else {
//     let yn = prompt(`${name} co muon vao trang web nay ko :
//      y de vao
//      n hoac bat ki de thoat`);
//     if (yn == 'y') {console.log(`${name} da vao trang web thanh cong`)}
//     else {console.log(`${name} thoat khoi trang web `)};
// };


// // 3. Cho người dùng nhập vào username + password,
// //    Tạo một biến username2 và password2 tạm thời ở code
// //    Kiểm tra username === username2 và password === password2
// //    Nếu cả 2 đều giống => print(đăng nhập thành công)
// //    Nếu một trong 2 sai => print(username sai: nếu username sai) hoặc print(password sai: nếu pass sai)


// let username2 = 'phong';
// let password2 = '123';
// let username = prompt('username ??');
// let password = prompt('password ??');
// if (username === username2 && password === password2) {console.log('Dang nhap thanh cong')}
// else if (username2 !== username && password2 === password) {console.log('username sai')}
// else if (password2 !== password && username === username2) {console.log('password sai')}
// else {console.log('Sai user & password')};


// // 4. Tìm hiểu các lấy thứ, ngày, tháng và câu lệnh switch/case trong javascript (google)
// // Cho người dùng nhập vào tháng sinh(month) và name
// // Nếu sinh 1,2,3 => name sinh vào mùa xuân
// // Nếu sinh 4,5,6 => name sinh vào mùa hạ
// // Nếu sinh 7,8,9 => name sinh vào mùa thu
// // Nếu sinh 10,11,12 => name sinh vào mùa đông
// // Nhập các trường hợp khác không hợp lệ => input không hợp lệ


// let name = prompt('Name ??');
// let thang = Number(prompt('Ban sinh thang may ?'));
// switch (thang) {
//     case 1 :
//     case 2 :
//     case 3 : {console.log(name + ` sinh vao mua xuan`);
// break;
// }
//     case 4 :
//     case 5 :
//     case 6 : {console.log(name + ` sinh vao mua he`);
// break;
// } 
//     case 7 :
//     case 8 :
//     case 9 : {console.log(name + ` sinh vao mua thu`);
// break;
// } 
//     case 10 :
//     case 11 :
//     case 12 : {console.log(name + ` sinh vao mua dong`);
// break;
// } 
//     default : {console.log('Input khong hop le')}
// };


// 5. Cho người dùng nhập vào 3 tham số a, b, c của một phương trình bậc 2=> Tìm nghiệm của phương trình đó
// (sử dụng câu lệnh if/else)
// Sau khi in ra nghiệm thì tiếp tục hỏi người dùng có muốn sử dụng chương trình tiếp không
// Nếu yes => Ứng dụng vòng lặp while cho chương trình chạy tiếp
// Nếu no  => Dừng chương trình



// let loop = true;
//  while (loop===true) {
//     let a = Number(prompt(`Cho phuong trinh bac 2 : axx + bx + c = 0 (a#0)
//     Nhap a`));
//     let b = Number(prompt('Nhap b'));
//     let c = Number(prompt('Nhap c'));
//     if (a!=0) {
//     let y = b** - 4*a*c;
//     let x = -b/(2*a);
//     let x1 = (-b+Math.sqrt(y))/(a*2);
//     let x2 = (-b-Math.sqrt(y))/(a*2);
//      if (y < 0) {console.log('Phuong trinh vo nghiem')}
//      else if (y == 0) {console.log(`Phuong trinh co nghiem kep:
//      x1 = x2 = ${x} `)}
//      else {console.log(`Phuong trinh co 2 nghiem:
//      x1 = ${x1}
//      x2 = ${x2}`)}
// }
// else {console.log('a phai khac 0, moi ban nhap lai')};
// let yn = prompt(`Ban muon su dung chuong trinh tiep ko 
//                 y de tiep tuc, phim bat ki de thoat `);
//  if (yn !=='y') {
//  break;
// }
//  };

// 6.Viết 1 chương trình cho người dùng nhập vào 1 chuỗi bất kỳ
// In ra chuỗi đó theo dạng ngược lại
// Sau khi in ra tiếp tục hỏi người dùng có muốn tiếp tục chương trình
// Nếu yes => dùng vòng lặp while để tiếp tục chương trình
// Nếu no => dừng chương trình


// let loop = true;
// while (loop=true) {
//     let sss = prompt('Nhap chuoi bat ki');
//     var x ='';
//     for (let i =sss.length-1 ;i>=0;i=i-1) {x=x+sss[i]};
//     console.log(`Chuoi nguoc lai la :`+x);
//     let yn = prompt(`tiep tuc chuong trinh ?
//                     y de tiep tuc
//                     n hoac bat ki de thoat`);
//      if (yn!=='y')  {break}  ;           
// };





