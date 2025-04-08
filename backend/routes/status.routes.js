const express = require('express');
const router = express.Router();

//Rota de teste

router.get('/', (req, res) =>{
    res.send('Servidor está online 🚀');
});

module.exports = router;