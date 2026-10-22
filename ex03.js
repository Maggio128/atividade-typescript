"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paciente = {
    cpf: '000.000.000-00', nome: 'Ana Souza', idade: 34, plano: true,
    alergias: ['dipirona', 'lactose'],
    contatoEmergencia: { nome: 'Paulo Souza', telefone: '(69) 99999-0000' }
};
const paciente2 = {
    cpf: '111.111.111-11', nome: 'Carlos Lima', idade: 61, plano: false
};
function resumo(p) {
    const alergias = p.alergias && p.alergias.length > 0
        ? `Alergias: ${p.alergias.join(', ')}` : 'Sem alergias registradas';
    return `${p.nome}, ${p.idade} anos. ${alergias}`;
}
console.log(resumo(paciente));
console.log(resumo(paciente2));
// paciente.cpf = '222'; // ERRO_EX03A // error TS2540: Cannot assign to 'cpf' because it is a read-only property.
// paciente.peso = 65; // ERRO_EX03B // error TS2339: Property 'peso' does not exist on type '{ readonly cpf: string; nome: string; idade: number; plano: boolean; alergias?: string[] | undefined; contatoEmergencia?: { nome: string; telefone: string; } | undefined; }'.
let dados = paciente;
// console.log(dados.nome); // ERRO_EX03C // error TS2339: Property 'nome' does not exist on type 'object'.
// object aceita valores não primitivos, mas não declara a propriedade nome.
let x = 10; // {} aceita todo valor não nulo nem undefined, inclusive primitivos.
// let y: object = 10; // ERRO_EX03D // error TS2322: Type 'number' is not assignable to type 'object'.
// Object também aceita primitivos não nulos por seu contrato de objeto encapsulado;
// não equivale ao tipo object. Para campos conhecidos, use um tipo específico.
