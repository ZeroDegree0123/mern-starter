const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
console.log('router Hit')
router.post('/login', usersCtrl.login);

module.exports = router;



