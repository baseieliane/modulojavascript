let fila = []
let option = ""

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++){
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
  }

  option = prompt (
    "Pacientes:\n" + pacientes +
    "\nEscolha uma ação: \n1. Novo paciente\n 2. Consultar paciente\n 3.Sair"
  )

  switch(option){
    case "1":
      const novoPaciente = prompt ("Qual é o nome do paciente?")
      fila.push (novoPaciente)
      break
    case "2":
      const pacienteAtendido = fila.shift()
      if (pacienteAtendido) {
        alert (pacienteAtendido + " foi removido da fila")
      } else{
        alert ("Não há pacientes na fila!")
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert ("Opção inválida, escolha uma opção entre 1 e 3")
  }
} while (option !== "3");