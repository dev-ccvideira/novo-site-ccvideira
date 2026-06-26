# Guia de implantação

## 1. Criar o projeto no Sanity

1. Crie uma conta em `sanity.io`.
2. Crie um novo projeto.
3. Copie `projectId` e `dataset`.
4. Preencha no `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-06-24
SANITY_API_WRITE_TOKEN=
```

O token de escrita deve ter permissão para criar documentos de formulário.

## 2. Publicar na Vercel

1. Envie o repositório para GitHub.
2. Importe o projeto na Vercel.
3. Configure as variáveis de ambiente da Vercel usando `.env.example`.
4. Rode o build padrão `npm run build`.
5. Aponte o domínio `www.ccvideira.com.br` para a Vercel conforme as instruções DNS exibidas no painel.

## 3. E-mail dos formulários

Recomendação inicial: Resend.

Variáveis:

```bash
RESEND_API_KEY=
FORMS_FROM_EMAIL=site@ccvideira.com.br
FORMS_TO_EMAIL=contato@ccvideira.com.br
```

O domínio remetente precisa ser validado no provedor de e-mail.

## 4. Analytics e Search Console

1. Crie uma propriedade GA4.
2. Preencha `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`.
3. Cadastre o domínio no Google Search Console.
4. Envie `https://www.ccvideira.com.br/sitemap.xml`.

## 5. Domínios e SSL

A Vercel emite SSL automaticamente após o DNS estar correto. Mantenha `NEXT_PUBLIC_SITE_URL=https://www.ccvideira.com.br`.
