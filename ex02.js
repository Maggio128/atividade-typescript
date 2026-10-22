"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nomeDigitado = ' maria da silva ';
function formatarNome(nome) {
    return nome.trim().toLowerCase().split(/\s+/).filter(p => p.length > 0)
        .map(p => ['da', 'de', 'do'].indexOf(p) >= 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
}
const precoLido = '12.40';
const quantidadeLida = '3un';
const preco = Number(precoLido);
const quantidade = parseInt(quantidadeLida, 10);
const clienteFidelidade = true;
const subtotal = preco * quantidade;
const desconto = clienteFidelidade ? subtotal * 0.05 : 0;
const cupom = `CUPOM Nº ${String(42).padStart(6, '0')}
Cliente: ${formatarNome(nomeDigitado)}
Item: ${quantidade} x R$ ${preco.toFixed(2)}
Subtotal: R$ ${subtotal.toFixed(2)}
Desconto fidelidade: R$ ${desconto.toFixed(2)}
TOTAL: R$ ${(subtotal - desconto).toFixed(2)}`;
console.log(cupom);
