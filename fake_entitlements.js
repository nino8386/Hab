try {
    let body = $response.body;
    
    // Kiểm tra nếu phản hồi không phải JSON thì không thực hiện JSON.parse
    if (!body || body[0] !== "{" && body[0] !== "[") {
        console.log("Lỗi: Phản hồi không phải JSON hợp lệ!");
        $done({});
    } else {
        let obj = JSON.parse(body);
        obj.entitlements = {
            "pro": {
                "expires_date": "2099-12-31T23:59:59Z",
                "product_identifier": "com.miraa.premium"
            }
        };
        $done({ body: JSON.stringify(obj) });
    }
} catch (error) {
    console.log("Lỗi parse JSON: " + error.message);
    $done({});
}
