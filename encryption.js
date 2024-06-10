const jwt = require("jsonwebtoken");  //jsonwebtoken is the liv=brary used for encryption.

const secret = 'keyforencrypion'  // secret is the variable that consists fo a logic that only the server knows used for encrypting and decrypting.

let ans = jwt.sign("abc", secret);
console.log(ans);  //converted the abc string into encryption

let accountCredentials = jwt.sign({
    username: "randomkiller456",
    password: "22bcs080"
}, secret);
console.log(accountCredentials)