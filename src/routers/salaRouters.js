const express = require('express');
const router = express.Router();
const salaController = require('../controllers/salaController');

router.get('/', salaController.listar);
router.post('/', salaController.criar);
router.put('/:id', salaController.atualizar);
router.delete('/:id', salaController.remover);

module.exports = router;
