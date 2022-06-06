"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const estacaoDoAno_1 = __importDefault(require("./estacaoDoAno"));
const mesesDoAno_1 = __importDefault(require("./mesesDoAno"));
const hemisferioNorte = {
    [estacaoDoAno_1.default.OUTONO]: [mesesDoAno_1.default.SETEMBRO, mesesDoAno_1.default.OUTUBRO, mesesDoAno_1.default.NOVEMBRO, mesesDoAno_1.default.SETEMBRO],
    [estacaoDoAno_1.default.INVERNO]: [mesesDoAno_1.default.DEZEMBRO, mesesDoAno_1.default.JANEIRO, mesesDoAno_1.default.FEVEREIRO, mesesDoAno_1.default.MARCO],
    [estacaoDoAno_1.default.PRIMAVERA]: [mesesDoAno_1.default.MARCO, mesesDoAno_1.default.ABRIL, mesesDoAno_1.default.MAIO, mesesDoAno_1.default.JUNHO],
    [estacaoDoAno_1.default.VERAO]: [mesesDoAno_1.default.JUNHO, mesesDoAno_1.default.JULHO, mesesDoAno_1.default.AGOSTO, mesesDoAno_1.default.SETEMBRO]
};
const hemisferioSul = {
    [estacaoDoAno_1.default.PRIMAVERA]: hemisferioNorte[estacaoDoAno_1.default.OUTONO],
    [estacaoDoAno_1.default.VERAO]: hemisferioNorte[estacaoDoAno_1.default.INVERNO],
    [estacaoDoAno_1.default.OUTONO]: hemisferioNorte[estacaoDoAno_1.default.PRIMAVERA],
    [estacaoDoAno_1.default.INVERNO]: hemisferioNorte[estacaoDoAno_1.default.VERAO],
};
const hemisferios = {
    "Norte": hemisferioNorte,
    "Sul": hemisferioSul
};
const months = Object.values(mesesDoAno_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(months, "Escolha um mês");
const choiceHemisferio = readline_sync_1.default.keyInSelect(Object.keys(hemisferios), "Escolha um hemisfério");
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
