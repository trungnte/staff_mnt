const dsnv = new DanhSachNhanVien();
const validation = new Validation();


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
    // + Tài khoản tối đa 4 - 6 ký số, không để trống
    isValid = validation.checkEmpty(taiKhoan, "Tài khoản không để trống", "tbTKNV");
    isValid &= validation.checkAccount(taiKhoan, "Tài khoản tối đa 4 - 6 ký số", "tbTKNV");

    // + Tên nhân viên phải là chữ, không để trống
    isValid &= validation.checkEmpty(hoTen, "Họ tên không để trống", "tbTen");
    isValid &= validation.checkName(hoTen, "Họ tên phải là chữ", "tbTen");

    // + Email phải đúng định dạng, không để trống
    isValid &= validation.checkEmpty(email, "Email không để trống", "tbEmail");
    isValid &= validation.checkName(email, "Email không đúng định dạng", "tbEmail");

    // + mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống
    isValid &= validation.checkEmpty(matKhau, "Mật Khẩu không để trống", "tbMatKhau");
    isValid &= validation.checkPassword(matKhau, "Mật Khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt 6-10 ký tự", "tbMatKhau");

    // + Ngày làm không để trống, định dạng mm/dd/yyyy
    isValid &= validation.checkEmpty(ngayLam, "Ngày làm không để trống", "tbNgay");
    // TODO: check format date time!!!

    // + Lương cơ bản 1 000 000 - 20 000 000, không để trống
    isValid &= validation.checkEmpty(luongCoBan, "Lương cơ bản không để trống", "tbLuongCB");
    isValid &= validation.checkRangeNumber(luongCoBan, "Lương cơ bản 1 000 000 - 20 000 000", "tbLuongCB", 1000000, 20000000);

    // + Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
    isValid &= validation.checkDropdown("chucvu", "Chức vụ không hợp lệ", "tbChucVu");

    // + Số giờ làm trong tháng 80 - 200 giờ, không để trống
    isValid &= validation.checkEmpty(gioLam, "Số giờ làm không để trống", "tbGiolam");
    isValid &= validation.checkRangeNumber(gioLam, "Số giờ làm trong tháng 80 - 200 giờ", "tbGiolam", 80, 200);

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
                    <td>
                        <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')" >Xoá</button>
                        <button class="btn btn-success" onclick="xemChiTiet('${nv.taiKhoan}')" >Xem</button>
                </td>
                </tr>`;
    });
    getELE("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(taiKhoan) {
    dssv.xoaNV(taiKhoan);
    setLocalStorage();
    getLocalStorage();
}

// chay khi load trang
getLocalStorage();

function clearNotify() {
    getELE("tbTKNV").style.display = "none";
    getELE("tbTen").style.display = "none";
    getELE("tbEmail").style.display = "none";
    getELE("tbMatKhau").style.display = "none";
    getELE("tbNgay").style.display = "none";
    getELE("tbLuongCB").style.display = "none";
    getELE("tbChucVu").style.display = "none";
    getELE("tbGiolam").style.display = "none";
}