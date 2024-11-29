const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  duracao: { type: Number, required: true }, // Duração em meses, por exemplo
  descricao: { type: String },
  ativo: { type: Boolean, default: true },
});

module.exports = mongoose.model('Curso', CursoSchema);