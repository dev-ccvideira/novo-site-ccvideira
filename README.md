# CCVideira - Website institucional

Website moderno para a **CCVideira - Comunidade Cristã Videira**, criado com Next.js, React, TypeScript, Tailwind CSS e Sanity CMS.

O projeto comunica a ideia **"Uma Igreja, Uma Casa"** e prioriza visitantes novos, membros, campus, generosidade, projetos sociais, próximos passos, eventos, mensagens e comunicação institucional.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Sanity CMS embutido em `/admin`
- API interna para formulários
- Resend para notificações por e-mail
- Vercel para hospedagem

## Rodando localmente

```bash
npm install
npm run dev
```

Crie `.env.local` a partir de `.env.example` e preencha os valores do Sanity e Resend quando estiverem disponíveis.

## Rotas principais

- `/`
- `/bem-vindo-a-casa`
- `/sobre`
- `/campus`
- `/campus/[slug]`
- `/cultos-e-horarios`
- `/generosidade`
- `/contato`
- `/projetos-sociais`
- `/projetos-sociais/[slug]`
- `/proximos-passos`
- `/mensagens`
- `/mensagens/[slug]`
- `/eventos`
- `/eventos/[slug]`
- `/ministerios`
- `/ministerios/[slug]`
- `/grupos`
- `/portal-educa`
- `/ao-vivo`
- `/pedido-de-oracao`
- `/voluntariado`
- `/admin`

## CMS

O Sanity Studio fica em `/admin`. Os tipos de conteúdo criados são:

- Configurações gerais
- Páginas institucionais
- Campus
- Eventos
- Projetos sociais
- Mensagens e sermões
- Ministérios
- Campanhas de generosidade
- Formulários recebidos

## Formulários

A rota `POST /api/forms` recebe:

- Contato
- Planeje sua visita
- Próximos passos
- Voluntariado
- Pedido de oração

Com `SANITY_API_WRITE_TOKEN`, os dados são salvos em `formSubmission`. Com `RESEND_API_KEY`, `FORMS_FROM_EMAIL` e `FORMS_TO_EMAIL`, uma notificação é enviada por e-mail.

## Observação importante

Não há dados oficiais inventados no código. Textos doutrinários, liderança, dados bancários, endereços, horários, links e projetos estão como placeholders editáveis e devem ser validados pela liderança antes da publicação.
