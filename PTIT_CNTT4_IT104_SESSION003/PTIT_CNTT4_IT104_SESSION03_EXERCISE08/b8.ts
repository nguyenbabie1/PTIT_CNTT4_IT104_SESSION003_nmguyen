// Hàm kiểm tra và chuyển đổi sang số
function convertToNumber(value) {
    if (typeof value === 'number') return value;
    if (typeof value === 'string') {
        const num = Number(value);
        if (isNaN(num)) {
            throw new Error(`"${value}" không thể chuyển thành số`);
        }
        return num;
    }
    throw new Error(`"${value}" không phải là number hoặc string hợp lệ`);
}

// Hàm cộng
function add(a, b) {
    try {
        const num1 = convertToNumber(a);
        const num2 = convertToNumber(b);
        return num1 + num2;
    } catch (error) {
        return error.message;
    }
}

// Hàm trừ
function subtract(a, b) {
    try {
        const num1 = convertToNumber(a);
        const num2 = convertToNumber(b);
        return num1 - num2;
    } catch (error) {
        return error.message;
    }
}

// Hàm nhân
function multiply(a, b) {
    try {
        const num1 = convertToNumber(a);
        const num2 = convertToNumber(b);
        return num1 * num2;
    } catch (error) {
        return error.message;
    }
}

// Hàm chia
function divide(a, b) {
    try {
        const num1 = convertToNumber(a);
        const num2 = convertToNumber(b);
        if (num2 === 0) {
            throw new Error("Không thể chia cho 0");
        }
        return num1 / num2;
    } catch (error) {
        return error.message;
    }
}

// Test các hàm
console.log(add(5, 3)); // 8
console.log(add("5", "3")); // 8
console.log(add("abc", 3)); // "abc" không thể chuyển thành số

console.log(subtract(5, 3)); // 2
console.log(subtract("5", "3")); // 2
console.log(subtract("xyz", 3)); // "xyz" không thể chuyển thành số

console.log(multiply(5, 3)); // 15
console.log(multiply("5", "3")); // 15
console.log(multiply("def", 3)); // "def" không thể chuyển thành số

console.log(divide(6, 3)); // 2
console.log(divide("6", "3")); // 2
console.log(divide(6, 0)); // Không thể chia cho 0
console.log(divide("ghi", 3)); // "ghi" không thể chuyển thành số