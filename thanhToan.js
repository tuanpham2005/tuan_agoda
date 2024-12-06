// form-script.js
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    // Check if all required fields are filled
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (!fullName || !email || !phone || !cardNumber || !cvv) {
        alert("Vui lòng điền đầy đủ thông tin!");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
        alert("Số điện thoại không hợp lệ!");
        event.preventDefault();
        return;
    }

    // Validate card number
    if (!/^\d{16}$/.test(cardNumber)) {
        alert("Số thẻ không hợp lệ!");
        event.preventDefault();
        return;
    }

    // Validate CVV
    if (!/^\d{3}$/.test(cvv)) {
        alert("CVV không hợp lệ!");
        event.preventDefault();
        return;
    }

    alert("Đặt phòng thành công! Cảm ơn bạn.");
});
