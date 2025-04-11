const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function listarLeads(req, res) {
  try {
    const leads = await prisma.user.findMany({
      where: {
        role: "OWNER",
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        createdAt: true,
      },
    });

    res.status(200).json(leads);
  } catch (erro) {
    console.error("Erro ao listar leads:", erro);
    res.status(500).json({ mensagem: "Erro interno ao buscar leads." });
  }
}

module.exports = {
  listarLeads,
};
