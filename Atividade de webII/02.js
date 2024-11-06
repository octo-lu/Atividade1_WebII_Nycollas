// Função para calcular a média
function media(vetor) {
    const sum = vetor.reduce((acc, val) => acc + val, 0);
    return sum / vetor.length;
}

// Função para encontrar a menor nota
function menor(vetor) {
    return Math.min(...vetor);
}

// Função para encontrar a maior nota
function maior(vetor) {
    return Math.max(...vetor);
}

// Uso
const notas = [7, 8, 5, 10, 6];
console.log("Média:", media(notas));
console.log("Menor Nota:", menor(notas));
console.log("Maior Nota:", maior(notas));
