const rolService = require('../services/rolService');

exports.crearRol = async (req, res) => {
  try {
    const rol = await rolService.crearRol(req.body);
    res.status(201).json(rol);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

exports.obtenerRoles = async (req, res) => {
  try {
    const roles = await rolService.obtenerRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.obtenerRolPorId = async (req, res) => {
  try {
    const rol = await rolService.obtenerRolPorId(req.params.id);
    if (!rol) {
      return res.status(404).json({ mensaje: 'Rol no encontrado' });
    }
    res.status(200).json(rol);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

exports.actualizarRol = async (req, res) => {
  try {
    const rolActualizado = await rolService.actualizarRol(req.params.id, req.body);
    res.status(200).json(rolActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
}

exports.eliminarRol = async (req, res) => {
  try {
    const resultado = await rolService.eliminarRol(req.params.id);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};