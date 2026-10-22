# Atividade de tipos em TypeScript resolvida

Os arquivos ex01.ts a ex10.ts correspondem aos dez exercícios. Todos começam com export {}; e usam verificação estrita. O único any escrito explicitamente está na demonstração solicitada no exercício 09. Os dados de pacientes e contatos são fictícios.

## Como executar

Pré-requisitos: Node.js e o compilador TypeScript disponíveis no terminal. Abra esta pasta no terminal e execute:

    tsc -p .
    node dist/ex01.js

Troque ex01 por ex02 até ex10. Os JavaScript já compilados também estão na pasta dist, de modo que podem ser executados diretamente com Node.js.

Para compilar um exercício isolado, usando as mesmas opções do projeto:

    tsc --strict --target ES2017 --module commonjs --noEmitOnError --ignoreConfig ex02.ts
    node ex02.js

A opção --ignoreConfig é do TypeScript 6 ou superior e permite passar arquivos diretamente mesmo com tsconfig.json presente. Em versões anteriores que não reconheçam essa opção, remova apenas --ignoreConfig. Prefira tsc -p . para usar a configuração incluída.

## Falhas e ajustes

1. O comando mínimo do enunciado pode rejeitar padStart, Number.isFinite, Number.isInteger, Number.isSafeInteger e repeat quando usa bibliotecas antigas como padrão. O tsconfig.json define target ES2017, que inclui essas APIs, e module CommonJS, adequado ao modo de execução entregue. O ambiente Node.js precisa oferecer essas APIs; a compilação não adiciona polyfills.
2. Linhas de erro propositais não podem permanecer ativas no código final. Elas foram testadas em cópias temporárias, depois mantidas comentadas nos arquivos originais com as mensagens reais do compilador. DIAGNOSTICOS.txt reúne a saída integral. O experimento da Van foi feito ampliando a união Veiculo; o erro aparece na atribuição a never, comprovando a verificação exaustiva. A união final permanece com os três veículos pedidos.
3. No exercício 09, any permite compilar a chamada toFixed sobre uma string; a execução gera TypeError. A linha ficou comentada após a reprodução. A solução com unknown valida o objeto e os campos antes de usá-los, identifica JSON malformado e trata cada falha sem interromper os demais casos.
4. No exercício 05, a média de 23.0°C corresponde às cinco capitais. O histórico semanal é um conjunto separado; o exemplo escolhido tem média de 33°C. Ambas as médias são calculadas. A função extremos rejeita uma lista vazia, e o histórico vazio produz null para evitar divisão por zero.
5. No exercício 10, período usa horas inteiras em uma escala crescente. Para atravessar a meia-noite, represente a saída no dia seguinte, por exemplo [23, 25]; não use [23, 1]. A saída igual à entrada cobra uma hora. Uma saída anterior à entrada é rejeitada. O desconto de 50% incide sobre o valor total, após somar a primeira hora e as adicionais.
6. Os totais fornecidos nos exercícios 04 e 10 estão corretos: R$ 106.22 e R$ 83.50. O estacionamento cobra R$ 18.00, R$ 4.00, R$ 55.00 e R$ 6.50 para os quatro casos, respectivamente.
7. A validação externa do estacionamento exige placa em formato brasileiro sem hífen, portas 2 ou 4, cilindrada positiva e finita e eixos inteiros a partir de 2. O código de cliente é normalizado para CLI- e quatro dígitos, aceitando valores de 0 a 9999; entradas fora desse contrato são rejeitadas.
8. readonly impede reatribuição em TypeScript, sem congelar o objeto em execução. O spread cria um novo ticket; veículo e período continuam compartilhados, mas fecharTicket não os altera. Não há promessa de cópia profunda.

## Reflexões e detalhes por exercício

- 01: aberta é inferida como boolean. Os separadores numéricos não mudam o valor; 0x1A representa 26 em decimal. O tipo foi conferido pelas regras do compilador; não foi simulado um gesto no VS Code.
- 02: o nome é convertido para minúsculas antes da capitalização, com da, de e do preservados. A separação aceita também múltiplos espaços e outros espaços em branco.
- 03: object representa valores não primitivos e não declara nome; {} aceita valores não nulos, inclusive 10. Object, com inicial maiúscula, também permite primitivos não nulos e não substitui um tipo com propriedades específicas.
- 04: map, filter e reduce produzem nomes, produtos caros, total e soma da matriz sem for. A desestruturação e o spread estão no arquivo; a lista original permanece com cinco itens.
- 05: tuplas nomeadas documentam cada posição. O e-mail opcional pode faltar; o elemento rest permite qualquer quantidade de leituras semanais.
- 06: o enum numérico oferece mapeamento reverso; o enum de strings exige um membro como FormaPagamento.Pix. Pedidos entregues ou cancelados não avançam.
- 07: return vazio encerra o SMS longo. Uma função com retorno explicitamente void não pode retornar 10; uma função atribuída a Notificador pode produzir um número, pois esse contrato orienta o chamador a ignorar o retorno.
- 08: typeof estreita a união. const r preserva o literal sul; let r2 amplia para string. as const mantém o literal na correção. Telefone como número não preserva zeros iniciais já perdidos; prefira string para dados reais.
- 09: unknown exige validação, enquanto never indica que falhar não retorna. Os três casos simulados são executados com catch de tipo unknown.
- 10: a união discriminada permite acessar os campos de cada veículo com segurança. O relatório usa map, filter e reduce e preserva os tickets originais.

## Resultados e verificação

SAIDAS.txt contém as saídas obtidas para os dez exercícios. DIAGNOSTICOS.txt contém os erros intencionais reais. A verificação também cobre tarifa mínima com selo, hora adicional de moto, preservação do ticket original e rejeição de entradas externas inválidas.

As mensagens do compilador podem variar conforme a versão do TypeScript. Os arquivos foram verificados com TypeScript 7.0.2.
