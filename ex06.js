"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["Recebido"] = 1] = "Recebido";
    StatusPedido[StatusPedido["EmPreparo"] = 2] = "EmPreparo";
    StatusPedido[StatusPedido["SaiuParaEntrega"] = 3] = "SaiuParaEntrega";
    StatusPedido[StatusPedido["Entregue"] = 4] = "Entregue";
    StatusPedido[StatusPedido["Cancelado"] = 5] = "Cancelado";
})(StatusPedido || (StatusPedido = {}));
var FormaPagamento;
(function (FormaPagamento) {
    FormaPagamento["Pix"] = "PIX";
    FormaPagamento["Cartao"] = "CARTAO";
    FormaPagamento["Dinheiro"] = "DINHEIRO";
})(FormaPagamento || (FormaPagamento = {}));
function mensagem(status) {
    switch (status) {
        case StatusPedido.Recebido: return 'Recebemos seu pedido!';
        case StatusPedido.EmPreparo: return 'Seu pedido está sendo preparado 🍳';
        case StatusPedido.SaiuParaEntrega: return 'O entregador está a caminho 🛵';
        case StatusPedido.Entregue: return 'Pedido entregue. Bom apetite!';
        case StatusPedido.Cancelado: return 'Pedido cancelado.';
        default: throw new Error('Status inválido');
    }
}
function avancar(status) {
    switch (status) {
        case StatusPedido.Recebido: return StatusPedido.EmPreparo;
        case StatusPedido.EmPreparo: return StatusPedido.SaiuParaEntrega;
        case StatusPedido.SaiuParaEntrega: return StatusPedido.Entregue;
        case StatusPedido.Entregue:
        case StatusPedido.Cancelado: return status;
        default: throw new Error('Status inválido');
    }
}
let status = StatusPedido.Recebido;
while (true) {
    console.log(`[${status} - ${StatusPedido[status]}] ${mensagem(status)}`);
    if (status === StatusPedido.Entregue)
        break;
    status = avancar(status);
}
let pagamento = FormaPagamento.Pix;
// pagamento = 'PIX'; // ERRO_EX06 // error TS2322: Type '"PIX"' is not assignable to type 'FormaPagamento'. // error TS2322: Type '"PIX"' is not assignable to type 'FormaPagamento'.
// Um literal string não é um membro do enum; use FormaPagamento.Pix.
console.log(`Pagamento: ${pagamento}`);
