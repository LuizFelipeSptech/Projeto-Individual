var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function pegarDadosDashboard() {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    select count(id) qtdPartidas, 
(select count(id) from partida where resultado = "matou") qtdAssassinatos,
(select count(id) from partida where resultado = "poupou") qtdPoupadas, 
(select count(id) from usuario where atoPrioritario = 'poupou e matou') as qtdPoupouMatou
from partida;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    pegarDadosDashboard
};