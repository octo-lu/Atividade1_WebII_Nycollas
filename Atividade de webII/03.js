const _ = require('lodash');

// Array
let numeros = [5, 2, 2, 8, 1, 4];

// Crescente
let ordenados = _.sortBy(numeros);
console.log("Ordenados:", ordenados);

// Remover elementos duplicados
let unicos = _.uniq(numeros);
console.log("Sem Duplicados:", unicos);

// Filtrar números pares
let pares = _.filter(numeros, num => num % 2 === 0);
console.log("Números Pares:", pares);

// Mapear para criar um novo array com o dobro de cada número
let dobros = _.map(numeros, num => num * 2);
console.log("Dobros:", dobros);

// Calcular a soma de todos os elementos
let soma = _.sum(numeros);
console.log("Soma:", soma);
