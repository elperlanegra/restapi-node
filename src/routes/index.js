const { Router } = require('express');
const app = require('../app');

const router = Router();

router.get('/', (req, res) => res.json({ mesage: 'Hello World desde docker!' }));

module.exports = router;
