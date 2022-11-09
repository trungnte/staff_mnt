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
        switch (this.chucVu) {
            case "Sếp":
                this.tongLuong = this.luongCoBan *  3;
                break;
            case "Trưởng phòng":
                this.tongLuong = this.luongCoBan *  2;
                break;
            case "Nhân viên":
                this.tongLuong = this.luongCoBan *  1;
                break;
            default:
                this.tongLuong = this.luongCoBan *  1;
                break;
        }
    }

    this.xepLoaiNhanVien = function() {
        if (this.gioLam >= 192) {
            this.xepLoai = "xuất sắc";
        } else if (this.gioLam >= 176) {
            this.xepLoai = "giỏi";
        } else if (this.gioLam >= 160) {
            this.xepLoai = "khá";
        } else{
            this.xepLoai = "trung bình";
        }
    }
}