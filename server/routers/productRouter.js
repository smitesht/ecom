const productController = require("../controllers/productController");
const express = require("express");
const productRouter = express.Router();

productRouter.post("/", productController.newProduct);
productRouter.get("/", productController.getAll);
productRouter.get("/:id", productController.getById);
productRouter.put("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);

module.exports = productRouter;
