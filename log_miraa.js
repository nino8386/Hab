if ($response && $response.body) {
    var obj = JSON.parse($response.body);
    obj.quota = 999999;
    obj.remaining = 999999;
    obj.isPro = true;
    $done({body: JSON.stringify(obj)});
} else {
    $done({});
}
