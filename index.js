const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));

app.listen(3000, function(){
    console.log("Servidor no ar - Porta : 3000")
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/segunda.html');
});

app.get('/segunda', function(req, res){
    res.sendFile(__dirname + '/views/terceira.html');
});

app.get('/terceira', function(req, res){
    res.sendFile(__dirname + '/views/quarta.html');
});

app.get('/quarta', function(req, res){
    res.sendFile(__dirname + '/views/primeira.html');
});


