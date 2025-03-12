let obj = JSON.parse($response.body);
obj.features = {
    "ai-explain": { "quota": 999999, "remaining": 999999 },
    "transcribe": { "quota": 999999, "remaining": 999999 }
};
$done({ body: JSON.stringify(obj) });
