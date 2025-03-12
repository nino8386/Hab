var modifiedHeaders = $request.headers;
if (!$request.url.includes("users/email_account")) {
    delete modifiedHeaders["User-Agent"];
    delete modifiedHeaders["Authorization"];
}
$done({ headers: modifiedHeaders });
