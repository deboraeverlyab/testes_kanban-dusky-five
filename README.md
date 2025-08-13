# Testes kanban-dusky-five

Este repositório contém testes automatizados para o site  [kanban-dusky-five]([https://nodejs.org/](https://kanban-dusky-five.vercel.app/)), desenvolvidos utilizando a ferramenta de automação de testes Cypress. Além disso, os Bugs estão reportados no notion -> https://www.notion.so/Testes-Kukac-24ee51344aa080fba931cb057883f5f4?source=copy_link

### Pré-requisitos para executar o Cypress

Antes de executar os testes, certifique-se de ter os seguintes softwares instalados em sua máquina:

- Node.js: Versão 12 ou superior. Você pode baixá-lo em nodejs.org.

- npm: Geralmente vem junto com a instalação do Node.js.

### Instalação

Siga os passos abaixo para configurar o ambiente de testes:

1. Clone o repositório:

```bash
git clone https://github.com/deboraeverlyab/testes_kanban-dusky-five.git
```

2. Navegue até o diretório do projeto:

```bash
cd testes_kanban-dusky-five
```


3. Instale as dependências:

```bash
npm install
```


### Como Executar os Testes

#### Modo Interativo (Cypress Test Runner)

Este modo abre a interface gráfica do Cypress, permitindo que você visualize os testes sendo executados em tempo real e depure-os.

```bash
npx cypress open 
```


Estrutura do Projeto

O projeto está organizado da seguinte forma:

Plain Text

```bash
testes_kanban-dusky-five/
├── cypress/
│   ├── e2e/                  # Arquivos de teste Cypress
│   │   ├── add_task.cy.js
│   │   └── delete_task.cy.js
│   ├── fixtures/             # Dados de teste (mocks, stubs)
│   └── support/              # Comandos e configurações customizadas do Cypress
├── cypress.config.js         # Configurações do Cypress
├── package.json              # Dependências e scripts do projeto
└── package-lock.json         # Bloqueio de versões das dependências

```

## 📧 Contato

Débora Everly  
[LinkedIn](https://www.linkedin.com/in/debora-everly/)
e-mail: deboraeverly@hotmail.com
