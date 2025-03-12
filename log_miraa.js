let url = $request.url;
let method = $request.method;
let headers = JSON.stringify($request.headers, null, 2);
let body = $request.body ? JSON.stringify($request.body, null, 2) : "No Body";

let responseBody = $response ? $response.body : "No Response Body";
let statusCode = $response ? $response.status : "No Status";

console.log(`\n[📌 Miraa API Log]`);
console.log(`🔹 URL: ${url}`);
console.log(`🔹 Method: ${method}`);
console.log(`🔹 Headers: ${headers}`);
console.log(`🔹 Request Body: ${body}`);
console.log(`🔹 Response Status: ${statusCode}`);
console.log(`🔹 Response Body: ${responseBody}`);

$done({body: responseBody});
