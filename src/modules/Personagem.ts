import Arma from "./Arma";
import Inimigo from "./Inimigo";

export default class Personagem {
  // Properties
  protected _nome: string;
  protected _vida: number;
  protected _forca: number;
  protected _arma: Arma | null;

  // Constructor
  constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
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

  set arma(arma: Arma | null) {
    this._arma = arma;
  }

  // Methods
  atacar(alvo: Inimigo) {
    const chance = Math.random() < 0.5;

    if (chance) {
      const dano = this.calcularDano();
      console.log(`Acerto! ${this.nome} causou ${dano} de dano em ${alvo.nome}!`);
      alvo.receberDano(dano);
    } else {
      console.log(`${this.nome} errou o alvo!`);
    }
  }

  receberDano(dano: number) {
    this.vida -= dano;

    if (this.vida <= 0) {
      this.vida = 0;
      console.log(`${this.nome} recebeu ${dano} de dano! ${this.nome} Foi derrotado!`);
      console.log("FIM DE JOGO!");
      process.exit(0);
    } else {
      console.log(`${this.nome} recebeu ${dano} de dano! Está com ${this.vida} de vida!`);
    }
  }

  equiparArma(arma: Arma) {
    this._arma = arma;
    console.log(`${this.nome} equipou a arma ${arma.nome}. Aumentando seu dano em ${arma.dano}!`);
  }

  calcularDano() {
    return this.forca + (this.arma?.dano || 0);
  }
}
