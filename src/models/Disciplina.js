const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  codigo: { type: String, required: true, unique: true }, // Código único para a disciplina
  cargaHoraria: { type: Number, required: true }, // Carga horária total (em horas)
  curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true }, // Referência ao curso
  descricao: { type: String },
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);