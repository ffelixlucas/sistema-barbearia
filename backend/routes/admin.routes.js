const express = require("express");
const router = express.Router();

const { listarLeads } = require("../controllers/admin.controller");

router.get("/admin/leads", listarLeads);

module.exports = router;
