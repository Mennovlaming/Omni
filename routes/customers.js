const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/:id', customerController.getCustomerById);

module.exports = router;
