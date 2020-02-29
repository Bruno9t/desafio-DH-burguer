//base de dados
const cardapios = require('../data/arrayCardapios')
//funções auxiliares
const {formatarString,verificarDados} = require('../funcoesAuxiliares/funcoes')

//implementação
const listarCardapios = (cardapios) => {
    let lista = `<h1>Cardapios<h1></br>`
    for (let cardapio of cardapios){
      lista += `
      <ul>
        <li>Item: ${cardapio.nome}</li>
        <li>Preço: ${cardapio.preco} reais</li>
        <li>Categoria: ${cardapio.categoria}</li> 
      </ul></br>
      ` 
    }
    return lista;
}

const buscarCardapio = (categoria) =>{
    const busca = cardapios.filter((cardapio)=>{
        return formatarString(cardapio.categoria) == formatarString(categoria);
    });
    return listarCardapios(busca)
}

const adicionarCardapio = (cardapio)=>{
    if(verificarDados(cardapio)){
        cardapios.push({
            nome:cardapio.nome,
            preco:Number(cardapio.preco),
            categoria:cardapio.categoria,
        })

        return `<h1>${cardapio.nome} adicionado com sucesso!</h1>`
    }else{
        return `<h1>Erro: Já existe ou faltam dados para adicionar!</h1>`
    }
}


module.exports = {
    cardapios,
    listarCardapios,
    buscarCardapio,
    adicionarCardapio,
}