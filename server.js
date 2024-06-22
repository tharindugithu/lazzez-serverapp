import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import dbConnection from "./connection/db.js";

dotenv.config();
const app = express();
app.use(morgan('combined'));
dbConnection();
app.use(cors({
  origin: "*",
  optionsSuccessStatus: 200
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/api",(req,res)=>{
     res.send("all good and done!")
})
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
