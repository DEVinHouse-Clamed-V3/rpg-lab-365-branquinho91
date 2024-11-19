const Arma = require("./modules/Arma");
const Personagem = require("./modules/Personagem");

const brutus = new Personagem("Brutus", 1000, 30);

console.log(brutus);

brutus.atacar();
brutus.atacar();
brutus.atacar();
brutus.atacar();
brutus.atacar();
brutus.atacar();

const espada = new Arma("Espada Longa", 50, "Uma espada longa e afiada.");

brutus.equiparArma(espada)

brutus.atacar();
brutus.atacar();
brutus.atacar();
brutus.atacar();
brutus.atacar();
brutus.atacar();


brutus.receberDano(50);
brutus.receberDano(50);
brutus.receberDano(50);
brutus.receberDano(50);
brutus.receberDano(50);
brutus.receberDano(500);
brutus.receberDano(500);