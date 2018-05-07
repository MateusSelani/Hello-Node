    /* Configuracoes Rotas */        
module.exports = function(app){

    /* Página de Home */
app.get('/', function(req, res){
res.render('site/Home');
});
    
    /* Página de Contato */
app.get('/contato', function(req, res){
res.render('site/Contato');
});

};