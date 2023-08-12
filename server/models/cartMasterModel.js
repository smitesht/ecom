module.exports = (sequelize, DataTypes) => {
  const CartMaster = sequelize.define(
    "CartMaster",
    {
      id: {
        field: "cartId",
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cartDate: {
        field: "cartdate",
        type: DataTypes.DATE,
        allowNull: false,
      },
      paymentCompleted: {
        field: "paymentcompleted",
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { timestamps: false, tableName: "cartmaster" }
  );

  return CartMaster;
};
