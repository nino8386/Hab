let obj = JSON.parse($response.body);

// Giả lập gói Pro hợp lệ
obj.isPro = true;
obj.subscription = "lifetime";
obj.expiry = "2099-12-31T23:59:59Z";

// Thêm thông tin đăng ký để tránh lỗi xác minh
obj.planType = "VIP";
obj.status = "ACTIVE";
obj.purchaseToken = "fake_token_12345";

// Ghi log kiểm tra
console.log("CapCut Pro Activated!");

$done({body: JSON.stringify(obj)});
