const express = require('express');
const router = express.Router();
const MSSVController = require('../controllers/mssvController');

router.get('/', MSSVController.getOne);
router.post('/', MSSVController.addOne);

module.exports = router;
