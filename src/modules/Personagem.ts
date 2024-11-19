const Arma = require("./Arma");
// const Inimigo = require("./Inimigo");

class Personagem {
  // Properties
  private _nome: string;
  private _vida: number;
  private _forca: number;
  private _arma: InstanceType<typeof Arma> | null;

  // Constructor
  constructor(nome: string, vida: number, forca: number, arma: InstanceType<typeof Arma> | null = null) {
    this._nome = nome;
    this._vida = vida;
    this._forca = forca;
    this._arma = arma;
  }

  // Getters
  get nome() {
    return this._nome;
  }

  get vida() {
    return this._vida;
  }

  get forca() {
    return this._forca;
  }

  get arma() {
    return this._arma;
  }

  // Setters
  set nome(nome: string) {
    this._nome = nome;
  }

  set vida(vida: number) {
    this._vida = vida;
  }

  set forca(forca: number) {
    this._forca = forca;
  }

  set arma(arma: InstanceType<typeof Arma> | null) {
    this._arma = arma;
  }

  // Methods

  /* IMPLEMENTAR INIMIGO */
  /* atacar(alvo: arma: InstanceType<typeof Inimigo>) { */
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

  equiparArma(arma: InstanceType<typeof Arma>) {
    this._arma = arma;
    console.log(`${this.nome} equipou a arma ${arma.nome}. Aumentando seu dano em ${arma.dano}`);
  }

  private calcularDano() {
    return this.forca + (this.arma?.dano || 0);
  }
}

module.exports = Personagem;
