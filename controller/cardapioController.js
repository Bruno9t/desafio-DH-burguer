const Cardapio = require('../model/Cardapio')

module.exports = {
    index (req,res) {
        res.send(Cardapio.listarCardapios(Cardapio.cardapios))
    },
    search(req,res){
        let categoria = req.params.categoria
        res.send(Cardapio.buscarCardapio(categoria))
    },
    store(req,res){
        let data = req.query
        console.log(data)
        res.send(Cardapio.adicionarCardapio(data))
    }
}