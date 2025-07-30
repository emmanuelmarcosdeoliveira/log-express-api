# 📦 Log Express API

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=plastic&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=plastic&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.19.2-000000?style=plastic&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-336791?style=plastic&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.19.1-2D3748?style=plastic&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Jest](https://img.shields.io/badge/Jest-29.7.0-C21325?style=plastic&logo=jest&logoColor=white)](https://jestjs.io/)
[![GitHub Stars](https://img.shields.io/github/stars/emmanuelmarcosdeoliveira/log-express-api?style=social)](https://github.com/emmanuelmarcosdeoliveira/log-express-api)

<div align="center">
  <img src="https://img.shields.io/badge/API%20de%20Gerenciamento%20de%20Encomendas-FF6B6B?style=for-the-badge&logo=package&logoColor=white" alt="API de Gerenciamento de Encomendas">
</div>

---

## 📋 Menu de Navegação

- [🚀 Sobre o Projeto](#-sobre-o-projeto)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🏗️ Arquitetura e Padrões](#️-arquitetura-e-padrões)
- [⚙️ Configuração e Setup](#️-configuração-e-setup)
- [📚 Documentação da API](#-documentação-da-api)
- [🧪 Testes](#-testes)
- [📦 Deploy](#-deploy)

---

## 🚀 Sobre o Projeto

API RESTful desenvolvida em Node.js com TypeScript para gerenciamento de encomendas e logs de entrega. O projeto implementa autenticação JWT, validação de dados com Zod, e utiliza PostgreSQL como banco de dados com Prisma ORM.

**Desenvolvido por:** Emmanuel Oliveira  
**Fonte de Aprendizado:** Rocketseat

---

## 🛠️ Tecnologias Utilizadas

### Backend

- **Node.js** (>=18) - Runtime JavaScript
- **TypeScript** - Linguagem de programação tipada
- **Express.js** - Framework web para Node.js
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional

### Autenticação & Segurança

- **JWT** - Autenticação baseada em tokens
- **bcrypt** - Hash de senhas
- **Zod** - Validação de schemas

### Desenvolvimento & Testes

- **Jest** - Framework de testes
- **Supertest** - Testes de integração
- **tsx** - Executor TypeScript
- **tsup** - Bundler para produção

---

## 🏗️ Arquitetura e Padrões

### Estrutura do Projeto

```
src/
├── controllers/     # Controladores da aplicação
├── middlewares/     # Middlewares customizados
├── routes/          # Definição de rotas
├── configs/         # Configurações
├── database/        # Configurações do banco
├── types/           # Tipos TypeScript
├── utils/           # Utilitários
├── test/            # Testes
├── app.ts           # Configuração do Express
├── server.ts        # Servidor HTTP
└── env.ts           # Variáveis de ambiente
```

### Padrões Implementados

- **MVC** - Separação de responsabilidades
- **Repository Pattern** - Acesso a dados
- **Middleware Pattern** - Interceptação de requisições
- **Error Handling** - Tratamento centralizado de erros
- **Environment Configuration** - Configuração por ambiente

---

## ⚙️ Configuração e Setup

### Pré-requisitos

- Node.js >= 18
- Docker e Docker Compose
- Git

### 1. Clone o Repositório

```bash
git clone https://github.com/emmanuel-oliveira/log-express-api.git
cd log-express-api
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure as Variáveis de Ambiente

```bash
cp .env-example .env
```

Edite o arquivo `.env` com suas configurações:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/api-log-express"
JWT_SECRET="sua-chave-secreta-aqui"
PORT=3333
```

### 4. Inicie o Banco de Dados

```bash
docker-compose up -d
```

### 5. Execute as Migrações

```bash
npx prisma migrate dev
```

### 6. Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run test:dev     # Testes em modo watch
```

---

## 📚 Documentação da API

### Endpoints Principais

#### Autenticação

- `POST /auth/register` - Cadastro de usuário
- `POST /auth/login` - Login de usuário

#### Encomendas

- `GET /deliveries` - Listar encomendas
- `POST /deliveries` - Criar encomenda
- `PUT /deliveries/:id` - Atualizar encomenda
- `GET /deliveries/:id/logs` - Logs da encomenda

### Modelos de Dados

#### User

```typescript
{
  id: string;
  name: string;
  email: string;
  role: "customer" | "sale";
  createdAt: Date;
  updatedAt: Date;
}
```

#### Delivery

```typescript
{
  id: string;
  userId: string;
  description: string;
  status: "processing" | "shipped" | "delivered";
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 🧪 Testes

### Executar Testes

```bash
# Testes em modo watch
npm run test:dev

# Testes unitários
npm test

```

### Estrutura de Testes

- **Testes Unitários** - Funções e utilitários
- **Testes de Integração** - Endpoints da API
- **Testes de Banco** - Operações com Prisma

---

## 📦 Deploy

### Build para Produção

```bash
npm run build
```

### Variáveis de Ambiente para Produção

```env
DATABASE_URL="sua-url-do-banco-produção"
JWT_SECRET="chave-secreta-forte"
PORT=3333
NODE_ENV=production
```

---

## Contributors or owners

<img height="64px" src="https://res.cloudinary.com/delo0gvyb/image/upload/v1752287431/profile_mjvmdb.png"><br>

<small>Emmanuel Oliveira</small>

developed by 💖 [Emmanuel Oliveira](https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit)<br>

&copy; Todos os Direitos Reservados

### Contribute to the projects

> Clique na seta abaixo e veja como você pode contribuir para o projeto

<details close>

<summary>Como fazer uma contribuição ao Projeto ?</summary>

- Familiarize-se com a documentação do projeto, que geralmente inclui guias de instalação.<br>

- Explore o código do projeto para entender sua estrutura e funcionamento.

<br>

**Faça um Fork**

- Crie uma cópia (fork) do repositório original em sua conta do GitHub.<br>

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">

<a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"></a>

**Clone o Repositório**

Isso criará uma cópia local do projeto, onde você poderá fazer suas modificações.

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">

<a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository"></a>

**Crie uma Nova Branch:**

- Crie uma nova branch para isolar suas alterações.<br>

- Isso facilita a organização do seu trabalho e a criação de pull requests.<br>

**Faça as Alterações:**

- Crie funcionalidades, mude estilos ou resolva `bugs` que iram contribuir para a melhoria do Projeto.<br>

**Crie um Pull Request:**

- Inclua uma descrição clara das suas alterações e explique como elas resolvem o problema ou melhoram o projeto.<br>

- Solicitação: Envie um pull request para o repositório original, solicitando que suas alterações sejam incorporadas ao projeto.

  <br>

**Revise e Responda a Feedback:**

- Colabore: Os mantenedores do projeto podem solicitar alterações ou fornecer feedback sobre o seu código.

</details>

## Contact

[![Lindekin](https://img.shields.io/badge/--path?style=social&logo=Linkedin&logoColor=%230664C1&logoSize=auto&label=Linkedin&labelColor=%23fff&cacheSeconds=https%3A%2F%2Fwww.linkedin.com%2Fin%2Femmanuel-marcos-oliveira%2F)](https://www.linkedin.com/in/emmanuel-marcos-oliveira/)
[![WhatsApp](https://img.shields.io/badge/--path?style=social&logo=WhatsApp&logoColor=%231F3833&logoSize=auto&label=WhatsApp&color=%23fff&cacheSeconds=https%3A%2F%2Fwa.me%2F5511968336094)](https://wa.me/5511968336094)
<a href="mailto:ofs.dev.br@gmail.com"><img alt="Static Badge" src="https://img.shields.io/badge/--path?style=social&logo=Gmail&logoSize=auto&label=Gmail&cacheSeconds=--query&link=mailto%3Adev-oliveira%40outlook.com.br%22"> </a>

<sub>😁Obrigado por chegar até aqui!<sub>

## License

![Static Badge](https://img.shields.io/badge/--path?style=plastic&logo=mit&logoSize=auto&label=license%20MIT&labelColor=%23555555&color=%2397CA00)<br>

Released in 2025 This project is under the **MIT license**<br>
<br>

<div align="center">
**⭐ Se este projeto foi útil para você, considere dar uma estrela!**

</div>
