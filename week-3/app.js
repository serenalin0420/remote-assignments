const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("<h2>Hello, My Server!</h2>");
});

//getData
app.get("/getData", (req, res) => {
  let { number } = req.query;
  number = Number(number);
  let result;
  if (isNaN(number) || number === "") {
    res.send("Lack of Parameter");
    return;
  } else if (typeof number === "number" && number > 0) {
    //if n=5 get the result of 1+2+....+5 in the page.
    result = ((number + 1) * number) / 2;
    res.send("the result is " + result);
  } else {
    res.send("Wrong Parameter");
  }
});
//cookie-1
app.get("/myName", (req, res) => {
  res.cookie("name", "Serena"); //從server送出
  let { name } = req.cookies;
  console.log(name);
  res.send(`<h2>${name}</h2>`);
});

/*

// cookie-2
const path = require("path");
app.get("/myName", (req, res) => {
  if (req.cookies.username) {
    res.send(`<h2>${req.cookies.username}</h2>`);
  } else {
    res.sendFile(path.join(__dirname, "public/trackname.html"));
    console.log("no found cookie");
  }
});

app.get("/trackName", (req, res) => {
  let { username } = req.query;
  res.cookie("username", username);
  res.redirect("back");
});
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
