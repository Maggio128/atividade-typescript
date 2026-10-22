export {};
const itens: { nome: string; preco: number; quantidade: number }[] = [
  { nome: 'Arroz 5kg', preco: 28.90, quantidade: 1 },
  { nome: 'Feijão 1kg', preco: 8.49, quantidade: 2 },
  { nome: 'Leite 1L', preco: 4.99, quantidade: 6 },
  { nome: 'Café 500g', preco: 17.90, quantidade: 1 },
  { nome: 'Sabão em pó', preco: 12.50, quantidade: 1 }
];
const nomes: string[] = itens.map(item => item.nome);
const caros = itens.filter(item => item.preco > 10);
const total: number = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
const categorias: readonly string[] = ['Mercearia', 'Laticínios', 'Limpeza'];
// categorias.push('Higiene'); // ERRO_EX04 // error TS2339: Property 'push' does not exist on type 'readonly string[]'.
const despensa: number[][] = [[2, 0, 1], [4, 4], [1]];
const guardados = despensa.reduce((soma, prateleira) => soma + prateleira.reduce((s, n) => s + n, 0), 0);
const [primeiro, segundo] = itens;
const novaLista = [...itens, { nome: 'Sal 1kg', preco: 3, quantidade: 1 }];
console.log(`Itens: ${nomes.join(', ')}`);
console.log(`Acima de R$ 10: ${caros.map(item => item.nome).join(', ')}`);
console.log(`Total da compra: R$ ${total.toFixed(2)}`);
console.log(`Itens na despensa: ${guardados}`);
