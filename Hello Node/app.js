/* Express e ejs */
var app = require('./Config/Server');

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