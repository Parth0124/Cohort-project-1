var sendObj = {
    method: "GET"
}

function logResponseBody(jsonBody)
{
    console.log(jsonBody)
}

function callBackFn(result)
{
    result.json().then(logResponseBody)  //extracted json from result and then sent it to logResponseBody which means basicaclly called another asyncronus fn in a asynchronus function.
} 

fetch("http://localhost:3000/handleSum?counter=10", sendObj).then(callBackFn);  //fetch is a library that helps u send request to the browser by taking a url from the user.