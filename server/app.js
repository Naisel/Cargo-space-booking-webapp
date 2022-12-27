// // const express = require("express");
// // const http = require("http");
// // const path = require("path");

// // const app = express();
// // const server = http.createServer(app);
// // const PORT = process.env.PORT || 3000;
// // app.use(express.static(path.join(__dirname, "client")));

// // const Pool = require("pg").Pool;
// // require("dotenv").config();

// // const DB_URL = process.env.DATABASE_URL;

// // const pool = new Pool({
// //   connectionString: DB_URL,
// //   ssl: process.env.DATABASE_URL ? true : false,
// // });

// // /*--------------------------------------------------------------------------------------------------------------------- */

// // // Consumer queries

// // const getUsers = (request, response) => {
// //   pool.query("SELECT * FROM users", (error, results) => {
// //     if (error) {
// //       throw error;
// //     }
// //     console.log(results.rows);
// //   });
// // };
// // getUsers();

// // // server.listen(PORT, () => console.log(`server is running on ${PORT}`));

// const http = require("http");
// const path = require("path");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>Homepage new</h1>");
//   }
// });

// const PORT = process.env.PORT || 4000;

// server.listen(PORT, () => console.log(`server is running man on ${PORT}`));

const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { request, response } = require("express");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create
app.post("/insert", (request, response) => {});

//read

app.get("/getAll", (request, response) => {
  console.log("test");
});

app.listen(process.env.PORT, () => {
  console.log("app is running");
});
