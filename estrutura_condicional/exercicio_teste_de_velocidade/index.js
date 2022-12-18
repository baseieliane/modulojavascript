const nomedoVeiculo1 = prompt("Insira o nome do Veículo 1").trim();
const velocidadeVeiculo1 = prompt("Insira abaixo a velocidade do veículo 1!").trim();
const nomedoVeiculo2 = prompt("Insira o nome do Veículo 2").trim();
const velocidadeVeiculo2 = prompt("Insira abaixo a velocidade do veículo 2!").trim();

if (velocidadeVeiculo1 > velocidadeVeiculo2){
  alert ("O " + nomedoVeiculo1 + " é mais rápido que o " + nomedoVeiculo2)
} else if (velocidadeVeiculo2 > velocidadeVeiculo1){
  alert ("O " + nomedoVeiculo2 + " é mais rápido que o " + nomedoVeiculo1)
} else{
  alert ("As velocidades do " + nomedoVeiculo1 + " e do " + nomedoVeiculo2 + " são iguais.")
}
