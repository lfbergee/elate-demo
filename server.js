const path = require("path");
const express = require("express");
const app = require("./public/build/App.js");

const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.get("*", function (req, res) {
  const { html } = app.render({ url: req.url });

  res.write(`
  <!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <title>Elate - seniorkonsulenter</title>

    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="stylesheet" href="/global.css" />
    <link rel="stylesheet" href="/build/bundle.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap"
      rel="stylesheet"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
    <script defer src="/build/bundle.js"></script>
  </head>

  <body>
  <div id="app">${html}</div>
  </body>
</html>`);

  res.end();
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}`));
