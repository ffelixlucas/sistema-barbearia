import bcrypt from "bcryptjs";

const senha = "Lucas12162303.";
const hash = await bcrypt.hash(senha, 10);
console.log("Hash da senha:", hash);
