import express from "express";
import serverless from "serverless-http";

const app = express();

app.use("/api", async (req, res) => {
  const response = await fetch(`https://backend-scolastico.com${req.url}`);
  const data = await response.json();
  res.json(data);
});

export const handler = serverless(app);
