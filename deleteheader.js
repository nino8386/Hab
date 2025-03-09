var modifiedHeaders = $request.headers;

// Xóa các header có thể ảnh hưởng đến xác minh Pro
delete modifiedHeaders["User-Agent"];
delete modifiedHeaders["Authorization"];
delete modifiedHeaders["X-CapCut-Auth"];
delete modifiedHeaders["Referer"];
delete modifiedHeaders["Cookie"];

$done({headers: modifiedHeaders});
