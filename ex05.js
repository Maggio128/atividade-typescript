"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leituras = [
    ['Porto Velho', 34], ['Curitiba', 12], ['Manaus', 31], ['Porto Alegre', 9], ['Natal', 29]
];
function extremos(temps) {
    if (temps.length === 0 || temps.some(t => !Number.isFinite(t))) {
        throw new Error('Informe pelo menos uma temperatura finita');
    }
    return temps.reduce(([min, max], t) => [Math.min(min, t), Math.max(max, t)], [temps[0], temps[0]]);
}
const temperaturas = leituras.map(([, temp]) => temp);
const [minima, maxima] = extremos(temperaturas);
for (const [cidade, temp] of leituras)
    console.log(`${cidade}: ${temp}°C`);
const media = temperaturas.reduce((s, t) => s + t, 0) / temperaturas.length;
console.log(`Mínima: ${minima}°C | Máxima: ${maxima}°C | Média: ${media.toFixed(1)}°C`);
const contato1 = ['Ana', '69999990000', 'ana@exemplo.com'];
const contato2 = ['Carlos', '69988880000'];
const historico = ['Porto Velho', 30, 31, 32, 33, 34, 35, 36];
const [cidadeHistorico, ...semana] = historico;
const mediaSemanal = semana.length > 0 ? semana.reduce((s, t) => s + t, 0) / semana.length : null;
// Média semanal: 33°C. Sem leituras, null evita divisão por zero.
const capitalOficial = ['RO', 'Porto Velho'];
// capitalOficial[1] = 'Manaus'; // ERRO_EX05 // error TS2540: Cannot assign to '1' because it is a read-only property.
