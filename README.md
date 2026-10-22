# Atividade de TypeScript com execução na web

Página com dez botões que executam os exercícios no navegador e mostram a saída. O código TypeScript pode ser consultado e baixado pela página.

## Publicar no GitHub Pages

1. Extraia o ZIP no computador.
2. Abra a pasta extraída e envie o CONTEÚDO ao repositório, usando Add file > Upload files. Arraste também a pasta dist para manter sua estrutura.
3. Confirme que index.html aparece na raiz do repositório, ao lado de ex01.ts e dos outros arquivos. Não envie somente o ZIP e não deixe index.html dentro de uma pasta adicional.
4. Salve em Commit changes. Se o GitHub pedir substituição de arquivos já enviados, confirme somente os arquivos desta atividade.
5. Acesse Settings > Pages.
6. Em Build and deployment > Source, escolha Deploy from a branch.
7. Selecione a branch main (ou a branch em que enviou os arquivos), a pasta /(root) e clique Save.
8. Aguarde a publicação e consulte o endereço exibido na própria seção Pages. Você pode acompanhar o andamento na aba Actions.
9. Abra o site e teste os dez botões antes de enviar a URL ao professor.

O endereço de um repositório chamado atividade-typescript normalmente será https://SEU-USUARIO.github.io/atividade-typescript/ . Use a URL real exibida pelo GitHub.

Documentação: https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Testar no computador

Abra index.html em um navegador com JavaScript habilitado. Não precisa instalar Node.js para usar a página entregue, nem abrir um terminal. Todos os exercícios e seus códigos estão incluídos no próprio HTML; não há bibliotecas externas.

## Arquivos

- index.html: página completa com execução, resultados e consulta aos códigos.
- ex01.ts a ex10.ts: soluções originais em TypeScript, com erros intencionais comentados.
- dist: JavaScript compilado para execução no Node.js.
- tsconfig.json: verificação estrita e compilação ES2017 em CommonJS.
- LEIA-ME.md: explicações da atividade e das correções.
- SAIDAS.txt e DIAGNOSTICOS.txt: resultados e erros didáticos registrados.
- atualizar-pagina.mjs: atualiza o HTML com os códigos e JavaScript após alterações.

## Atualizar os exercícios

A página executa funções isoladas construídas a partir do JavaScript compilado dos exercícios. Cada execução recebe um console próprio, cuja saída aparece na tela. Não são resultados fixos, e não há execução de TypeScript pelo navegador. O código TypeScript mostrado é uma cópia incluída no HTML.

Se editar os arquivos .ts, compile novamente e atualize a página:

    tsc -p .
    node atualizar-pagina.mjs

Depois envie ao GitHub os arquivos alterados, incluindo index.html e dist. Se você alterar apenas o arquivo .ts sem atualizar index.html, a página continuará executando a versão anterior.

Os exercícios atuais não usam dependências Node.js como fs ou require. A adaptação da página é específica para estes dez exercícios.
