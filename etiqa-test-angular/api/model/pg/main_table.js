const Sequelize = require('sequelize');
const PgModel = require('../../package/pg-model');

const connection = process.env.DATABASE_URL;
// const connection = "postgresql://localhost:5432/CDN";

const attributes = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  phone_no: Sequelize.STRING,
  skillsets: Sequelize.STRING,
  hobby: Sequelize.STRING,
};

const PgMainTable = new PgModel(connection, 'main_table', attributes);

module.exports = PgMainTable;
