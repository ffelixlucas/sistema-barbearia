const jwt = require("jsonwebtoken");

// Middleware para verificar o JWT

function verifyToken(req, res, next) {
  const token = req.headers["authorization"]; // Pega o token do cabeçalho

  if (!token) {
    return res
      .status(403)
      .json({ mensagem: "Acesso negado. Token não encontrado." });
  }

  // Verifica o Token
  jwt.verify(token, process.env.JWT_SECRET, (erro, decoded) => {
    if (error) {
      return res.status(403).json({ mensagem: "Token inválido." });
    }

    // Adiciona o usuário decodificado á requisição
    req.user = decoded;
    next(); // Chama a proxima função
  });
}

module.exports = { verifyToken };
