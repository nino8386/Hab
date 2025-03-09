let obj = JSON.parse($response.body);

// Giả lập gói Pro hợp lệ
obj.isPro = true;
obj.subscription = "lifetime";
obj.expiry = "2099-12-31T23:59:59Z";

// Thêm thông tin đăng ký để tránh lỗi xác minh
obj.planType = "VIP";
obj.status = "ACTIVE";
obj.purchaseToken = "fake_token_12345";
obj.features = ["premium", "no_ads", "hd_export", "4k_editing", "pro_music", "cloud_sync"];
obj.valid = true;
obj.validUntil = "2099-12-31T23:59:59Z";
obj.renewal = false;
obj.planId = "vip_lifetime";
obj.region = "global";
obj.userId = "123456789";
obj.subscriptionType = "lifetime";
obj.commerceStatus = "SUBSCRIBED";
obj.passportVerified = true;
obj.isSubscribed = true;
obj.planStatus = "ACTIVE";
obj.subscriptionDetails = {
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2099-12-31T23:59:59Z",
    "autoRenew": false,
    "paymentStatus": "PAID",
    "platform": "iOS",
    "purchaseSource": "AppStore"
};
obj.verificationBypass = true;
obj.proAccess = true;
obj.accountLevel = "premium";
obj.cloudSyncEnabled = true;
obj.entitlement = {
    "pro": true,
    "enterprise": false,
    "trial": false
};

// Ghi log kiểm tra
console.log("CapCut Pro Fully Activated!");

$done({body: JSON.stringify(obj)});

