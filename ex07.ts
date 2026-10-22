export {};
type Notificador = (destinatario: string, mensagem: string) => void;
const porEmail: Notificador = (d, m) => { console.log(`[E-MAIL] para ${d}: ${m}`); };
const porSms: Notificador = (d, m) => {
  if (m.length > 160) {
    console.log('SMS ignorado: mensagem longa');
    return;
  }
  console.log(`[SMS] para ${d}: ${m}`);
};
const porApp: Notificador = (d, m) => { console.log(`[APP] para ${d}: ${m}`); };
function notificarTodos(destinatarios: string[], mensagem: string, enviar: Notificador): void {
  destinatarios.forEach(d => enviar(d, mensagem));
}
const mensagem = 'Reunião de pais sexta às 19h';
notificarTodos(['ana@escola.com'], mensagem, porEmail);
notificarTodos(['joao.resp'], mensagem, porApp);
notificarTodos(['(69) 99999-0000'], 'a'.repeat(161), porSms);
// function teste(): void { return 10; } // ERRO_EX07 // error TS2322: Type 'number' is not assignable to type 'void'.
const contar: Notificador = (d, m) => m.length;
// A atribuição contextual a uma função que retorna void permite um valor de retorno:
// o chamador deve ignorá-lo. Uma função explicitamente declarada : void não pode retornar 10.
