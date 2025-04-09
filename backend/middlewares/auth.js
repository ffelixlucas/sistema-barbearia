const jwt = require("jsonwebtoken");

// Middleware para verificar o JWT

function verifyToken(req, res, next) {
  const token = req.headers["authorization"]; // Pega o token do cabeçalho

  if (!token) {
    return res
      .status(403)
      .json({ mensagem: "Acesso negado. Token não encontrado." });
  }

  // Remove o "Bearer" do token (caso tenha)
  const tokenFinal = token.split(" ")[1];

  // Verifica o Token
  jwt.verify(tokenFinal, process.env.JWT_SECRET, (erro, decoded) => {
    if (erro) {
      console.log("Erro ao verificar o token:", erro); // Adiciona um log do erro
      return res.status(403).json({ mensagem: "Token inválido." });
    }

    // Adiciona o usuário decodificado á requisição
    req.user = decoded;
    next(); // Chama a proxima função
  });
}

module.exports = { verifyToken };
