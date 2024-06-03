var batalhaModel = require("../models/batalhaModel");

function cadastrarBatalha(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // var nome = req.body.nomeServer;

    var idUsuario = req.body.idServer;
    var resultado = req.body.resultadorServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    batalhaModel.cadastrarBatalha(idUsuario, resultado)
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
    cadastrarBatalha
}