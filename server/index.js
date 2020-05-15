import express from "express";
import db from "./src/DB/db";
const app = express();
import apiPort from "../settings.json"

app.get("/api/v1/todos", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "todos retrieved successfully",
    todos: db,
  });
});



app.listen(apiPort, () => {
  console.log(`server running on port ${PORT}`);
});
