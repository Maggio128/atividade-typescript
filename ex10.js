"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SituacaoTicket;
(function (SituacaoTicket) {
    SituacaoTicket["Aberto"] = "ABERTO";
    SituacaoTicket["Pago"] = "PAGO";
})(SituacaoTicket || (SituacaoTicket = {}));
function falhar(mensagem) { throw new Error(mensagem); }
function calcularTarifa(v, horas) {
    if (!Number.isInteger(horas) || horas < 1)
        return falhar('Horas devem ser inteiras e no mínimo 1');
    switch (v.tipo) {
        case 'carro': return 8 + (horas - 1) * 5;
        case 'moto': return 4 + (horas - 1) * 2;
        case 'caminhao': return 15 + (horas - 1) * 10;
        default: {
            const _naoTratado = v;
            return _naoTratado;
        }
    }
}
// ERRO_VAN_UNIAO // error TS2322: Type 'Van' is not assignable to type 'never'.
// never garante que todos os membros da união foram tratados pelo switch.
function fecharTicket(t) {
    const [entrada, saida] = t.periodo;
    if (!Number.isInteger(entrada) || !Number.isInteger(saida) || entrada < 0 || saida < entrada)
        return falhar('Período inválido: use horas inteiras e saída maior ou igual à entrada');
    const horas = Math.max(1, saida - entrada);
    const valor = calcularTarifa(t.veiculo, horas) * (t.selo ? 0.5 : 1);
    return Object.assign(Object.assign({}, t), { valor, situacao: SituacaoTicket.Pago });
}
function registrar(msg) { console.log(msg); }
function lerVeiculo(json) {
    let dados;
    try {
        dados = JSON.parse(json);
    }
    catch (erro) {
        if (erro instanceof SyntaxError)
            return falhar('JSON malformado');
        throw erro;
    }
    if (typeof dados !== 'object' || dados === null)
        return falhar('Veículo deve ser um objeto');
    if (!('tipo' in dados) || typeof dados.tipo !== 'string')
        return falhar('campo "tipo" inválido');
    if (!('placa' in dados) || typeof dados.placa !== 'string' || !/^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/.test(dados.placa))
        return falhar('campo "placa" inválido');
    const placa = dados.placa;
    switch (dados.tipo) {
        case 'carro':
            if (!('portas' in dados) || (dados.portas !== 2 && dados.portas !== 4))
                return falhar('campo "portas" inválido');
            return { placa, tipo: 'carro', portas: dados.portas };
        case 'moto':
            if (!('cilindradas' in dados) || typeof dados.cilindradas !== 'number' || !Number.isFinite(dados.cilindradas) || dados.cilindradas <= 0)
                return falhar('campo "cilindradas" inválido');
            return { placa, tipo: 'moto', cilindradas: dados.cilindradas };
        case 'caminhao':
            if (!('eixos' in dados) || typeof dados.eixos !== 'number' || !Number.isInteger(dados.eixos) || dados.eixos < 2)
                return falhar('campo "eixos" inválido');
            return { placa, tipo: 'caminhao', eixos: dados.eixos };
        default: return falhar(`tipo "${dados.tipo}" desconhecido`);
    }
}
const tickets = [
    { veiculo: lerVeiculo('{"placa":"ABC1D23","tipo":"carro","portas":4}'), periodo: [8, 11], selo: false, situacao: SituacaoTicket.Aberto },
    { veiculo: lerVeiculo('{"placa":"MOT0A12","tipo":"moto","cilindradas":160}'), periodo: [9, 10], selo: false, situacao: SituacaoTicket.Aberto },
    { veiculo: lerVeiculo('{"placa":"CAM9Z99","tipo":"caminhao","eixos":3}'), periodo: [7, 12], selo: false, situacao: SituacaoTicket.Aberto },
    { veiculo: lerVeiculo('{"placa":"XYZ4E56","tipo":"carro","portas":2}'), periodo: [14, 16], selo: true, situacao: SituacaoTicket.Aberto }
];
const fechados = tickets.map(fecharTicket);
fechados.map(t => {
    var _a;
    const horas = Math.max(1, t.periodo[1] - t.periodo[0]);
    registrar(`[${t.situacao}] ${t.veiculo.placa} (${t.veiculo.tipo}) - ${horas}h - R$ ${((_a = t.valor) !== null && _a !== void 0 ? _a : 0).toFixed(2)}${t.selo ? ' (selo -50%)' : ''}`);
    return t;
});
const faturamento = fechados.filter(t => t.situacao === SituacaoTicket.Pago).reduce((s, t) => { var _a; return s + ((_a = t.valor) !== null && _a !== void 0 ? _a : 0); }, 0);
const entradas = tickets.reduce((contagem, t) => { contagem[t.veiculo.tipo] += 1; return contagem; }, { carro: 0, moto: 0, caminhao: 0 });
registrar(`Faturamento: R$ ${faturamento.toFixed(2)}`);
registrar(`Entradas: carro=${entradas.carro}, moto=${entradas.moto}, caminhao=${entradas.caminhao}`);
try {
    lerVeiculo('{"placa":"ABC1D23","tipo":"bicicleta"}');
}
catch (erro) {
    registrar(`Erro ao ler veículo: ${erro instanceof Error ? erro.message : 'erro desconhecido'}`);
}
