const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT | 8181;
//const db = require("./models");
const categoryRouter = require("./routers/categoryRouter");
const productRouter = require("./routers/productRouter");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);

app.listen(PORT, () => {
  console.log("Port");
});
