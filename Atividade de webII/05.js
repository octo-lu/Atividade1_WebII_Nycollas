const fs = require('fs');

// Ler arquivo JSON
function readJsonFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

// Escrever arquivo JSON
function writeJsonFile(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Uso
const clientes = readJsonFile('clientes.json'); // Substitua pelo caminho do seu arquivo
console.log(clientes);

const novoCliente = { nome: "Paulão do Pneul", idade: 36 };
writeJsonFile('clientes.json', novoCliente);
