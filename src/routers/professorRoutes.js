const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.get('/', professorController.listar);
router.post('/', professorController.criar);
router.put('/:id', professorController.atualizar);
router.delete('/:id', professorController.remover);

module.exports = router;