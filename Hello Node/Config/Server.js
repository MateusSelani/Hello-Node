    /* Configuracoes Servidor */
module.exports = function(){

const express = require('express');
const app = express();

    /* Extensão EJS p/ páginas HTML */
app.set('view engine', 'ejs');
    /* Caminho para pasta views */
app.set('views','./App/views');
    
    /* Caminho para rotas */
var rotas = require('../App/Rotas/web');
rotas(app);

    /* Adicionando Banco de Dados */
 var db = require('./db');
 var con = db();

    /* Server porta 8000 */
app.listen(8000, function(){
    console.log("localhost: 8000");
});

};