const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Configuração do ambiente
dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const disciplinaRoutes = require('./routes/disciplinaRoutes');
const professorRoutes = require('./routes/professorRoutes');
const alunoRoutes = require('./routes/alunoRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const turmaRoutes = require('./routes/turmaRoutes');
const salaRoutes = require('./routes/salaRoutes');

app.use('/api/disciplinas', disciplinaRoutes);
app.use('/api/professores', professorRoutes);
app.use('/api/alunos', alunoRoutes);
app.use('/api/cursos', cursoRoutes);
app.use('/api/turmas', turmaRoutes);
app.use('/api/salas', salaRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});