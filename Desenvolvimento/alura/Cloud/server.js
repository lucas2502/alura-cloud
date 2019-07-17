const express = require('express');
let app = express();
let routes = require('./routes');
//Detecta enviroment
let env = process.env.NODE_ENV;

if(!env)
    env = 'development'

//Carrega configuração de acordo
let config = require=('./config/config;${env}.json');
//Conecta banco
require('./databse')(`mongodb://${config.databaseConfig.host}:27017/${config.databaseConfig.database}`)

//configura a porta pela variavel de ambiente ou usa a 3000 como padrão
const port = process.env.port || 3000

//Configura o arquiv de rotas
app.use(routes);

//Inicializa o servidos
app.listen(port, () => {
    console.lof(`Server initialiaed on port ${port}`)
})