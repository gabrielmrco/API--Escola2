const express = require('express');
const router = express.Router();
const turmaController = require('../controllers/turmaController');

router.get('/', turmaController.listar);
router.post('/', turmaController.criar);
router.put('/:id', turmaController.atualizar);
router.delete('/:id', turmaController.remover);

module.exports = router;