let obj = JSON.parse($response.body);

// Giả lập gói Pro hợp lệ
obj.isPro = true;
obj.subscription = "lifetime";
obj.expiry = "2099-12-31T23:59:59Z";

// Thêm thông tin đăng ký để tránh lỗi xác minh
obj.planType = "VIP";
obj.status = "ACTIVE";
obj.purchaseToken = "fake_token_12345";
obj.features = ["premium", "no_ads", "hd_export", "4k_editing", "pro_music"];
obj.valid = true;
obj.validUntil = "2099-12-31T23:59:59Z";
obj.renewal = false;

// Ghi log kiểm tra
console.log("CapCut Pro Fully Activated!");

$done({body: JSON.stringify(obj)});

