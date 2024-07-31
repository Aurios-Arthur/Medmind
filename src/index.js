const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições
app.use(express.json());
app.use(cors()); // Adicione esta linha

// Importar e usar as rotas
const routes = require('./routes');
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
