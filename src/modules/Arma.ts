export default class Arma {
  // Properties
  #nome: string;
  #dano: number;
  #descricao: string;

  // Constructor
  constructor(nome: string, dano: number, descricao: string) {
    this.#nome = nome;
    this.#dano = dano;
    this.#descricao = descricao;
  }

  // Getters
  get nome(): string {
    return this.#nome;
  }

  get dano(): number {
    return this.#dano;
  }

  get descricao(): string {
    return this.#descricao;
  }

  // Setters
  set dano(dano: number) {
    if (dano < 0) {
      throw new Error(`Valor de dano inválido: ${dano}. O dano deve ser um valor positivo.`);
    }
    this.#dano = dano;
  }
}
