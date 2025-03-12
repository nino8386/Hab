try {
    let obj = JSON.parse($response.body);

    obj.entitlements = {
        "premium": {
            "expires_date": "2099-12-31T23:59:59Z",
            "product_identifier": "com.miraa.premium"
        }
    };

    $done({ body: JSON.stringify(obj) });
} catch (error) {
    console.log("Lỗi parse JSON: " + error.message);
    $done({});
}
