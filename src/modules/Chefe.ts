import Inimigo from "./Inimigo";
import Personagem from "./Personagem";
import Arma from "./Arma";

export default class Chefe extends Inimigo {
  // Constructor
  constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
    super(nome, vida, forca, arma);
  }

  // Methods
  atacar(alvo: Personagem) {
    const chance = Math.random() >= 0.1;
    const critico = Math.random() >= 0.75;

    if (chance) {
      const dano = critico ? this.calcularDano() * 2 : this.calcularDano();

      if (critico) {
        console.log(`CRÍTICO! ${this.nome} causou ${dano} de dano em ${alvo.nome}!`);
      } else {
        console.log(`Acerto! ${this.nome} causou ${dano} de dano em ${alvo.nome}!`);
      }

      alvo.receberDano(dano);
    } else {
      console.log(`${this.nome} errou o alvo!`);
    }
  }
}
