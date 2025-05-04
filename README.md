# Backend Simples para Vercel

Este é um projeto backend simples criado para demonstração de deploy na Vercel.

## Funcionalidades

- API REST simples
- Endpoint que retorna "Hello World" em formato JSON
- Configurado com CORS para permitir requisições de qualquer origem

## Como executar localmente

1. Clone este repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o projeto:
   ```bash
   npm start
   ```
   Para desenvolvimento com auto-reload:
   ```bash
   npm run dev
   ```

## Como testar a API

Após iniciar o servidor, você pode acessar:

- http://localhost:3000

A resposta será um JSON:

```json
{
  "message": "Hello World"
}
```

## Como fazer deploy na Vercel

1. Faça push deste projeto para o GitHub
2. Acesse [Vercel](https://vercel.com)
3. Importe o repositório do GitHub
4. Siga as instruções de deploy

## Tecnologias utilizadas

- Node.js
- Express.js
- Vercel (para deploy)
