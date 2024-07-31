const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Rota para criar um funcionário
router.post('/employees', employeeController.create);

module.exports = router;
