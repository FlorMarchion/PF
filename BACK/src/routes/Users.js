const { Router } = require("express");
const express = require("express");

const {
  getUsers,
  postUsers,
  putUsers,
  activeUsers,
} = require("../controllers/controllerUsers");

const router = Router();
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    let resultado = await getUsers();
    res.status(200).json(resultado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    let resultado = await postUsers(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { active } = req.body;
  if (active !== undefined) {
    try {
      let resultado = await activeUsers(id, active);
      res.status(200).json(resultado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    try {
      let resultado = await putUsers(id, req.body);
      res.status(200).json(resultado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
});

module.exports = router;
