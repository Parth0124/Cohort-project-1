const express = require("express");
const app = express();
const port = 3000;

function middleware1(req,res,next)
{
  console.log("From middleware1 " + req.headers.counter + "!!!");
  next();
}

app.use(middleware1);

//calculate the sum from 1 to 100
function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  console.log(req.headers);
  var counter=req.headers.counter;
  var calculatedSum = calculateSum(counter);
  console.log(calculatedSum);
  var answer="The sum calculated by the algorithm is " + calculatedSum;
  res.send(answer);
}

function createUser(req, res)
{
  res.send("Hello World!! This is createUser route!")
}

// app.get("/handleSum", handleFirstRequest);
app.post("/handleSum", handleFirstRequest);
app.post("/createUser", createUser);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

//reading data from file through two different ways.
// const fs = require('fs');

// //method 1:
// function readFileData(err, data)
// {
//     if (err)
//     {
//         console.log("Error reading from the file: ", err);
//     }
//     else
//     {
//         console.log(data.toString())
//     }
// }

// fs.readFile("demo.txt", readFileData);

//method 2:
// var data = fs.readFileSync('demo.txt');
// console.log(data.toString());

//write data in the file.
// var input= fs.writeFileSync("write.txt", "This is the input being encoded into the file.")
