const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const statusRoutes = require('./routes/status.routes');
const authRoutes = require('./routes/auth.routes');


app.use(express.json());
app.use(cors());

app.use('/api', statusRoutes);
app.use('/api', authRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
