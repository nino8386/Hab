let obj = JSON.parse($response.body);
obj.plan = "premium";
obj.expiry = "2099-12-31T23:59:59Z";
obj.active = true;
$done({ body: JSON.stringify(obj) });
