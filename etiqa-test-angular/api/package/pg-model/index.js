const Sequelize = require('sequelize');

class PgModel {
  constructor(connection, table, attributes) {
    this.sequelize = new Sequelize(connection, {
      logging: false,
      define: {
        freezeTableName: true,
        timestamps: false,
      },
    });
    this.model = this.sequelize.define(table, attributes);
  }

  count({ where, group, attributes }) {
    return this.model.count({ where, group, attributes });
  }

  findOne({ where }) {
    return this.model.findOne({ where });
  }

  findAll({
    where, limit, offset, order, attributes, group,
  }) {
    return this.model.findAll({
      where, limit, offset, order, attributes, group,
    });
  }

  findById(id) {
    return this.model.findByPk(id);
  }

  create(object) {
    return this.model.create(object);
  }

  delete({ where }) {
    return this.model.destroy({ where });
  }

  max({ field, where }) {
    return this.model.max(field, { where });
  }

  update({ object, where }) {
    return this.model.update(object, { where });
  }
}

module.exports = PgModel;
