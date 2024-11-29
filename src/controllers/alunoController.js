const Aluno = require('../models/Aluno');

module.exports = {
  async listar(req, res) {
    try {
      const alunos = await Aluno.find();
      res.status(200).json(alunos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar alunos', error });
    }
  },
  async criar(req, res) {
    try {
      const aluno = new Aluno(req.body);
      await aluno.save();
      res.status(201).json(aluno);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar aluno', error });
    }
  },
  async atualizar(req, res) {
    try {
      const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(aluno);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar aluno', error });
    }
  },
  async remover(req, res) {
    try {
      await Aluno.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Aluno removido com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao remover aluno', error });
    }
  },
};