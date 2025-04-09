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

    res
      .status(201)
      .json({
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

    // Simulando usuário que já está no banco com senha criptografada
    const usuarioSimulado = {
      email: "lucas@teste.com",
      senhaCriptografada:
        "$2b$10$Ao37b4P2.RkbiazF9D08juqQxfyfM3iZT0zf6F/rw85Hi9EPcK0Ua", // hash salvo do cadastro
    };

    //Verificando  se email e senha conferem

    if (email !== usuarioSimulado.email) {
      return res.status(401).json({ mensagem: "Credenciais inválidas" });
    }

    // COmparar senha digitada com hash salvo
    const senhaConfere = await bcrypt.compare(
      senha,
      usuarioSimulado.senhaCriptografada
    );

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
