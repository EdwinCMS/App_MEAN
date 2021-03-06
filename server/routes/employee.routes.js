//modulo express: crear rutas de servidor
const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee.controller');

router.get('/', employee.getEmployees);
router.post('/', employee.createEmployee);
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.editEmployee);
router.delete('/:id', employee.deletedEmployee);

module.exports = router;
