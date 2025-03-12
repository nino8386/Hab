try {
    let obj = JSON.parse($response.body);

    // Kiểm tra nếu phản hồi có dữ liệu quota không
    if (!obj.features) {
        obj.features = {};
    }

    // Mở khóa AI Explain & Transcribe
    obj.features["ai-explain"] = { "quota": 999999, "remaining": 999999 };
    obj.features["transcribe"] = { "quota": 999999, "remaining": 999999 };

    $done({ body: JSON.stringify(obj) });
} catch (error) {
    console.log("Lỗi parse JSON trong bypass_quota.js: " + error.message);
    $done({});
}
