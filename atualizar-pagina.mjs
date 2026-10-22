import { readFile, writeFile } from 'node:fs/promises';
const base = new URL('./', import.meta.url);
const sources = [];
const runners = [];
for (let i = 1; i <= 10; i++) {
  const id = 'ex' + String(i).padStart(2, '0');
  sources.push(await readFile(new URL(id + '.ts', base), 'utf8'));
  runners.push(await readFile(new URL('dist/' + id + '.js', base), 'utf8'));
}
const path = new URL('index.html', base);
const html = await readFile(path, 'utf8');
const start = html.indexOf('const sources=');
const end = html.indexOf('let selected=-1;', start);
if (start < 0 || end < 0) throw new Error('Estrutura da página não reconhecida');
const data = JSON.stringify(sources).replace(/</g, '\\u003c');
const functions = runners.map(js => 'function(console){const exports={};\n' + js + '\n}').join(',\n');
await writeFile(path, html.slice(0, start) + 'const sources=' + data + ';\nconst runners=[' + functions + '];\n' + html.slice(end));
console.log('Página atualizada com os dez exercícios compilados.');
