import Arma from "./Arma";
import Personagem from "./Personagem";

export default class Inimigo extends Personagem {
  // Constructor
  constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
    super(nome, vida, forca, arma);
  }

  // Methods
  atacar(alvo: Personagem) {
    const chance = Math.random() >= 0.2;

    if (chance) {
      const dano = this.calcularDano();
      console.log(`Acerto! ${this.nome} causou ${dano} de dano em ${alvo.nome}!`);
      alvo.receberDano(dano);
    } else {
      console.log(`${this.nome} errou o alvo!`);
    }
  }

  comportamentoAleatorio(alvo: Personagem) {
    const chance = Math.random() >= 0.5;

    if (chance) {
      this.atacar(alvo);
    } else {
      console.log(`${this.nome} encara ${alvo.nome} com desconfiança`);
    }
  }
}
