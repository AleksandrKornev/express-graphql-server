const { Router } = require('express');
const router = Router();


const users = require('./users');

router.get('/', async (req, res) => {
  res.json({
    message: 'Server work'
  });
})

router.use('/users', users);

module.exports = router;