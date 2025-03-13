import express from "express";
import diaryRouter from "./routes/diaries";
const app = express();
app.use(express.json());

const port = 3000;

app.get("/ping", (_, res) => {
  console.log(`Someone pinged /ping ${new Date().toLocaleDateString()}`);
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
