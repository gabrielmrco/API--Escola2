const mongoose = require('mongoose');

const SalaSchema = new mongoose.Schema({
  nome: { type: String, required: true }, // Nome ou número da sala (exemplo: "Sala 202")
  capacidade: { type: Number, required: true }, // Capacidade máxima de alunos
  tipo: { type: String, enum: ['Física', 'Virtual'], required: true }, // Tipo da sala
  localizacao: { type: String }, // Local físico (prédio, andar) ou link (para salas virtuais)
  equipamentos: [{ type: String }], // Lista de equipamentos disponíveis
});

module.exports = mongoose.model('Sala', SalaSchema);