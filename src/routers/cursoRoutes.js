const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

router.get('/', cursoController.listar);
router.post('/', cursoController.criar);
router.put('/:id', cursoController.atualizar);
router.delete('/:id', cursoController.remover);

module.exports = router;
