const express = require('express')
const router = express.Router()

const controller = require('../controller/pedidoController')

router.get('/pedidos',controller.index)
router.get('/pedidos/criar',controller.store)

module.exports = router