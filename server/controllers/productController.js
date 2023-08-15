const db = require("../models");

const Product = db.Products;

const newProduct = async (req, resp) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description ? req.body.description : null,
      price: req.body.price,
      image: req.body.image,
      categoryId: req.body.categoryId,
    };

    const product = await Product.create(data);

    resp.status(200).json({ message: product });
  } catch (err) {
    console.log(err);
    resp.status(500).json({ message: "Error while creating new product" });
  }
};

const getAll = async (req, resp) => {
  const products = await Product.findAll({
    include: [
      {
        model: db.Categories,
        as: "Category",
      },
    ],
  });

  resp.status(200).json({ message: products });
};

const getById = async (req, resp) => {
  const id = req.params.id;

  const product = await Product.findByPk(id, {
    include: [
      {
        model: db.Categories,
        as: "Category",
      },
    ],
  });

  if (product === null) {
    resp.status(404).json({ message: "Not found" });
  } else {
    resp.status(200).json({ message: product });
  }
};

const updateProduct = async (req, resp) => {
  try {
    const id = req.params.id;

    const data = {
      title: req.body.title,
      description: req.body.description ? req.body.description : null,
      price: req.body.price,
      image: req.body.image,
      categoryId: req.body.categoryId,
    };

    const prod = await Product.update(data, { where: { id: id } });

    resp.status(200).json({ message: "Product updated" });
  } catch (err) {
    resp.status(500).json({ message: err });
  }
};

const deleteProduct = async (req, resp) => {
  try {
    const id = req.params.id;

    await Product.destroy({ where: { id: id } });
    resp.status(200).json({ message: "Deleted" });
  } catch (err) {
    req.status(500).json({ message: err });
  }
};

const addBulkProducts = async (req, resp) => {
  try {
    const prodarry = req.body;
    const prods = await Product.bulkCreate(prodarry);

    resp.status(200).json({ message: "Created bulk product" });
  } catch (err) {
    req.status(500).json({ message: err });
  }
};

module.exports = {
  newProduct,
  getAll,
  getById,
  updateProduct,
  deleteProduct,
  addBulkProducts,
};
