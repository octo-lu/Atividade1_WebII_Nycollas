const fs = require('fs');
const chalk = require('chalk');

// Ler um arquivo Markdown
function lerArquivoMarkdown(caminho) {
    fs.readFile(caminho, 'utf8', (err, data) => {
        if (err) {
            console.error(chalk.red("Erro ao ler o arquivo:", err));
            return;
        }
        console.log(chalk.green(data));
    });
}

// Uso
lerArquivoMarkdown('exemplo.md'); // Caminho do seu arquivo
