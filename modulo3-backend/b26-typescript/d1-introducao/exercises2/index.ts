import readline from "readline-sync";
import Seasons from "./estacaoDoAno";
import MesesDoAno from "./mesesDoAno";

const hemisferioNorte = {
  [Seasons.OUTONO]: [MesesDoAno.SETEMBRO, MesesDoAno.OUTUBRO, MesesDoAno.NOVEMBRO, MesesDoAno.SETEMBRO],
  [Seasons.INVERNO]: [MesesDoAno.DEZEMBRO, MesesDoAno.JANEIRO, MesesDoAno.FEVEREIRO, MesesDoAno.MARCO],
  [Seasons.PRIMAVERA]: [MesesDoAno.MARCO, MesesDoAno.ABRIL, MesesDoAno.MAIO, MesesDoAno.JUNHO],
  [Seasons.VERAO]: [MesesDoAno.JUNHO, MesesDoAno.JULHO, MesesDoAno.AGOSTO, MesesDoAno.SETEMBRO]
};

const hemisferioSul = {
  [Seasons.PRIMAVERA]: hemisferioNorte[Seasons.OUTONO],
  [Seasons.VERAO]: hemisferioNorte[Seasons.INVERNO],
  [Seasons.OUTONO]: hemisferioNorte[Seasons.PRIMAVERA],
  [Seasons.INVERNO]: hemisferioNorte[Seasons.VERAO],
}

const hemisferios = {
  "Norte": hemisferioNorte,
  "Sul": hemisferioSul
};

const months = Object.values(MesesDoAno);
const choiceMonth = readline.keyInSelect(months, "Escolha um mês");
const choiceHemisferio = readline.keyInSelect(Object.keys(hemisferios), "Escolha um hemisfério");

const month = months[choiceMonth];
const hemisferio = Object.keys(hemisferios)[choiceHemisferio];

console.log(`Mês: ${month}`);
console.log(`Hemisfério: ${hemisferio}`);
console.log(`Estações:`);
const hemisferioEscolhido = Object.values(hemisferios)[choiceHemisferio];
Object.entries(hemisferioEscolhido).map((e) => {
  const seasons = e[0];
  const months = e[1];

  if (months.includes(month)) {
    console.log(seasons);
  }
});