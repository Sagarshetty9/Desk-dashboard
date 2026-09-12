import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http:localhost:3000", "http://localhost:5173"],  //Frontend links
  }),
);

export default app;
