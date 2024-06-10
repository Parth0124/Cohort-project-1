const jwt = require("jsonwebtoken");  //jsonwebtoken is the liv=brary used for encryption.

const secret = 'keyforencrypion'  // secret is the variable that consists fo a logic that only the server knows used for encrypting and decrypting.

let ans = jwt.sign("abc", secret);
console.log(ans);  //converted the abc string into encryption

let accountCredentials = jwt.sign({
    username: "randomkiller456",
    password: "22bcs080"
}, secret);
console.log(accountCredentials)  //encrypted the object of accountCredentials containing passwords and username.

jwt.verify(ans, secret, (err, originalString) => {
    if(err)
        {
            console.log("There was error decrypting your original string")
        }
        else
        {
            console.log("The initial string sent was " + originalString )
        }
})

jwt.verify(accountCredentials, secret, (err, userDetails) => {
    if(err)
    {
        console.log("Canot get the user credentials right now. Please try later.")
    }
    else
    {
        console.log("The username and password of the user are " + userDetails.username + " & " + userDetails.password + " respectively. ")
    }
})