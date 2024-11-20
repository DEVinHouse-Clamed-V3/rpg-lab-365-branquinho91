import Arma from "./modules/Arma";
import Personagem from "./modules/Personagem";
import Inimigo from "./modules/Inimigo";

const brutus = new Personagem("Brutus", 1000, 30);
const orc = new Inimigo("Azog", 2000, 50);

// console.log(brutus);
// console.log(orc);

brutus.atacar(orc);
console.log();

brutus.atacar(orc);
console.log();

brutus.atacar(orc);
console.log();

brutus.atacar(orc);
console.log();

brutus.atacar(orc);
console.log();

const espada = new Arma("Espada Longa", 50, "Uma espada longa e afiada.");
brutus.equiparArma(espada);
console.log();

brutus.atacar(orc);
console.log();

brutus.atacar(orc);
console.log();

brutus.atacar(orc);
console.log();

brutus.atacar(orc);
console.log();

brutus.atacar(orc);
console.log();

console.log("-----------------------");
console.log();

orc.atacar(brutus);
console.log();

orc.atacar(brutus);
console.log();

orc.atacar(brutus);
console.log();

orc.atacar(brutus);
console.log();

orc.comportamentoAleatorio(brutus);
console.log();

orc.comportamentoAleatorio(brutus);
console.log();

orc.comportamentoAleatorio(brutus);
console.log();

orc.comportamentoAleatorio(brutus);
console.log();

orc.comportamentoAleatorio(brutus);
console.log();

const clava = new Arma("Clava Afiada", 25, "Uma clava primitiva");
orc.equiparArma(clava);
console.log();

orc.atacar(brutus);
console.log();

orc.atacar(brutus);
console.log();

orc.atacar(brutus);
console.log();
