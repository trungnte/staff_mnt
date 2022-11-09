function DanhSachNhanVien() {
    this.mangNV = [];

    this.themNV = function(nv) {
        this.mangNV.push(nv);
    }

    this.timViTri = function (taiKhoan) {
        var viTri = -1;
        viTri = this.mangNV.findIndex(function(nv){
            return taiKhoan == nv.taiKhoan;
        });
        return viTri;
    }
}