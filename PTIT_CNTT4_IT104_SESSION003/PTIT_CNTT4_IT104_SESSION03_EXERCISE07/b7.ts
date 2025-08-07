"use strict";
// Khai báo biến kiểu string
let str = "hello world";
// Hàm loại bỏ ký tự trùng lặp
function removeDuplicateChars(input) {
    let result = "";
    // Duyệt qua từng ký tự trong chuỗi
    for (let i = 0; i < input.length; i++) {
        // Chỉ thêm ký tự vào result nếu nó chưa xuất hiện
        if (result.indexOf(input[i]) === -1) {
            result += input[i];
        }
    }
    return result;
}
// Test với các input
console.log(removeDuplicateChars("banana")); // Output: "ban"
console.log(removeDuplicateChars("hello world")); // Output: "helo wrd"
// Áp dụng cho biến str
let result = removeDuplicateChars(str);
console.log(result); // Output: "helo wrd"
