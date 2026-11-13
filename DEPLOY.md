# Deploy correto na Vercel

O erro anterior foi `Failed to resolve /src/main.tsx`: o commit enviado ao GitHub não continha o entrypoint `src/main.tsx` ou a Vercel estava configurada com Root Directory incorreto.

## Estrutura obrigatória

O projeto precisa ser enviado inteiro, com estes caminhos relativos à raiz do repositório:

- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- `src/copy.ts`
- `src/index.css`
- `package.json`
- `vite.config.ts`
- `public/operax-neo-480.webp`
- `public/operax-neo-960.webp`
- `public/og-operax-neo.jpg`

Na Vercel, deixe **Root Directory** como `./` (raiz do repositório). Não coloque `index.html` sozinho na raiz nem envie somente a pasta `public`.

## Comandos locais

```bash
npm install
npm run build
```

O build deve terminar com `vite build` sem erros. A Vercel deste projeto exige Node `26.x`; essa versão está definida em `package.json` e `.nvmrc`.

## CTAs desta versão

O título da live fica acima do único botão do topo. O botão usa a frase de CTA aprovada e mantém o link do Google Meet somente no `href`, sem URL aparente no front-end. A live não aparece novamente dentro do card de conteúdo. O CTA final e o sticky apontam para o Telegram informado, também sem exibir o URL.
