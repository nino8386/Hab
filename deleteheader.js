if ($response && $response.body) {
    var obj = JSON.parse($response.body);
    obj.isPro = true;
    obj.subscription = "lifetime";
    obj.expiry = "2099-12-31T23:59:59Z";
    $done({body: JSON.stringify(obj)});
} else {
    $done({});
}
