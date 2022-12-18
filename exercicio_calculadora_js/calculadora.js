const entrada1 = prompt("Informe um número");
const entrada2 = prompt("Informe mais um número");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Resultados:\n" +
    "\nSoma:" +
    soma +
    "\nSubtração:" +
    subtracao +
    "\nMultiplicação:" +
    multiplicacao +
    "\nDivisão:" +
    divisao
);
