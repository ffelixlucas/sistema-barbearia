import bcrypt from "bcryptjs";

const senhaDigitada = "Lucas12162303.";
const hashSalvo =
  "$2b$10$uAtUb7yAcE6lzRJAIlsNyOHNNaasxaeN.wCNLRRY1v870QY75zXGa"; // substitua pelo hash que está no banco

const confere = await bcrypt.compare(senhaDigitada, hashSalvo);

if (confere) {
  console.log("✅ Senha confere com o hash!");
} else {
  console.log("❌ Senha NÃO confere com o hash.");
}
