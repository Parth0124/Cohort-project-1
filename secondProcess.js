var sendObj = {
    method: "POST"
}

function callBackFn(result)
{
    console.log(result)
} 

fetch("http://localhost:3000", sendObj).then(callBackFn);