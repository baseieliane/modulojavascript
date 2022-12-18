function areaTriangulo(params) {
  const base = prompt ("Insira o valor da base do triângulo:")
  const altura = prompt ("Insira a altura do triângulo:")
  return (base * altura) / 2
}
function areaRetangulo(params) {
  const base = prompt ("Insira o valor da base do retângulo:")
  const altura = prompt ("Insira a altura do retângulo:")
  return base * altura
}
function areaQuadrado(params) {
  const lado = prompt ("Insira o valor do lado do quadrado:")
  return lado * lado
}
function areaTrapezio(params) {
  const baseMaior = parseFloat(prompt ("Insira o valor da base maior:"))
  const baseMenor = parseFloat(prompt ("Insira o valor da base menor:"))
  const altura = prompt ("Insira a altura do trapézio:")
  return (baseMaior + baseMenor)*altura/2
}
function areaCirculo(params) {
  const raio = prompt ("Insira o valor do raio do círculo:")
  return (3.14* raio * raio)
}

function exibirMenu(){
  return prompt(
    "Bem-vindo a calculadora geométrica" +
  "\n\nEscolha uma das opções abaixo:" + 
  "\n1. Calcular área de um triângulo" +
  "\n2. Calcular área de um retângulo" +
  "\n3. Calcular área de um quadrado" +
  "\n4. Calcular área de um trapézio" +
  "\n5. Calcular área de um círculo" +
  "\n6. Sair"
  )
}

function executarCalculadora(){
  let option = ""
  do {
    option = exibirMenu()
    let resultado 
    switch (option) {
      case "1":
        resultado = areaTriangulo()
        break;
      case "2":
        resultado = areaRetangulo()
        break;
      case "3":
        resultado = areaQuadrado()
        break;
      case "4":
        resultado = areaTrapezio()
        break;
      case "5":
        resultado = areaCirculo()
        break;
      case "6":
        alert ("Encerrando...")
        break
      default:
        alert ("Opção inválida!")
        break;
    }
    if (resultado) {
      alert ("Resultado: " + resultado)
    }
  } while (option !== "6");
}

executarCalculadora()

