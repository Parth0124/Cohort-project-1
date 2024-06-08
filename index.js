const express = require("express");
const bodyParser = require("body-parser"); // External library for parsing and extracting body from postman
const app = express();
const port = 3000;

app.use(bodyParser.json()); // Returns or adds a middleware that extracts the body.

// Calculate the sum from 1 to counter
function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
}

function calculateMul(counter) {
  var answer = 1;
  for (var i = 1; i <= counter; i++) {
    answer = answer * i;
  }
  return answer;
}

function handleFirstRequest(req, res) {
  var counter = req.body.counter;

  var calculatedSum = calculateSum(counter);
  var calculatedMul = calculateMul(counter);

  var answerObject = {
    sum: calculatedSum,
    mul: calculatedMul,
  };

  res.status(200).send(answerObject);
}

//handleFirst Request with status code simplification
// function handleFirstRequest(req, res) {
//   console.log(req.body);
//   var counter = req.body.counter;
//   if (counter < 100000) {
//     var calculatedSum = calculateSum(counter);
//     console.log(calculatedSum);
//     var answer = "The calculated sum upto " + counter + " is " + calculatedSum;
//     res.send(answer);
//   } else {
//     res.status(411).send("The humber is too damn big!!");  //function curring. allows us to call multiple function
//   }
// }

function createUser(req, res) {
  res.send("Hello World!! This is createUser route!");
}

//use `` and write the html code between them for multiple lined html code or if you want to use "" make sure all of your html code is in a single line.
function givePage(req, res) {
  res.send(`<!DOCTYPE html>   
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello From Parth</title>
  </head>
  <body>
      <i>Hey Everyone!!!</i>
  </body>
  </html>`);
}

app.post("/handleSum", handleFirstRequest);
app.post("/createUser", createUser);
app.get("/", givePage);

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
