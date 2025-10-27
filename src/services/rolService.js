const { Rol, sequelize } = require('../models');

class RolService {
  async crearRol (data) {
    const transaction = await sequelize.transaction();
    try {
      const rol = await Rol.create(data, { transaction });
      await transaction.commit();
      return rol;
    } catch (error) {
      await transaction.rollback();
      throw new Error(`Error al crear el rol: ${error.message}`);
    }
  }

  async obtenerRoles() {
    return await Rol.findAll();
  }

  async obtenerRolPorId(id) {
    return await Rol.findByPk(id);
  }

  async actualizarRol(id, data) {
    const transaction = await sequelize.transaction();
    try {
      const rol = await Rol.findByPk(id);
      if (!rol) {
        throw new Error('Rol no encontrado');
      }

      await rol.update(data, { transaction });
      await transaction.commit();
      return rol;
    } catch (error) {
      await transaction.rollback();
      throw new Error(`Error al actualizar el rol: ${error.message}`);
    }
  }

  async eliminarRol(id) {
    const transaction = await sequelize.transaction();
    try {
      const rol = await Rol.findByPk(id);
      if (!rol) {
        throw new Error('Rol no encontrado');
      }

      await rol.destroy({ transaction });
      await transaction.commit();
      return { mensaje: 'Rol eliminado correctamente' };
    } catch (error) {
      await transaction.rollback();
      throw new Error(`Error al eliminar el rol: ${error.message}`);
    }
  }
}

module.exports = new RolService();