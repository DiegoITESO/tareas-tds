import express from "express";
import routes from "./app/routes";

const app = express();
const port = 3000;

app.use(routes);

app.get("/", (req, res) => {
  res.send("api works!");
});

const server = app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

export default app;