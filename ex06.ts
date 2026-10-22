export {};
enum StatusPedido { Recebido = 1, EmPreparo, SaiuParaEntrega, Entregue, Cancelado }
enum FormaPagamento { Pix = 'PIX', Cartao = 'CARTAO', Dinheiro = 'DINHEIRO' }
function mensagem(status: StatusPedido): string {
  switch (status) {
    case StatusPedido.Recebido: return 'Recebemos seu pedido!';
    case StatusPedido.EmPreparo: return 'Seu pedido está sendo preparado 🍳';
    case StatusPedido.SaiuParaEntrega: return 'O entregador está a caminho 🛵';
    case StatusPedido.Entregue: return 'Pedido entregue. Bom apetite!';
    case StatusPedido.Cancelado: return 'Pedido cancelado.';
    default: throw new Error('Status inválido');
  }
}
function avancar(status: StatusPedido): StatusPedido {
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
  if (status === StatusPedido.Entregue) break;
  status = avancar(status);
}
let pagamento: FormaPagamento = FormaPagamento.Pix;
// pagamento = 'PIX'; // ERRO_EX06 // error TS2322: Type '"PIX"' is not assignable to type 'FormaPagamento'.
// Um literal string não é um membro do enum; use FormaPagamento.Pix.
console.log(`Pagamento: ${pagamento}`);
