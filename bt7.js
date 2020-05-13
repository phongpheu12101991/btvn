// C/R/U/D - phone list
// Cho user input C/R/U/D
// C - name,phone -> them vao mang 
//    => R  
// R - in ra toan bo contact theo name-phone
// U - cho user tim contact theo name
//     ko thay thi not found
//     thay thi update ten va sdt moi
//     (ten moi ko trung ten cu)
//    => R
// D - cho user tim contact theo name
//     ko thay thi not found
//     thay thi xoa contact
//    => R
// ****Neu co roi ko tao moi
// ****Tim ten rut gon

const phonelist = [
    {
        name: 'phong',
        phone: '01658214578',
    },
    {
        name: 'phu',
        phone: '01010203232',
    }
];



function findname(arrinput) {
    let LastNameArray = [];
    for (let i = 0; i < phonelist.length; i++) {
        x = phonelist[i].name.split(' ');
        LastNameArray.push(x[x.length - 1]);
    }
    InputtoArray = arrinput.split(' ');
    LastNameInput = InputtoArray[InputtoArray.length - 1];
    for (let i = 0; i < LastNameArray.length; i++) {

        if (LastNameArray[i] == LastNameInput) {
            find = i;
            break;
        } else {
            find = -1;
        }
    } return find;
};

function showall(arr) {
    for (contact of arr) {
        console.log(contact.name + ' - ' + contact.phone);
    };
};
while (true) {
    let ui = prompt('Nhap thao tac can lam C/R/U/D ?').toUpperCase();
    if (ui == 'R') {
        showall(phonelist);
    }
    else if (ui == 'C') {
        let newname = prompt('Nhap ten lien lac moi');
        findname(newname);
        if (find == -1) {
            let newphone = prompt('Nhap so');
            phonelist.push({ name: newname, phone: newphone });
            showall(phonelist);
        } else {
            alert('Ten nay da co roi');
        };


    }
    else if (ui == 'U') {
        let uiu = prompt('Ten lien lac can sua?');
        findname(uiu);
        let FixIndex = find;
        if (find == -1) {
            alert('Khong tim thay ten');
        } else {
            let newname1 = prompt('Nhap ten moi');
            findname(newname1);
            if (find == -1) {
                let newphone1 = prompt('Nhap so moi');
                phonelist[FixIndex].name = newname1;
                phonelist[FixIndex].phone = newphone1;
                showall(phonelist);
            } else {
                alert('Ten nay da co roi');
            }
        };
    }
    else if (ui == 'D') {
        let uid = prompt('Ten lien lac muon xoa?');
        findname(uid);
        let DeleteIndex = find;
        if (find == -1) {
            alert('Khong tim thay ten');
        } else {
            phonelist.splice(DeleteIndex, 1);
            showall(phonelist);
        };
    } else {
        alert('Ban nhap sai cau lenh');
    };
};

