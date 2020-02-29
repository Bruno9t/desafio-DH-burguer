const pedidos = require('../data/arrayPedidos') 

const {calcularTotal,verificarDadosDoPedido} =require('../funcoesAuxiliares/funcoes')


const adicionarPedido = (pedido) => {
    let dentroDoCardapio=verificarDadosDoPedido(pedido)
    if(dentroDoCardapio.length){
        pedidos.push({
            numero:pedidos.length+1,
            itens:dentroDoCardapio,
            total:calcularTotal(dentroDoCardapio)
        })
        return `<h1>Itens ${dentroDoCardapio} estão no cardápio e foram adicionados</h1>`
    }else{
        return `<h1>Não há esses itens no cardapio!</h1>`
    }
}

const listarPedidos = (pedidos) => {
    let lista = `<h1>Pedidos<h1></br>`
    for (let pedido of pedidos){
      lista += `
      <ul>
        <li>Número: ${pedido.numero}</li>
        <li>Itens: ${pedido.itens} </li>
        <li>Total: ${pedido.total} reais</li> 
      </ul></br>
      ` 
    }
    return lista;
}


module.exports={
    adicionarPedido,
    listarPedidos,
    pedidos
}