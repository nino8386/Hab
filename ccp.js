let obj = JSON.parse($response.body);
obj.isPro = true;
obj.subscription = "lifetime";
obj.expiry = "2099-12-31T23:59:59Z";
console.log("CapCut Pro Patch Applied"); // Kiểm tra log
$done({body: JSON.stringify(obj)});
