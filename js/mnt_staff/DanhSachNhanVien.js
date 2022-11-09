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

    this.xoaNV = function(taiKhoan) {
        var viTri = this.timViTri(taiKhoan);
        if(viTri > -1) {
            this.mangNV.splice(viTri, 1);
        }
    }

    this.capNhatNV = function(nvCapNhat) {
        var viTri = this.timViTri(nvCapNhat.taiKhoan);
        console.log("CapNhatNV: vitri " + viTri);
        if(viTri > -1) {
            dsnv.mangNV[viTri] = nvCapNhat;
            console.log(dsnv.mangNV[viTri]);
        }
    }
}