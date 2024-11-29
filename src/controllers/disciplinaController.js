const Disciplina = require('../models/Disciplina');

module.exports = {
  async listar(req, res) {
    try {
      const disciplinas = await Disciplina.find().populate('curso', 'nome');
      res.status(200).json(disciplinas);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar disciplinas', error });
    }
  },
  async criar(req, res) {
    try {
      const disciplina = new Disciplina(req.body);
      await disciplina.save();
      res.status(201).json(disciplina);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar disciplina', error });
    }
  },
  async atualizar(req, res) {
    try {
      const disciplina = await Disciplina.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json(disciplina);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar disciplina', error });
    }
  },
  async remover(req, res) {
    try {
      await Disciplina.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Disciplina removida com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao remover disciplina', error });
    }
  },
};
