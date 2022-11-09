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
        // console.log("CapNhatNV: vitri " + viTri);
        if(viTri > -1) {
            dsnv.mangNV[viTri] = nvCapNhat;
            // console.log(dsnv.mangNV[viTri]);
        }
    }
}

// input: loai can tim kiem
DanhSachNhanVien.prototype.timKiemNV = function (tukhoaTimKiem) {
    var mangKetQua = [];

    var loaiTimKiem = tukhoaTimKiem.replace(/\s/g, "").toLowerCase();
    // console.log("loaiTimKiem: " + loaiTimKiem);
    // for(var i = 0; i < this.mangNV.length; i++) {
    //     var loaiLowerCase = this.mangNV[i].xepLoai.replace(/\s/g, "").toLowerCase();
    //     // console.log("loaiLowerCase: " + loaiLowerCase);
    //     if(loaiLowerCase.indexOf(loaiTimKiem) >= 0) {
    //         mangKetQua.push(this.mangNV[i]);
    //     }
    // }
    this.mangNV.map(function(item){
        var loaiLowerCase = item.xepLoai.replace(/\s/g, "").toLowerCase();
        if(loaiLowerCase.indexOf(loaiTimKiem) >= 0) {
            mangKetQua.push(item);
        }
    });
    return mangKetQua;
}