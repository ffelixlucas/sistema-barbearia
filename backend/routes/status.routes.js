const express = require('express');
const router = express.Router();

const statusController = require ('../controllers/status.controller')


//Rota de teste

router.get('/', statusController);

module.exports = router;