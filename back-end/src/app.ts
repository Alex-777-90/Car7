//ENV variables
require("dotenv").config();

import express from "express";
import config from "config";

const app = express();

// JSON  middleware
app.use(express.json());

//routes
import productRouter from "./routes/productRouter";


app.use("/productApi/",productRouter)


app.listen(3001,() => {
   console.log(`Aplicação está funcionando na porta : 3001`)
})