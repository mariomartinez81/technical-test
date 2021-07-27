const express = require('express');
const { signup, signin } = require('../controllers/auth.controllers');
const getUsers = require('../controllers/getUsers');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/allusers', getUsers);

module.exports = router;
