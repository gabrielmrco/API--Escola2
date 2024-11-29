const Sala = require('../models/Sala');

module.exports = {
  async listar(req, res) {
    try {
      const salas = await Sala.find();
      res.status(200).json(salas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar salas', error });
    }
  },
  async criar(req, res) {
    try {
      const sala = new Sala(req.body);
      await sala.save();
      res.status(201).json(sala);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar sala', error });
    }
  },
  async atualizar(req, res) {
    try {
      const sala = await Sala.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(sala);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar sala', error });
    }
  },
  async remover(req, res) {
    try {
      await Sala.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Sala removida com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao remover sala', error });
    }
  },
};
