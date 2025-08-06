"use strict";

function convertToNumber(value) {
    if (typeof value === 'number')
        return value;
    if (typeof value === 'string') {
        const num = Number(value);
        if (isNaN(num)) {
            throw new Error(`"${value}" không thể chuyển thành số`);
        }
        return num;
    }
    throw new Error(`"${value}" không phải là number hoặc string hợp lệ`);
}
function add(a, b) {
    try {
        const num1 = convertToNumber(a);
        const num2 = convertToNumber(b);
        return num1 + num2;
    }
    catch (error) {
        throw error;
    }
}
function subtract(a, b) {
    try {
        const num1 = convertToNumber(a);
        const num2 = convertToNumber(b);
        return num1 - num2;
    }
    catch (error) {
        throw error;
    }
}
function multiply(a, b) {
    try {
        const num1 = convertToNumber(a);
        const num2 = convertToNumber(b);
        return num1 * num2;
    }
    catch (error) {
        throw error;
    }
}
function divide(a, b) {
    try {
        const num1 = convertToNumber(a);
        const num2 = convertToNumber(b);
        if (num2 === 0) {
            throw new Error("Không thể chia cho 0");
        }
        return num1 / num2;
    }
    catch (error) {
        throw error;
    }
}
function power(base, exponent) {
    try {
        const num1 = convertToNumber(base);
        const num2 = convertToNumber(exponent);
        return Math.pow(num1, num2);
    }
    catch (error) {
        throw error;
    }
}
function sqrt(base, root) {
    try {
        const num1 = convertToNumber(base);
        const num2 = convertToNumber(root);
        if (num1 < 0 && num2 % 2 === 0) {
            throw new Error("Không thể tính căn bậc chẵn của số âm");
        }
        if (num2 === 0) {
            throw new Error("Căn bậc 0 không xác định");
        }
        return Math.pow(num1, 1 / num2);
    }
    catch (error) {
        throw error;
    }
}
function factorial(n) {
    try {
        const num = convertToNumber(n);
        if (!Number.isInteger(num) || num < 0) {
            throw new Error("Giai thừa chỉ áp dụng cho số nguyên không âm");
        }
        if (num === 0 || num === 1)
            return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    catch (error) {
        throw error;
    }
}
// Ensure calculate is globally accessible
document.addEventListener('DOMContentLoaded', () => {
    window.calculate = function (operation) {
        const input1Element = document.getElementById('input1');
        const input2Element = document.getElementById('input2');
        const resultDiv = document.getElementById('result');
        const errorDiv = document.getElementById('error');
        if (!input1Element || !input2Element || !resultDiv || !errorDiv) {
            console.error("Không tìm thấy phần tử DOM");
            return;
        }
        const input1 = input1Element.value;
        const input2 = input2Element.value;
        resultDiv.textContent = '';
        errorDiv.textContent = '';
        try {
            let result;
            if (operation === 'factorial') {
                if (!input1) {
                    throw new Error("Vui lòng nhập số thứ nhất");
                }
                result = factorial(input1);
            }
            else {
                if (!input1 || !input2) {
                    throw new Error("Vui lòng nhập cả hai số");
                }
                switch (operation) {
                    case 'add':
                        result = add(input1, input2);
                        break;
                    case 'subtract':
                        result = subtract(input1, input2);
                        break;
                    case 'multiply':
                        result = multiply(input1, input2);
                        break;
                    case 'divide':
                        result = divide(input1, input2);
                        break;
                    case 'power':
                        result = power(input1, input2);
                        break;
                    case 'sqrt':
                        result = sqrt(input1, input2);
                        break;
                    default:
                        throw new Error("Phép toán không hợp lệ");
                }
            }
            resultDiv.textContent = `Kết quả: ${result}`;
        }
        catch (error) {
            errorDiv.textContent = error.message;
        }
    };
});
//# sourceMappingURL=b9.js.map