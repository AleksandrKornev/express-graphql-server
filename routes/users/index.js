const { Router } = require('express');
const router = Router();

const users = require('../../services/users');

router.get('/', async (req, res) => {
  res.json(await users.getUsers());
})

module.exports = router;