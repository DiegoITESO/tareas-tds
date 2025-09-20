import express from "express";
import newsRoutes from "./app/routes/news";
import topHeadlinesRoutes from "./app/routes/topHeadlines";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use("/news", newsRoutes);
app.use("/top-headlines", topHeadlinesRoutes);

app.get("/", (req, res) => {
  res.send("api works!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

