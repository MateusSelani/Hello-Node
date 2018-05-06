const express = require('express');
const app = express();

    /* Extensão EJS p/ páginas HTML */
app.set('view engine', 'ejs');
    /* Caminho para pasta views */
app.set('views','./App/views');

module.exports = app;