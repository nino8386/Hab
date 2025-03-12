try {
    let body = $response.body;
    
    // Kiểm tra nếu phản hồi không phải JSON thì không thực hiện JSON.parse
    if (!body || body[0] !== "{" && body[0] !== "[") {
        console.log("Lỗi: Phản hồi không phải JSON hợp lệ!");
        $done({});
    } else {
        let obj = JSON.parse(body);
        obj.subscriber = {
            "entitlements": {
                "pro": {
                    "expires_date": "2099-12-31T23:59:59Z",
                    "product_identifier": "com.miraa.premium"
                }
            },
            "subscriptions": {
                "com.miraa.premium": {
                    "expires_date": "2099-12-31T23:59:59Z",
                    "original_purchase_date": "2024-01-01T00:00:00Z",
                    "purchase_date": "2024-01-01T00:00:00Z"
                }
            }
        };
        $done({ body: JSON.stringify(obj) });
    }
} catch (error) {
    console.log("Lỗi parse JSON: " + error.message);
    $done({});
}
