const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


// Rota principal
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
