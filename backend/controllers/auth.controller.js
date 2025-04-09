const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Registart novos usuários

async function register(req, res) {
  try {
    const { nome, email, senha } = req.body;

    // Criptografar a senha com bcrypt
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const novoUsuario = await prisma.user.create({
      data: {
        nome,
        email,
        senha: senhaCriptografada,
      },
    });

    res.status(201).json({
      mensagem: "Usuario registrado com sucesso!",
      usuario: novoUsuario,
    });
  } catch (erro) {
    console.error("Erro ao registrar usuário:", erro);
    res.status(500).json({ mensagem: "Erro interno ao registrar usuario" });
  }
}

//Login

async function loginUser(req, res) {
  try {
    const { email, senha } = req.body;

    //Buscar usuário real no banco pelo email
    const usuario = await prisma.user.findUnique({
      where: { email },
    });

    //Verificando o email

    if (!usuario) {
      return res.status(401).json({ mensagem: "Credenciais invalida" });
    }

    // COmparar senha digitada com hash salvo
    const senhaConfere = await bcrypt.compare(senha, usuario.senha);

    if (!senhaConfere) {
      return res.status(401).json({ mensagem: "credenciais inválidas" });
    }

    // se email e senha estiverem certos
    res.status(200).json({ mensagem: "Login realizado com sucesso!" });
  } catch (erro) {
    console.error("Erro no login:", erro);
    res.status(500).json({ mensagem: "Erro interno no login" });
  }
}

module.exports = {
  register,
  loginUser,
};
