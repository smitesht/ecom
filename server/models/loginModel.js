module.exports = (sequelize, DataTypes) => {
  const Login = sequelize.define(
    "Login",
    {
      id: {
        field: "loginId",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        field: "username",
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        field: "password",
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false, tableName: "login" }
  );

  return Login;
};
