var dashboardModel = require("../models/dashboardModel");

function pegarDadosDashboard(req, res) {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    dashboardModel.pegarDadosDashboard()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.json(erro.sqlMessage);
            }
        );
}


module.exports = {
    pegarDadosDashboard
}