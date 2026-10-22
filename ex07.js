"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const porEmail = (d, m) => { console.log(`[E-MAIL] para ${d}: ${m}`); };
const porSms = (d, m) => {
    if (m.length > 160) {
        console.log('SMS ignorado: mensagem longa');
        return;
    }
    console.log(`[SMS] para ${d}: ${m}`);
};
const porApp = (d, m) => { console.log(`[APP] para ${d}: ${m}`); };
function notificarTodos(destinatarios, mensagem, enviar) {
    destinatarios.forEach(d => enviar(d, mensagem));
}
const mensagem = 'Reunião de pais sexta às 19h';
notificarTodos(['ana@escola.com'], mensagem, porEmail);
notificarTodos(['joao.resp'], mensagem, porApp);
notificarTodos(['(69) 99999-0000'], 'a'.repeat(161), porSms);
// function teste(): void { return 10; } // ERRO_EX07 // error TS2322: Type 'number' is not assignable to type 'void'.
const contar = (d, m) => m.length;
// A atribuição contextual a uma função que retorna void permite um valor de retorno:
// o chamador deve ignorá-lo. Uma função explicitamente declarada : void não pode retornar 10.
