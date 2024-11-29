const mongoose = require('mongoose');

const TurmaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  codigo: { type: String, required: true, unique: true }, // Código único da turma
  curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true }, // Referência ao curso
  disciplina: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina', required: true }, // Referência à disciplina
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor', required: true }, // Professor responsável
  sala: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala' }, // Número ou nome da sala
  horario: { type: String }, // Exemplo: "Segunda e Quarta, 14h-16h"
  alunos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Aluno' }], // Lista de alunos matriculados
});

module.exports = mongoose.model('Turma', TurmaSchema);
