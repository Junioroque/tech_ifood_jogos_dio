// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = "Junio"   //gets();

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
const acaoEscolhida = "Correr"       //gets();

// TODO: Implemente uma solução utilizando lógica de programação;
//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:

if (acaoEscolhida == "Fugir") {
console.log(nomePersonagem + " esclheu " + acaoEscolhida +"!")
}else if (acaoEscolhida == "Atacar"){ 
console.log(nomePersonagem + " escolheu " + acaoEscolhida +"!")
}else {
console.log("Tente novamente")
}     


