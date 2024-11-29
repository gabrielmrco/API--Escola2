const Professor = require('../models/Professor');

module.exports = {
  async listar(req, res) {
    try {
      const professores = await Professor.find();
      res.status(200).json(professores);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar professores', error });
    }
  },
  async criar(req, res) {
    try {
      const professor = new Professor(req.body);
      await professor.save();
      res.status(201).json(professor);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar professor', error });
    }
  },
  async atualizar(req, res) {
    try {
      const professor = await Professor.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(professor);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar professor', error });
    }
  },
  async remover(req, res) {
    try {
      await Professor.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Professor removido com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao remover professor', error });
    }
  },
};
