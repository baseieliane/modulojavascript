const primeiroNome = prompt("Informe o seu primeiro nome:");
const sobrenome = prompt("Informe seu sobrenome");
const campoDeEstudo = prompt("Informe o seu campo de estudo");
const anoDeNascimento = prompt("Informe o ano que você nasceu");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome do recruta: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de Estudo:" +
    campoDeEstudo +
    "\nIdade:" +
    (2022 - anoDeNascimento)
);
