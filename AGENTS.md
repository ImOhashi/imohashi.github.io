# AGENTS.md

## O que é este projeto

Site pessoal (currículo/apresentação) de Leonardo Ohashi, publicado via GitHub
Pages neste repositório (`imohashi.github.io`, então é servido na raiz do
domínio, sem `base` path).

Mantenha a separação dado (`src/data/profile.ts`) / instrução (`AGENTS.md`) /
apresentação (`src/pages/*.astro`) explícita.

## Estado atual

- Scaffold Astro mínimo criado (`npm create astro -- --template minimal`),
  dependências instaladas.
- `src/data/profile.ts` preenchido com os dados reais (extraídos do PDF do
  LinkedIn do usuário). Telefone deliberadamente omitido (decisão de
  privacidade); GitHub assumido como `github.com/ImOhashi`.
- `src/pages/index.astro` renderiza `profile.ts` (não tem dado hardcoded);
  seções: Sobre, Experiência, Formação, Skills, Idiomas, Certificações.
- `astro.config.mjs` com `site: 'https://imohashi.github.io'`.
- `.github/workflows/deploy.yml` criado (build com `withastro/action` +
  `actions/deploy-pages`) — falta habilitar "GitHub Actions" como source do
  Pages nas configurações do repo e dar push para main.
- `package.json` renomeado de `ossified-osiris` (nome aleatório do
  scaffold) para `imohashi.github.io`.
- Ainda faltam: habilitar Pages no GitHub, push/deploy, revisão visual do
  design.

## Desenvolvimento (Astro)

Ao iniciar o servidor de dev, use modo background:

```
astro dev --background
```

Gerencie com `astro dev stop`, `astro dev status`, `astro dev logs`.

Documentação completa: https://docs.astro.build

- [Rotas e páginas](https://docs.astro.build/en/guides/routing/)
- [Componentes Astro](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Estilos](https://docs.astro.build/en/guides/styling/)
