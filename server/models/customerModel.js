module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      id: {
        field: "customerId",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      firstName: {
        field: "firstname",
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        field: "lastname",
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        field: "email",
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        field: "phone",
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        field: "address",
        type: DataTypes.TEXT,
        allowNull: false,
      },
      city: {
        field: "city",
        type: DataTypes.STRING,
        allowNull: false,
      },
      pincode: {
        field: "pincode",
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false, tableName: "customer" }
  );

  return Customer;
};
