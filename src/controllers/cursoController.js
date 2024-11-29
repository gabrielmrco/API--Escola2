const Curso = require('../models/Curso');

module.exports = {
  async listar(req, res) {
    try {
      const cursos = await Curso.find();
      res.status(200).json(cursos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar cursos', error });
    }
  },
  async criar(req, res) {
    try {
      const curso = new Curso(req.body);
      await curso.save();
      res.status(201).json(curso);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar curso', error });
    }
  },
  async atualizar(req, res) {
    try {
      const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(curso);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar curso', error });
    }
  },
  async remover(req, res) {
    try {
      await Curso.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Curso removido com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao remover curso', error });
    }
  },
};
