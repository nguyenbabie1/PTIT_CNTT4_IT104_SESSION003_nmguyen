// Khai báo biến kiểu string
let str = "hello world";

// Hàm loại bỏ ký tự trùng lặp
function removeDuplicateChars(input) {
    // Chuyển chuỗi thành mảng các ký tự, sử dụng Set để lọc trùng lặp, rồi nối lại thành chuỗi
    return [...new Set(input)].join('');
}

// Test với các input
console.log(removeDuplicateChars("banana")); // Output: "ban"
console.log(removeDuplicateChars("hello world")); // Output: "helo wrd"

// Áp dụng cho biến str
let result = removeDuplicateChars(str);
console.log(result); // Output: "helo wrd"