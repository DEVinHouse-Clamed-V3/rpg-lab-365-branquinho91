import Arma from "./modules/Arma";
import Personagem from "./modules/Personagem";
import Inimigo from "./modules/Inimigo";

const espada = new Arma("Espada Longa", 50, "Uma espada longa e afiada.");
const clava = new Arma("Clava Afiada", 25, "Uma clava primitiva");
const lanca = new Arma("Lança Pontiaguda", 35, "Lança de cavalaria");
const porrete = new Arma("Porrete de Guerra", 80, "Porrete moldado por ferreiros anões");
const varinha = new Arma("Varinha Mágica", 100, "Varinha utilizada por Merlin");

const brutus = new Personagem("Brutus", 1000, 30);

const orc = new Inimigo("Azog", 2000, 50);
const goblin = new Inimigo("Mokeka", 500, 20);
const fantasma = new Inimigo("Gaspar", 800, 15);
const vampiro = new Inimigo("Alucardo", 2500, 60);
const dragao = new Inimigo("Smaug", 10000, 100);

brutus.atacar(orc);
brutus.atacar(goblin);
brutus.atacar(fantasma);
brutus.atacar(vampiro);
brutus.atacar(dragao);
console.log();

brutus.equiparArma(espada);
console.log();

brutus.atacar(orc);
brutus.atacar(goblin);
brutus.atacar(fantasma);
brutus.atacar(vampiro);
brutus.atacar(dragao);
console.log();

orc.atacar(brutus);
goblin.atacar(brutus);
fantasma.atacar(brutus);
vampiro.atacar(brutus);
dragao.atacar(brutus);
console.log();

orc.equiparArma(clava);
goblin.equiparArma(clava);
fantasma.equiparArma(porrete);
vampiro.equiparArma(varinha);
dragao.equiparArma(lanca);
console.log();

orc.atacar(brutus);
goblin.atacar(brutus);
fantasma.atacar(brutus);
vampiro.atacar(brutus);
dragao.atacar(brutus);
console.log();

orc.comportamentoAleatorio(brutus);
goblin.comportamentoAleatorio(brutus);
fantasma.comportamentoAleatorio(brutus);
vampiro.comportamentoAleatorio(brutus);
dragao.comportamentoAleatorio(brutus);
console.log();

orc.comportamentoAleatorio(brutus);
goblin.comportamentoAleatorio(brutus);
fantasma.comportamentoAleatorio(brutus);
vampiro.comportamentoAleatorio(brutus);
dragao.comportamentoAleatorio(brutus);
console.log();
