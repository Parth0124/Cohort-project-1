var sendObj = {
    method: "GET"
}

function callBackFn(result)
{
    console.log(result)
} 

fetch("http://localhost:3000/handleSum?counter=10", sendObj).then(callBackFn);