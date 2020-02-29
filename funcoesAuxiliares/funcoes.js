const cardapios =require('../data/arrayCardapios')

function formatarString(string){
    if(string===undefined){
        return false
    }else{
    return (string.toLocaleLowerCase()
    .split(' ').join('').replace('-',''))
    }
}

function listarNomes(cardapios){
    let nomes = []

    for(let cardapio of cardapios){
        nomes.push(formatarString(cardapio.nome))
    }

    return nomes;
}

function verificarDados(cardapio){
    if(!listarNomes(cardapios).includes(formatarString(cardapio.nome))){
        for(let prop in cardapio){
            if(!cardapio[prop]){
                return false
            }
        }
        return true
    }else{
        return false
    }
}
function verificarDadosDoPedido(itens){
    let dentroDoCardapio = []
    let verificar = itens.map((item,i)=>{
        if(listarNomes(cardapios).includes(formatarString(item))){
            dentroDoCardapio.push(i)
            return true
        }else{
            return false
        }
    })
    if(dentroDoCardapio.length){
        let achados = dentroDoCardapio.map(e=>{
            return itens[e] 
        })
        return achados
    }
    return dentroDoCardapio
}

function calcularTotal(itens){
    let precos= itens.map(item=>{
        for(let cardapio of cardapios){
            if(formatarString(cardapio.nome)===formatarString(item)){
                return cardapio.preco
            }
        }
    })
    return precos.reduce((acumulado,atual)=>acumulado+atual)
}

module.exports={
    formatarString,
    verificarDados,
    listarNomes,
    verificarDadosDoPedido,
    calcularTotal
}