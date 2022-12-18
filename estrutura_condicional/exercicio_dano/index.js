// infos do atacante
const atacante = prompt ("Insira o nome do jogador que irá atacar:")
const poderDeAtaque = prompt ("Insira o valor do ataque:")
//  infos do defensor
const defensor = prompt ("Insira o nome do jogador que irá defender")
let pontosDeVida = prompt ("Insira os pontos de vida:")
const poderDeDefesa = prompt ("Insira os pontos de defesa:")
const possuiEscudo = prompt ("Deseja adicionar um escudo? ( Sim / Não )")

let danoCausado = 0
if (parseFloat (poderDeAtaque) > parseFloat (poderDeDefesa) && possuiEscudo === "Não"){
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim"){
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de Vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)