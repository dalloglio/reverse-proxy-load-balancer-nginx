import express from "express";
import os from "os";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello from ${os.hostname()}`);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
