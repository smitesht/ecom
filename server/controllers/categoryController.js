const db = require("../models");

const Category = db.Categories;

const newCategory = async (req, resp) => {
  try {
    const data = {
      name: req.body.name,
    };

    const category = await Category.create(data);
    resp.status(200).json({ message: category });
  } catch (err) {
    console.log(err);
    resp.status(500).json({ message: "Error while creating category" });
  }
};

const getAll = async (req, resp) => {
  const catall = await Category.findAll({});

  resp.status(200).json({ message: catall });
};

const getById = async (req, resp) => {
  const id = req.params.id;
  const cat = await Category.findByPk(id);
  if (cat === null) {
    resp.status(404).json({ message: "Category does not exist" });
  } else {
    resp.status(200).json({ message: cat });
  }
};

const updateCategory = async (req, resp) => {
  try {
    const id = req.params.id;
    const cat = await Category.update(
      { name: req.body.name },
      { where: { id: id } }
    );

    resp.status(200).json({ message: "Record updated" });
  } catch (err) {
    resp.status(500).json({ message: "Error while updating category" });
  }
};

const deleteCat = async (req, resp) => {
  const id = req.params.id;
  await Category.destroy({ where: { id: id } });
  resp.status(200).json({ message: "Record deleted" });
};

module.exports = {
  newCategory,
  getAll,
  getById,
  updateCategory,
  deleteCat,
};
