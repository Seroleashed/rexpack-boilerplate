import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.dev.config.js";

const app = express(),
  DIST_DIR = __dirname,
  HOME_HTML_FILE = path.join(DIST_DIR, "index.html"),
  compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(
  webpackHotMiddleware(compiler, {
    log: console.log,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000
  })
);

app.get("*", (req, res) => {
  res.sendFile(HOME_HTML_FILE);
});

const PORT = process.env.PORT ? process.env.PORT : 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
