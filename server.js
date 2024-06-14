const os = require("os"); // will implement clustoring 
const fs = require("fs");
const http = require("http");
const url = require("url");
const ip = require("request-ip");

// const myserver = (req, res) => {
//   console.log("server created");
//   console.log(req);
//   console.log(res);
//   //   res.send("hellooo");
//   res.end("Homeeeee");
// };

// const server = http.createServer(myserver)

const server = http.createServer((req, res) => {
  console.log("server created");
  const newUrl = url.parse(req.url, true);
  console.log(newUrl.pathname);

  //   switch (newUrl.pathname) {
  //     case "/":
  //       res.end("Home page");
  //       break;

  //     default:
  //       res.end("Page not Found");
  //       break;
  //   }

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  //   const data = `Request Method: ${req.method}, Request Time: ${
  //     new Date().toISOString()
  //   }, Request Pathname: ${newUrl.pathname}, Request Hostname: ${newUrl.host}\n`;

  const data = `
  Request Time: ${new Date().toLocaleTimeString()}, 
  Request Method: ${req.method}, 
  Request Pathname: ${newUrl.pathname}, 
  Request Host: ${req.headers.host}, 
  Location: ${req.headers.location}, 
  Request IP: ${ip.getClientIp(req)}, 
  Request Headers: ${JSON.stringify(req.headers)}, 
  Query Parameters: ${JSON.stringify(newUrl.query)}\n`;

  if (newUrl.pathname && newUrl.pathname != "/favicon.ico") {
    if (!fs.existsSync("./logs")) {
      fs.mkdir("./logs");
      console.log("directory created");
    }
    fs.appendFile(`./logs/logFile - ${getCurrentDate()}.txt`,data, (data, error) => {
        if (error) {
          console.log("Error writing file");
        } else {
          console.log("appended file");
        }
      }
    );
  }

  res.end("Appended");
  console.log(req.method);
});

server.listen(8000, () => {
  console.log("server listening");
});
