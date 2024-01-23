//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Definição da classe ItemMagico
class ItemMagico {
    //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
      constructor(  ) {
         tipo,
         dano
      }
    
      calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
      }
}
    
    // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
    const tipoItem = "Espada" //gets();
    const danoItem =  500 //parseInt(gets());
    const resistenciaItem = 200  //parseInt(gets());
    
    //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
    
    // TODO: Imprima os atributos do item personalizado
    console.log("Tipo: " + tipoItem);
    console.log("Dano: " + danoItem);
    console.log("Resistencia: " + resistenciaItem);
    
    // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
    const danoTotal = danoItem;
    console.log("Dano em combate: " + danoTotal);
