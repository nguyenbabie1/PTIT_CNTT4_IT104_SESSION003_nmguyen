// Khai báo 5 biến với kiểu dữ liệu cụ thể
let num1: number = 5;    // Biến num1 kiểu number
let num2: number = 3;    // Biến num2 kiểu number
let num3: number;        // Biến num3 kiểu number
let num4: string = "10"; // Biến num4 kiểu string
let num5: boolean = true;// Biến num5 kiểu boolean

// Thực hiện các phép tính giữa num1 và num2, lưu vào num3 và in kết quả
num3 = num1 + num2;      // Cộng
console.log("Cộng: " + num3);
num3 = num1 - num2;      // Trừ
console.log("Trừ: " + num3); 
num3 = num1 * num2;      // Nhân
console.log("Nhân: " + num3); 
num3 = num1 / num2;      // Chia
console.log("Chia: " + num3);

// Thực hiện phép cộng giữa num4 và num5, in kết quả
console.log("Cộng num4 + num5: " + (num4 + num5)); // Kết quả: "10true"
// Khi cộng một chuỗi (num4 = "10") với một giá trị boolean (num5 = true), JavaScript/TypeScript thực hiện ép kiểu tự động (type coercion).
// Giá trị boolean true được chuyển thành chuỗi "true", sau đó chuỗi "10" và "true" được nối lại với nhau mà không chuyển đổi kiểu số.
// Kết quả là chuỗi "10true" thay vì một phép tính số học, vì toán tử + ưu tiên nối chuỗi khi một trong hai toán hạng là chuỗi.