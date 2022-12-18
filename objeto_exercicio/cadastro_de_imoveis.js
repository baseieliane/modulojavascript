let option = ""
const imoveis = []
do {
  option = prompt ("Bem vindo!\n" + "O número de imóveis cadastrados é de: " + imoveis.length + 
  "\nEscolha uma das opções:\n1. Salvar Novo Imóvel\n2. Mostrar todos os imóveis cadastrados\n3. Sair" )
  switch (option) {
    case "1": 
      const imovel = {}
      imovel.proprietario = prompt("Insira o nome do proprietário")
      imovel.quartos = prompt("Insira a quantidade de quartos")
      imovel.banheiros = prompt("Insira a quantidade de banheiros")
      imovel.garagem = prompt("Há garagem no imóvel? (Sim/Não)")
      const confirmation = confirm (
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.proprietario +
        "\nNúmero de quartos: " + imovel.quartos +
        "\nNúmero de banheiros: " + imovel.banheiros +
        "\nPossui Garagem? " + imovel.garagem
      )
      if (confirmation) {
        imoveis.push(imovel)
      }
      break
    case "2":
      for (let i = 0; i < imoveis.length; i++){
        alert (
          "Imóvel " + (i + 1) +
          "\nProprietário: " + imoveis[i].proprietario +
          "\nNúmero de quartos: " + imoveis[i].quartos +
          "\nNúmero de banheiros: " + imoveis[i].banheiros +
          "\nPossui Garagem? " + imoveis[i].garagem
        )
      }
      break
    case "3":
      alert ("Encerrando....")
      break;
    default:
      alert ("Opção inválida!")
      break;
  }
} while (option !== "3");