const valor = prompt ("Insira um valor em metros para ser convertido")
const unidadeDeMedida = prompt ("Escolha a opção da qual deseja converter o valor:" + 
"\n1. mm" +
"\n2. cm" +
"\n3. dm" +
"\n4. dam" +
"\n5. hm" +
"\n6. km"
)
const valorNumerico = parseFloat (valor)

switch (unidadeDeMedida) {
  case '1':
    alert ("Resultado:" + " " + valor + "m =" + (valorNumerico * 1000) + "mm")
    break;
  case '2':
    alert ("Resultado:" + " " + valor + "m =" + (valorNumerico * 100) + "cm")
    break;
  case '3':
    alert ("Resultado:" + " " + valor + "m =" + (valorNumerico * 10) + "dm")
    break;
  case '4':
    alert ("Resultado:" + " " + valor + "m =" + (valorNumerico / 10) + "dam")
    break;
  case '5':
    alert ("Resultado:" + " " + valor + "m =" + (valorNumerico / 100) + "hm")
    break;
  case '6':
    alert ("Resultado:" + " " + valor + "m =" + (valorNumerico / 1000) + "km")
    break;
  default:
    alert ("Opção inválida")
  
}