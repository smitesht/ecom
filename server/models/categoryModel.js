module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        field: "categoryId",
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        field: "name",
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false, tableName: "category" }
  );

  return Category;
};
