const turista = prompt ("Seja bem-vindo, estranho, qual é o seu nome?")
let cidades = ""
let contagem = 0
let visitouCidade = prompt (turista + ", você já visitou alguma cidade? (Sim/Não)")

while (visitouCidade === "Sim"){
  let cidade = prompt ("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  visitouCidade = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)