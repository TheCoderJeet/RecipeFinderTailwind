import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routers/routers.js";
import cors from "cors";
const app = express();
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());
// we link the router files to make our route easy
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Now the server is running on ${PORT}...`);
});
