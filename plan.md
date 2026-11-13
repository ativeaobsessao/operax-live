# Plano — OPERAX NEO

## Objetivo
Entregar uma LP mobile-first para base de leads quentes, com o visual verde/preto da LP de referência, copy atualizada literal, CTA para Telegram e chamada para a live do Google Meet.

## Implementação
- React 18 + Vite 6 + TypeScript, sem backend e sem dependências de UI.
- `src/copy.ts` centraliza todos os textos e os dois links.
- `src/App.tsx` organiza hero, criativo, live, oferta, bônus, fechamento e sticky CTA.
- `src/index.css` replica a paleta, tipografia Inter, cards, glow e layout da referência sem blur caro.
- `public/` contém os assets WebP e OG otimizados.
- `index.html` contém preload, OG estático e canonical.

## Design
A estética é uma interface dark-tech de conversão: preto-esverdeado, neon green, cards translúcidos, botão pill e glow controlado. A composição mantém uma coluna central de até 480px para leitura confortável no mobile.

## Critérios de aceite
- Copy nova literal, incluindo URL do Meet e alteração para “em uma semana”.
- Build `npm run build` sem erros.
- Nenhuma chamada externa na primeira carga além dos cliques do usuário.
- Criativo com `srcset`, `loading=eager`, `fetchpriority=high` e dimensões reservadas.
- OG estático e assets em `public/`.
