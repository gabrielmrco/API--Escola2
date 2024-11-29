const Turma = require('../models/Turma');

module.exports = {
  async listar(req, res) {
    try {
      const turmas = await Turma.find()
        .populate('curso', 'nome')
        .populate('disciplina', 'nome')
        .populate('professor', 'nome')
        .populate('alunos', 'nome');
      res.status(200).json(turmas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar turmas', error });
    }
  },
  async criar(req, res) {
    try {
      const turma = new Turma(req.body);
      await turma.save();
      res.status(201).json(turma);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar turma', error });
    }
  },
  async atualizar(req, res) {
    try {
      const turma = await Turma.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(turma);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar turma', error });
    }
  },
  async remover(req, res) {
    try {
      await Turma.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Turma removida com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao remover turma', error });
    }
  },
};
