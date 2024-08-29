const expresss = require("express");// criar o servidor local
const path = require ("path");// referenciar os caminhos dos arquivos 
const port = 3333;// porta do servidor

let caminhoInicial = path.join(__dirname, "src"); // juntar o arquivo atual com a pasta src

let app = expresss();// instancia de apicação do servidor 
app.use(expresss.static(caminhoInicial));// criação de um servidor estatico para rodar o caminho 

app.get("/", (req,res) => {// atravez do caminho ele fará um request e um response 
    res.sendFile(path.join(caminhoInicial,"index.html")) // enviar para o servidor o arquivo com caminho inicial e o index
});

app.listen (port, () =>{// definição da porta eb teste de funcionalidade do server
    console.log (`Server start up ! on port ${port}`);
});