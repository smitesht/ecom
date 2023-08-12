module.exports = (sequelize, DataTypes) => {
  const CartDetails = sequelize.define(
    "CartDetails",
    {
      id: {
        field: "cartdetId",
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      qty: {
        field: "qty",
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total: {
        field: "total",
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { timestamps: false, tableName: "cartdetails" }
  );

  return CartDetails;
};
