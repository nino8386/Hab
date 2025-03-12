var modifiedHeaders = $request.headers;
delete modifiedHeaders["User-Agent"];
$done({ headers: modifiedHeaders });
