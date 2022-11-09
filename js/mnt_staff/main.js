const dsnv = new DanhSachNhanVien();


function getELE(id) {
    return document.getElementById(id);
}

function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
    if(localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienthiTable(dsnv.mangNV);
    }
}

function themNV() {
    var taiKhoan = getELE("tknv").value;
    var hoTen = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCoBan = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;

    var isValid = true;
    // TODO: validate parameters

    if(isValid) {
        var nv = new NhanVien(taiKhoan, hoTen, email, ngayLam, chucVu, matKhau, luongCoBan, gioLam);
        nv.tinhTongLuong();
        nv.xepLoaiNhanVien();

        // Them nv vao mang
        dsnv.themNV(nv);
        console.log(dsnv.mangNV);

        // hien thi table
        hienthiTable(dsnv.mangNV);

        setLocalStorage();
    }
}

function hienthiTable(mangNV) {
    var content = "";
    mangNV.map(function(nv, index) {
        console.log(nv);

        content += `<tr>
                    <td>${nv.taiKhoan}</td>
                    <td>${nv.hoTen}</td>
                    <td>${nv.email}</td>
                    <td>${nv.ngayLam}</td>
                    <td>${nv.chucVu}</td>
                    <td>${nv.tongLuong}</td>
                    <td>${nv.xepLoai}</td>
                </tr>`;
    });
    getELE("tableDanhSach").innerHTML = content;
}


// chay khi load trang
getLocalStorage();