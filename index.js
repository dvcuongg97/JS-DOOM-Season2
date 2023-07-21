// bài một

function result_b1() {
  // input
  var diemChuan = document.getElementById("diem-chuan").value * 1;
  var khuVuc = document.getElementById("khu-vuc").value * 1;
  var doiTuong = document.getElementById("doi-tuong").value * 1;
  var diem_1 = document.getElementById("diem_1").value * 1;
  var diem_2 = document.getElementById("diem_2").value * 1;
  var diem_3 = document.getElementById("diem_3").value * 1;
  var ketQua = diem_1 + diem_2 + diem_3 + doiTuong + khuVuc;

  if (diem_1 <= 0) {
    document.getElementById("out-put_1").innerHTML =
      "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else if (diem_2 <= 0) {
    document.getElementById("out-put_1").innerHTML =
      "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else if (diem_3 <= 0) {
    document.getElementById("out-put_1").innerHTML =
      "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else if (ketQua < diemChuan) {
    document.getElementById(
      "out-put_1"
    ).innerHTML = `Bạn đã rớt. Điểm của bạn là ${ketQua}`;
  } else {
    document.getElementById(
      "out-put_1"
    ).innerHTML = `Bạn đã đậu. Tổng điểm: ${ketQua}`;
  }
}

// bài hai

function result_b2() {
  var hoTen = document.getElementById("ho-ten").value;
  var soKwDien = document.getElementById("so-Kw-dien").value * 1;
  var ketQua = 0;
  if (soKwDien <= 50) {
    ketQua = soKwDien * 500;
    document.getElementById(
      "out-put_2"
    ).innerHTML = `${hoTen}, Tiền điện của bạn là: ${ketQua.toLocaleString()}`;
  } else if (soKwDien >= 51 && soKwDien <= 100) {
    ketQua = 50 * 500 + (soKwDien - 50) * 650;
    document.getElementById(
      "out-put_2"
    ).innerHTML = `${hoTen}, Tiền điện của bạn là: ${ketQua.toLocaleString()}`;
  } else if (soKwDien >= 101 && soKwDien <= 200) {
    ketQua = 50 * 500 + 49 * 650 + (soKwDien - 100) * 850;
    document.getElementById(
      "out-put_2"
    ).innerHTML = `${hoTen}, Tiền điện của bạn là: ${ketQua.toLocaleString()}`;
  } else if (soKwDien >= 201 && soKwDien <= 350) {
    ketQua = 50 * 500 + 49 * 650 + 99 * 850 + (soKwDien - 200) * 1100;
    document.getElementById(
      "out-put_2"
    ).innerHTML = `${hoTen}, Tiền điện của bạn là: ${ketQua.toLocaleString()}`;
  } else {
    ketQua =
      50 * 500 + 49 * 650 + 99 * 850 + 149 * 1100 + (soKwDien - 350) * 1300;
    document.getElementById(
      "out-put_2"
    ).innerHTML = `${hoTen}, Tiền điện của bạn là: ${ketQua.toLocaleString()}`;
  }
}

// bai ba

function result_b3() {
  var hoTen = document.getElementById("ho-ten-b3").value;
  var thuNhapNam = document.getElementById("thu-nhap-nam").value * 1;
  var soNguoiPhuThuoc = document.getElementById("so-nguoi-phu-thuoc").value * 1;
  var ketQua = 0;

  if (thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000 <= 0) {
    document.getElementById("out-put_3").innerHTML = `Số không hợp lệ`;
  } else if (thuNhapNam <= 60000000) {
    ketQua = (thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000) * 0.05;
    document.getElementById(
      "out-put_3"
    ).innerHTML = ` ${hoTen},  Tiền thuế thu nhập cá nhân cua bạn là: ${ketQua.toLocaleString()}`;
  } else if (thuNhapNam > 60000000 && thuNhapNam <= 120000000) {
    ketQua = (thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000) * 0.1;
    document.getElementById(
      "out-put_3"
    ).innerHTML = ` ${hoTen},  Tiền thuế thu nhập cá nhân cua bạn là: ${ketQua.toLocaleString()}`;
  } else if (thuNhapNam > 120000000 && thuNhapNam <= 210000000) {
    ketQua = (thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000) * 0.15;
    document.getElementById(
      "out-put_3"
    ).innerHTML = ` ${hoTen},  Tiền thuế thu nhập cá nhân cua bạn là: ${ketQua.toLocaleString()}`;
  } else if (thuNhapNam > 210000000 && thuNhapNam <= 384000000) {
    ketQua = (thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000) * 0.2;
    document.getElementById(
      "out-put_3"
    ).innerHTML = ` ${hoTen},  Tiền thuế thu nhập cá nhân cua bạn là: ${ketQua.toLocaleString()}`;
  } else if (thuNhapNam > 384000000 && thuNhapNam <= 624000000) {
    ketQua = (thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000) * 0.25;
    document.getElementById(
      "out-put_3"
    ).innerHTML = ` ${hoTen},  Tiền thuế thu nhập cá nhân cua bạn là: ${ketQua.toLocaleString()}`;
  } else if (thuNhapNam > 624000000 && thuNhapNam <= 960000000) {
    ketQua = (thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000) * 0.3;
    document.getElementById(
      "out-put_3"
    ).innerHTML = ` ${hoTen},  Tiền thuế thu nhập cá nhân cua bạn là: ${ketQua.toLocaleString()}`;
  } else {
    ketQua = (thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000) * 0.35;
    document.getElementById(
      "out-put_3"
    ).innerHTML = ` ${hoTen},  Tiền thuế thu nhập cá nhân cua bạn là: ${ketQua.toLocaleString()}`;
  }
}

// bài bốn

function result_b4() {
  var khachHang = document.getElementById("khach-hang").value;
  var doanhNgiep_soKetNoi = document.getElementById("hidden-input").value * 1;
  const kenhCaoCap = document.getElementById("kenh-cao-cap").value * 1;
  var ketQua = 0;
  if (khachHang == "") {
    document.getElementById(
      "out-put_4"
    ).innerHTML = `Hãy chọn đối tượng khách hàng`;
  } else if (khachHang === "none") {
    ketQua = 4.5 + 20.5 + kenhCaoCap * 7.5;
    document.getElementById(
      "out-put_4"
    ).innerHTML = `Tiền cáp của bạn là: ${ketQua.toLocaleString()}$`;
  } else if (khachHang === "block" && doanhNgiep_soKetNoi <= 10) {
    ketQua = 15 + 75 + kenhCaoCap * 50;
    document.getElementById(
      "out-put_4"
    ).innerHTML = `Tiền cáp của bạn là: ${ketQua.toLocaleString()}$`;
  } else {
    ketQua = 15 + 75 + kenhCaoCap * 50 + (doanhNgiep_soKetNoi - 10) * 5;
    document.getElementById(
      "out-put_4"
    ).innerHTML = `Tiền cáp của bạn là: ${ketQua.toLocaleString()}$`;
  }
}
