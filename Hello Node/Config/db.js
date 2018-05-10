const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

var con = function(){

        /* Criando um banco mydb */
    const url = "mongodb://localhost:27017/mydb";

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Banco de Dados Criado!");
    db.close();
    });

};

module.exports = con;