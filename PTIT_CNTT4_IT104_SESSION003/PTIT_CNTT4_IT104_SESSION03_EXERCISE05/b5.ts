// Khai báo hai biến firstName và lastName với kiểu string
let firstName = "Nga"; 
let lastName = "Nguyen";   

// Kiểm tra và viết hoa chữ cái đầu nếu cần
if (firstName[0] === firstName[0].toLowerCase()) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
}
if (lastName[0] === lastName[0].toLowerCase()) {
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
}

// Ghép hai chuỗi thành fullName với dấu cách ở giữa
let fullName = firstName + " " + lastName;

// In kết quả ra màn hình
console.log(fullName);