const Pedido = require('../model/Pedido')

module.exports = {
    index(req,res){
        res.send(Pedido.listarPedidos(Pedido.pedidos))
    },
    store(req,res){
        let itens =(req.query.itens).split(',')
        res.send(Pedido.adicionarPedido(itens))
    }
}