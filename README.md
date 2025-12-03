# LinkTree Clone

Este é um projeto de clone do LinkTree, criado para ser uma página de links centralizada. Foi desenvolvido utilizando React, TypeScript e Vite, fornecendo uma base moderna e eficiente para desenvolvimento web.

## 🚀 Começando

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento local.

**Pré-requisitos:**
*   Node.js (versão 18 ou superior)
*   npm, yarn ou pnpm

**Instalação e Execução:**

1.  Clone o repositório:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd linktree
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
    Abra [http://localhost:5173](http://localhost:5173) para visualizar o projeto no navegador.

## 🛠️ Tecnologias Utilizadas

*   **React** - Biblioteca para construir interfaces de usuário.
*   **TypeScript** - Superset de JavaScript que adiciona tipagem estática.
*   **Vite** - Ferramenta de build para desenvolvimento web moderno.

## ⚙️ Configuração do Ambiente de Desenvolvimento

Este projeto utiliza Vite com HMR (Hot Module Replacement) e algumas regras do ESLint para garantir a qualidade do código.

### Plugins do Vite

Atualmente, dois plugins oficiais estão disponíveis para integração com React:

*   **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)** utiliza [Babel](https://babeljs.io/) para Fast Refresh.
*   **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)** utiliza [SWC](https://swc.rs/) para Fast Refresh.

### Configuração do ESLint

Para aplicações em produção, é recomendado expandir a configuração do ESLint para habilitar regras de linting baseadas em tipos. Você pode encontrar mais detalhes sobre como fazer isso no arquivo `eslint.config.js` e na documentação oficial do `typescript-eslint`.
