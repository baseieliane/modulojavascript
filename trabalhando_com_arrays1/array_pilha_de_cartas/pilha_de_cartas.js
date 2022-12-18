const pilhaDeCartas = []
let option = ""
do {
  option = prompt ("Cartas no baralho:" + pilhaDeCartas.length +
  "\n1. Adicionar uma carta\n2. Puxar uma Carta\n3.Sair"
  )
  switch (option) {
    case "1":
      const adicionarCarta = prompt ("Adicione uma Carta, de sua escolha")
      pilhaDeCartas.push (adicionarCarta)
      break;
    case "2":
      const puxarCarta = pilhaDeCartas.shift ()
      if (!puxarCarta) {
        alert ("Não há nenhuma carta no seu baralho")
      } else{
        alert (puxarCarta + " foi retirada do baralho")
      }
      break
    case "3":
      alert ("Encerrando...")
      break
    default: alert ("Opção inválida")
      break;
  }

} while (option !== "3");