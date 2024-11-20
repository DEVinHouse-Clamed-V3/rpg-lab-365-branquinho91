import Arma from "./Arma";
// import Inimigo from "./Inimigo;"

export default class Personagem {
  // Properties
  #nome: string;
  #vida: number;
  #forca: number;
  #arma: Arma | null;

  // Constructor
  constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
    this.#nome = nome;
    this.#vida = vida;
    this.#forca = forca;
    this.#arma = arma;
  }

  // Getters
  get nome() {
    return this.#nome;
  }

  get vida() {
    return this.#vida;
  }

  get forca() {
    return this.#forca;
  }

  get arma() {
    return this.#arma;
  }

  // Setters
  set nome(nome: string) {
    this.#nome = nome;
  }

  set vida(vida: number) {
    this.#vida = vida;
  }

  set forca(forca: number) {
    this.#forca = forca;
  }

  set arma(arma: Arma | null) {
    this.#arma = arma;
  }

  // Methods

  /* IMPLEMENTAR INIMIGO */
  /* atacar(alvo: Inimigo) { */
  atacar() {
    const chance = Math.random() < 0.5;

    if (chance) {
      const dano = this.calcularDano();
      console.log(`Acertou! Causou ${dano} de dano ao inimigo!`);
      // console.log(`Acerto! Causou ${dano} de dano ao ${alvo.nome}!`);
      // calcular vida do alvo
    } else {
      console.log("Errou o alvo!");
    }
  }

  receberDano(dano: number) {
    this.vida -= dano;

    if (this.vida <= 0) {
      this.vida = 0;
      console.log(`${this.nome} recebeu ${dano} de dano! ${this.nome} Foi derrotado!`);
    } else {
      console.log(`${this.nome} recebeu ${dano} de dano! Está com ${this.vida} de vida!`);
    }
  }

  equiparArma(arma: Arma) {
    this.#arma = arma;
    console.log(`${this.nome} equipou a arma ${arma.nome}. Aumentando seu dano em ${arma.dano}`);
  }

  calcularDano() {
    return this.forca + (this.arma?.dano || 0);
  }
}

module.exports = Personagem;
