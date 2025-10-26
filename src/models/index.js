const { sequelize } = require('../db');
const UsuarioModel = require('./Usuario');
const RolModel = require('./Rol');

const Usuario = UsuarioModel(sequelize);
const Rol = RolModel(sequelize);

Rol.hasMany(Usuario, {
  foreignKey: 'rolId',
  as: 'usuarios',
  onDelete: 'SET NULL'
});

Usuario.belongsTo(Rol, {
  foreignKey: 'rolId',
  as: 'rol'
});

module.exports = { sequelize, Usuario, Rol };