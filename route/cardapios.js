const express = require('express');
const router = express.Router();

const controller = require('../controller/cardapioController');


router.get('/cardapios', controller.index);
router.get('/cardapios/criar',controller.store)
router.get('/cardapios/buscar/:categoria', controller.search);


module.exports = router;
