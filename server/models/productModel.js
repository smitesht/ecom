module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        field: "productId",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        field: "title",
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        field: "description",
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        field: "price",
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      image: {
        field: "image",
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false, tableName: "product" }
  );

  return Product;
};
