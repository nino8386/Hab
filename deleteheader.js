var modifiedHeaders = $request.headers;
if (!$request.url.includes("users/email_account") && !$request.url.includes("users/verify_email")) {
    delete modifiedHeaders["User-Agent"];
}
$done({ headers: modifiedHeaders });
