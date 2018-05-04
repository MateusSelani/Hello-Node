const express = require('express');
const app = express();

    /* Extensão EJS p/ páginas HTML */
app.set('view engine', 'ejs');

    /* Página de Home */
app.get('/', function(req, res){
    res.render('site/Home');
});

    /* Página de Contato */
app.get('/contato', function(req, res){
    res.render('site/Contato');
});

    /* Server porta 8000 */
app.listen(8000, function(){
    console.log("localhost: 8000");
});