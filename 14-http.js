//Its An One Of Big Inbuild topic But Just For Basic Fontamental Thing This Ok We See More In Furture

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home Page...");
  } else if (req.url === "/about") {
    res.end("Its An About Page...");
  } else {
    res.end(`<h1>Oops....!</h1>
    <p>Hai Guys There Is No Page that u Searching For....</p>
    <a href="/">Go Back</a>`);
  }
});
server.listen(4000);

//The Above Code Is About Creating Simple Http Api with Home Page And About Page...
