const vagas = []
function listarVagas(){
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice)=>{
    textoFinal += indice + ". "
    textoFinal += vaga.nome 
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  }, "")

  alert(vagasEmTexto)
  }

function novaVaga(){
  const nome = prompt("Qual o nome da vaga?")
  const descricao = prompt("Descreva a vaga:") 
  const dataLimite = prompt("Qual a data limite? (dd/mm/aaaa)") 
  
  const confirmacao = confirm(
    "Deseja criar uma vaga com essas informações?\n" +
    "Nome: " + nome + "\nDescrição: " + descricao + "\nData Limite: " + dataLimite
  )

  if (confirmacao){
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert("Vaga criada.")
  }
}
function exibirVaga(){
  const indice = prompt("Informe o índice da vaga que deseja exibir:\n\n")
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato)=>
    textoFinal + "\n - " + candidato, "")
  
    alert(
    "Vaga nº " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData Limite: " + vaga.dataLimite +
    "\nQuantidade de candidatos: " + vaga.candidatos.length +
    "\nCandidatos inscritos " + candidatosEmTexto)
}
function inscreverCandidato(){
  const candidato = prompt("Informe o nome do(a) candidato(a):")
  const indice = prompt ("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
  const vaga = vagas[indice]
  
  const confirmacao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga " + indice +"?\n" +
    "Nome " + vaga.nome + "\nDescrição: " + vaga.descricao + "Data Limite: " + vaga.dataLimite)

  if(confirmacao){
    vaga.candidatos.push(candidato)
    alert ("Inscrição realizada.")
  }
}
function excluirVaga(){
  const indice = prompt ("Informe o índice da vaga que deseja excluir:")
  const vaga = vagas[indice]

  const confirmacao = confirm (
    "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite
)
if(confirmacao){
  vagas.splice(indice, 1)
  alert("Vaga excluída!")
  }
}

function exibirMenu(){
  const opcao = prompt (
      "Bem vindo! Cadastro de Vagas de Emprego" + 
      "\n\nEscolha uma das opções do menu abaixo:" + 
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar nova vaga" +    
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um candidato em uma vaga" +
      "\n5. Excluir uma vaga" + 
      "\n6. Sair"
      )

      return opcao
  }

function executar(){
  let option = " "
    
  do {
    option = exibirMenu()
    
    switch (option){
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
        break
      case "6":
        alert("Encerrando...")
        break
      default:
        alert("Opção inválida!")
    }
  } while (option !== "6")
}

executar()