const express = require('express');
const app = express();

const cardapioRotas = require('./route/cardapios');
const pedidoRotas = require('./route/pedidos') 

app.use(cardapioRotas);
app.use(pedidoRotas)

app.listen(3000, ()=> {
    console.log('Servindo na porta 3000!')
})