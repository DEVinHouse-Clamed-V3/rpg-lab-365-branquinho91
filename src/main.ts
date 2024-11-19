const Arma = require("./modules/Arma");

const espada = new Arma("Espada Longa", 50, "Uma espada longa e afiada.");

console.log(espada.nome);
console.log(espada.dano);
console.log(espada.descricao);

// espada.nome = "Exalibur"; // throws error;
console.log();

espada.dano = 80;


console.log(espada.nome);
console.log(espada.dano);

