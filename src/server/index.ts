
import express from "express";


export const app = express();
app.get("/api/test", (_, res) =>
  res.json({ greeting: "Hello!" }));


if (!process.env["VITE"]) {
  const frontEndFiles = process.cwd() + "/dist";
  app.use(express.static(frontEndFiles));
  app.get("/*", (_, res) => {
    res.send(frontEndFiles + "/index.html");
  })
  app.listen(process.env["PORT"])
}