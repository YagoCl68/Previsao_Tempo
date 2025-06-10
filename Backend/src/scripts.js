const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());

const key = "907dc9b49ff5035c385586da6e037c96";

server.get('/:cidade',async (req,res) => { 
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
     res.send(dados);
});

server.listen(3000 , ()=> {
    console.log('esta ligado na 3000');
});