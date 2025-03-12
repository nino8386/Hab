var modifiedHeaders = $request.headers;
delete modifiedHeaders["User-Agent"];
delete modifiedHeaders["Authorization"];
$done({ headers: modifiedHeaders });
