const {calcularTotal}=require('../funcoesAuxiliares/funcoes')
const pedidos = 
[
{
    numero:1,
    itens:["X-Burguer","Salada"],
    total:calcularTotal(["X-Burguer","Salada"])
},
{
    numero:2,
    itens:['Salada','Frango'],
    total:calcularTotal(['Salada','Frango'])
},
{
    numero:3,
    itens:['Cachaça',"Big-Burguer"],
    total:calcularTotal(['Cachaça',"Big-Burguer"])
}
]

module.exports = pedidos;