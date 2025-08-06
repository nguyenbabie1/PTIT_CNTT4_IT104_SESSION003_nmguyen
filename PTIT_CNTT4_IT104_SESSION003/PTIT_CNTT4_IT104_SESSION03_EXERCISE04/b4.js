"use strict";
// Khai báo hai biến với kiểu dữ liệu rõ ràng
let str = "2"; // Biến kiểu string, giá trị là chuỗi "2"
let num = 2; // Biến kiểu number, giá trị là số 2
// So sánh lỏng bằng toán tử ==
console.log(str == num); // Kết quả: true
// Toán tử == chỉ so sánh giá trị, không quan tâm kiểu dữ liệu.
// Trong trường hợp này, chuỗi "2" được tự động chuyển đổi thành số 2 trước khi so sánh.
// Vì 2 (từ str) bằng 2 (từ num), nên kết quả là true.
// So sánh chặt bằng toán tử ===
console.log(str === num); // Kết quả: false
// Toán tử === so sánh cả giá trị và kiểu dữ liệu.
// Biến str có kiểu string, còn num có kiểu number.
// Do kiểu dữ liệu khác nhau, kết quả là false, dù giá trị của chúng đều là 2.
//# sourceMappingURL=b4.js.map