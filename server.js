console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 kirish code
// app.use(express.static("public")); Middleware Design Pattern
app.use(express.static("public")); // browserdan kelgan zaproslar uchun (clientlarga ochib berish uchun)
app.use(express.json()); // kirib kelayotgan json ko'rinishidagi datani bizga objectga o'girib beradi
app.use(express(express.urlencoded({ extended: true }))); // html dan traditional form request dan post qilingan narsalarni qabul qilishga ishlatilinadi

// 2 Session code

// 3 Views code
// BSSR
app.set("views", "views");
app.set("view engine", "ejs"); // ejs orqali frontendni yasimiz backendni ichida

// 4 Routing code

// app.get("/hello", function (req, res) {
//   // res.end(`<h1> Hello World </h1>`);
//   res.end(`<h1 style="background: red"> Hello World by AUSTIN</h1>`); // localhost:3000/hello
// });
// app.get("/gift", function (req, res) {
//   res.end(`<h1> Siz sovg'alar bo'limidasiz </h1>`); // localhost:3000/gift
// });
app.post("/create-item", (req, res) => {
  // malumotni uzi bilan olib keladi
  console.log(req);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  // data base dan malumotni olish uchun get ishlatilinadi
  res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is running successfully on port: ${PORT}, http://localhost:${3000}`,
  );
});
