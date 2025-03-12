try {
    let obj = JSON.parse($response.body);

    obj.subscriber = {
        "entitlements": {
            "premium": {
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
} catch (error) {
    console.log("Lỗi parse JSON: " + error.message);
    $done({});
}
