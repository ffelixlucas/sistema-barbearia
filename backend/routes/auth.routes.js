const express = require("express");
const router = express.Router();

const { register, loginUser } = require("../controllers/auth.controller");
const { verifyToken } = require("../middlewares/auth"); // Importando o middleware

router.post("/register", register);
router.post("/login", loginUser);

// Protegendo a rota

router.get("/profile", verifyToken, (req, res) => {
  res.status(200).json({
    mensagem: "Acesso ao perfil permitido",
    user: req.user, // Dados do usuário decodificados do token
  });
});

module.exports = router;
