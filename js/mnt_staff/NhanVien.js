function NhanVien(taiKhoan, hoTen, email, ngayLam, chucVu, 
        matKhau, luongCoBan, gioLam) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.ngayLam = ngayLam;
    this.chucVu = chucVu;
    this.matKhau = matKhau;
    this.luongCoBan = luongCoBan;
    this.gioLam = gioLam;

    this.tongLuong = 0;
    this.xepLoai = "";
    // TODO: tinh tong luong!
    this.tinhTongLuong = function() {
        this.tongLuong = 10;
    }

    this.xepLoaiNhanVien = function() {
        this.xepLoai = "Good";
    }
}