export default class Arma {
  // Properties
  private readonly _nome: string;
  private readonly _descricao: string;
  private _dano: number;

  // Constructor
  constructor(nome: string, dano: number, descricao: string) {
    this._nome = nome;
    this._dano = dano;
    this._descricao = descricao;
  }

  // Getters
  get nome(): string {
    return this._nome;
  }

  get dano(): number {
    return this._dano;
  }

  get descricao(): string {
    return this._descricao;
  }

  // Setters
  set dano(dano: number) {
    if (dano < 0) {
      throw new Error(`Valor de dano inválido: ${dano}. O dano deve ser um valor positivo.`);
    }
    this._dano = dano;
  }
}
