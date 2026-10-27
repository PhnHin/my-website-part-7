const hoTen = "Phan Trọng Hiển";
const namSinh = 2007;
const laSinhVien = true;
const diemTB = 8.5;

console.log(
  `Họ tên: ${hoTen} - Năm sinh: ${namSinh} - Là SV: ${laSinhVien} - Điểm TB: ${diemTB}`
);
console.log("Kiểu dữ liệu:", {
  hoTen: typeof hoTen,
  namSinh: typeof namSinh,
  laSinhVien: typeof laSinhVien,
  diemTB: typeof diemTB,
});

const celsius = 25;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

const soCanKiemTraChiaHetCho3 = 5;
console.log(soCanKiemTraChiaHetCho3 % 3 === 0);

console.log('"5" + 3 =', "5" + 3);
console.log('"5" - 3 =', "5" - 3);
console.log('5 === "5" =', 5 === "5");
console.log("true + true =", true + true);
console.log("typeof null =", typeof null);

console.log("Number('42') =", Number("42"));
console.log("String(2026) =", String(2026));
console.log("Boolean(0) =", Boolean(0));

const phanLoaiDiem = (diem) => {
  if (diem >= 8) {
    return "Giỏi";
  } else if (diem >= 6.5) {
    return "Khá";
  } else if (diem >= 5) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
};

const danhSachDiem = [9.2, 8, 7.5, 5.5, 4];
for (let i = 0; i < danhSachDiem.length; i++) {
  const diem = danhSachDiem[i];
  console.log(`Điểm ${diem}: ${phanLoaiDiem(diem)}`);
}

const n = 7;
console.log(`Bảng cửu chương ${n}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}

console.log("Các số nguyên tố từ 2 đến 30:");
for (let so = 2; so <= 30; so++) {
  let laSoNguyenTo = true;
  for (let uoc = 2; uoc < so; uoc++) {
    if (so % uoc === 0) {
      laSoNguyenTo = false;
      break;
    }
  }
  if (laSoNguyenTo) {
    console.log(so);
  }
}

function tinhGiaiThua(n) {
  let ketQua = 1;
  for (let i = 2; i <= n; i++) {
    ketQua *= i;
  }
  return ketQua;
}

const laSoChan = function (n) {
  return n % 2 === 0;
};

const timSoLonNhat = (mang) => {
  let lonNhat = mang[0];
  for (let i = 1; i < mang.length; i++) {
    if (mang[i] > lonNhat) {
      lonNhat = mang[i];
    }
  }
  return lonNhat;
};

console.log("5! =", tinhGiaiThua(5));
console.log("8 là số chẵn:", laSoChan(8));
console.log("Số lớn nhất:", timSoLonNhat([12, 4, 27, 9]));

console.log(a);
var a = 10;

const danhSachSinhVien = [
  { hoTen: "Nguyễn Văn A", diem: 8.5 },
  { hoTen: "Trần Thị B", diem: 7.2 },
  { hoTen: "Lê Văn C", diem: 9.1 },
  { hoTen: "Phạm Thị D", diem: 5.8 },
  { hoTen: "Hoàng Văn E", diem: 4.3 },
];

for (const sinhVien of danhSachSinhVien) {
  console.log(
    `${sinhVien.hoTen} - ${sinhVien.diem} - ${phanLoaiDiem(sinhVien.diem)}`
  );
}

const tongDiem = danhSachSinhVien.reduce(
  (tong, sinhVien) => tong + sinhVien.diem,
  0
);
const diemTrungBinhLop = tongDiem / danhSachSinhVien.length;
console.log(`Điểm trung bình cả lớp: ${diemTrungBinhLop.toFixed(2)}`);

function timSinhVienDiemCao(danhSach) {
  let sinhVienCaoNhat = danhSach[0];
  for (const sinhVien of danhSach) {
    if (sinhVien.diem > sinhVienCaoNhat.diem) {
      sinhVienCaoNhat = sinhVien;
    }
  }
  return sinhVienCaoNhat;
}

const sinhVienDiemCaoNhat = timSinhVienDiemCao(danhSachSinhVien);
console.log(
  `Sinh viên điểm cao nhất: ${sinhVienDiemCaoNhat.hoTen} - ${sinhVienDiemCaoNhat.diem}`
);

const soLuongTheoHocLuc = {
  Giỏi: 0,
  Khá: 0,
  "Trung bình": 0,
  Yếu: 0,
};
for (const sinhVien of danhSachSinhVien) {
  const hocLuc = phanLoaiDiem(sinhVien.diem);
  soLuongTheoHocLuc[hocLuc]++;
}
console.log("Số lượng sinh viên theo học lực:", soLuongTheoHocLuc);
