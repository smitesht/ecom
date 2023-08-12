const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

sequelize
  .authenticate()
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Categories = require("./categoryModel")(sequelize, DataTypes);
db.Products = require("./productModel")(sequelize, DataTypes);
db.Customers = require("./customerModel")(sequelize, DataTypes);
db.Logins = require("./loginModel")(sequelize, DataTypes);
db.CartMasters = require("./cartMasterModel")(sequelize, DataTypes);
db.CartDetails = require("./cartDetailsModel")(sequelize, DataTypes);

//====== One-To-Many: Category => Product
db.Categories.hasMany(db.Products, {
  foreignKey: { name: "categoryId", allowNull: false },
  as: "Product",
});
db.Products.belongsTo(db.Categories, {
  foreignKey: { name: "categoryId", allowNull: false },
  as: "Category",
});
// **************************************//

//====== One-To-One: Customer => Login
db.Customers.hasOne(db.Logins, {
  foreignKey: { name: "customerId", unique: true },
  as: "Login",
});

db.Logins.belongsTo(db.Customers, {
  foreignKey: { name: "customerId", unique: true },
  as: "Customer",
});

// **************************************//

//====== One-To-Many: Customer => Cart

db.Customers.hasMany(db.CartMasters, {
  foreignKey: "customerId",
  as: "CustomerCart",
});

db.CartMasters.belongsTo(db.Customers, {
  foreignKey: "customerId",
  as: "CartCustomer",
});

//====== One-To-Many: Cart => CartDetails

db.CartMasters.hasMany(db.CartDetails, {
  foreignKey: { name: "cartId" },
  as: "CartDetails",
});

db.CartDetails.belongsTo(db.CartMasters, {
  foreignKey: { name: "cartId" },
  as: "CartMasterDetails",
});

//====== One-To-Many: Cart => Products

db.Products.hasMany(db.CartDetails, {
  foreignKey: { name: "productId" },
  as: "ProductCart",
});

sequelize
  .sync({ force: false })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

module.exports = db;
