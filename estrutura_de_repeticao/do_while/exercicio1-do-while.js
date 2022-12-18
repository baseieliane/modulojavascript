let opcao = " "
do {
  opcao = prompt
  ("Escolha uma das opções:" +
  "\n1. Comer" + 
  "\n2. Dormir" +
  "\n3. Assistir TV" +
  "\n4. Tomar Banho" +
  "\n5. Encerrar")
  
  switch(opcao){
    case "1" :
      alert ("Voce escolheu a opção 1")
      break
    case "2" :
      alert ("Voce escolheu a opção 2")
      break
    case "3" :
      alert ("Voce escolheu a opção 3")
      break
    case "4" :
      alert ("Voce escolheu a opção 4")
      break
    case "5" :
      alert ("Voce escolheu encerrar")
      alert ("Encerrando...")
      break
    default:
      alert("Opção Inválida")
  }
} while (opcao !== "5") 
