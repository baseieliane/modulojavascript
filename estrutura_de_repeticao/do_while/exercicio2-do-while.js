let saldo = parseFloat(prompt ("Informe o seu saldo incial"))

let opcao = " "

do {
  opcao = prompt (
    "Saldo disponível R$" + saldo +
    "\nO que você deseja fazer?" +
    "\n1. Depósito" +
    "\n2. Saque" +
    "\n3. Encerrar"
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat (prompt("Informe o valor a ser adicionado"))
      break
    case "2":
      saldo -= parseFloat (prompt("Informe o valor a ser sacado"))
      break
    case "3":
      alert ("Encerrando...")
      break
    default:
      alert ("Opção Indisponível")
  }
} while (opcao !== "3");