const express = require("express"); // Corrigido para "express"
const path = require("path");
const port = 3333;

let caminhoInicial = path.join(__dirname, "src");

let app = express(); // Instância do servidor
app.use(express.static(caminhoInicial)); // Servidor estático

app.get("/", (req, res) => {
    res.sendFile(path.join(caminhoInicial, "index.html")); // Serve o arquivo index.html
});

app.listen(port, () => {
    console.log(`Server startup! On port ${port}`);
});
