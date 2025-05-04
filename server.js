require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT;


// Rota principal
app.get("/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get('/ap', (req, res) => {
  const nome = req.query.nome;
  const idade = req.query.idade;

  res.send(`Olá, ${nome}. Sua idade é ${idade}.`);

});


// Iniciar o servidor
app.listen(port, () => {
  res.send(`Servidor rodando na porta ${port}`);
});
