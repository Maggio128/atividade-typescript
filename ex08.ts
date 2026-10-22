export {};
let codigo: number | string = 42;
function formatarCodigo(c: number | string): string {
  const numero = typeof c === 'number' ? c : Number(c.replace(/^CLI-/, ''));
  if (!Number.isSafeInteger(numero) || numero < 0 || numero > 9999 ||
      (typeof c === 'string' && !/^(CLI-)?\d{1,4}$/.test(c))) {
    throw new Error('Código inválido: informe de 0 a 9999 ou CLI- seguido de até quatro dígitos');
  }
  return `CLI-${String(numero).padStart(4, '0')}`;
}
type Tamanho = 'P' | 'M' | 'G' | 'GG';
let tamanho: Tamanho = 'M';
// tamanho = 'XG'; // ERRO_EX08A // error TS2322: Type '"XG"' is not assignable to type 'Tamanho'.
function calcularFrete(regiao: 'norte' | 'nordeste' | 'centro-oeste' | 'sudeste' | 'sul'): number {
  return { norte: 25, nordeste: 20, 'centro-oeste': 18, sudeste: 12, sul: 15 }[regiao];
}
const complemento: string | null = null;
function limparTelefone(tel: string | number): string { return String(tel).replace(/\D/g, ''); }
const r = 'sul'; // const mantém o tipo literal 'sul'.
let r2 = 'sul'; // let amplia o tipo para string, pois permite reatribuição.
// calcularFrete(r2); // ERRO_EX08B // error TS2345: Argument of type 'string' is not assignable to parameter of type '"centro-oeste" | "nordeste" | "norte" | "sudeste" | "sul"'.
let rCorrigido = 'sul' as const;
console.log(`Cliente: ${formatarCodigo(codigo)} | Camiseta: ${tamanho}`);
console.log(`Entrega: Rua das Flores, 100 - ${complemento ?? '(sem complemento)'}`);
console.log(`Frete para o ${r}: R$ ${calcularFrete(rCorrigido).toFixed(2)}`);
console.log(`Telefone: ${limparTelefone('(69) 99999-0000')}`);
