export {};
const respostaOk = '{"cidade":"Porto Velho","temperatura":34,"umidade":0.62}';
const respostaQuebrada = '{"cidade":"Porto Velho","temperatura":"quente"}';
const respostaInvalida = '{ cidade: Porto Velho ';
function lerComAny(json: string): void {
  const dados: any = JSON.parse(json); // any autorizado somente nesta demonstração.
  console.log(dados.temperatura.toFixed(1));
}
// lerComAny(respostaQuebrada); // ERRO_RUNTIME // TypeError: dados.temperatura.toFixed is not a function
function falhar(mensagem: string): never { throw new Error(mensagem); }
function lerClima(json: string): { cidade: string; temperatura: number } {
  let dados: unknown;
  try { dados = JSON.parse(json); }
  catch (erro: unknown) {
    if (erro instanceof SyntaxError) return falhar('JSON malformado');
    throw erro;
  }
  if (typeof dados !== 'object' || dados === null) return falhar('resposta deve ser um objeto');
  if (!('cidade' in dados) || typeof dados.cidade !== 'string' || dados.cidade.trim() === '')
    return falhar('campo "cidade" inválido');
  if (!('temperatura' in dados) || typeof dados.temperatura !== 'number' || !Number.isFinite(dados.temperatura))
    return falhar('campo "temperatura" inválido');
  return { cidade: dados.cidade, temperatura: dados.temperatura };
}
for (const resposta of [respostaOk, respostaQuebrada, respostaInvalida]) {
  try {
    const clima = lerClima(resposta);
    console.log(`${clima.cidade}: ${clima.temperatura.toFixed(1)}°C`);
  } catch (erro: unknown) {
    console.log(`Erro: ${erro instanceof Error ? erro.message : 'erro desconhecido'}`);
  }
}
