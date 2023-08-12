const categoryController = require("../controllers/categoryController");
const express = require("express");
const categoryRouter = express.Router();

categoryRouter.post("/", categoryController.newCategory);
categoryRouter.get("/", categoryController.getAll);
categoryRouter.get("/:id", categoryController.getById);
categoryRouter.put("/:id", categoryController.updateCategory);
categoryRouter.delete("/:id", categoryController.deleteCat);

module.exports = categoryRouter;
