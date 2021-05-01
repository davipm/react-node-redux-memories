import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import path from "path";

import connectDb from "./config/db";
import postRouters from "./routes/postRoute";

connectDb().then(() => console.log("Database connected"));

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.use(postRouters);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Memories running in port ${process.env.PORT}`);
});
