# Etapa Técnica - Parte 2 - Testes Web

Esse repositório faz parte da etapa de avaliação para a vaga de QA e tem como objetivo avaliar os domínios em testes Web. Os testes foram desenvolvidos utilizando a linguagem Javascript e framework Cypress.

## Pré-requisitos:

Certifique-se de ter Node.js e npm instalados em seu ambiente de desenvolvimento.

___________________________________________________________________________________________________________________________________________________________________________________________________________________

# Instalação

1. Clone este repositório:

git clone https://github.com/lubruneliqa/nome-do-repositorio.git

2. Navegue até o diretório do projeto:

cd nome-do-repositorio

3. Instale as dependências do projeto:

npm install
___________________________________________________________________________________________________________________________________________________________________________________________________________________

# Executando os Testes

Para executar os testes, você pode abrir o Cypress Test Runner com o seguinte comando:

npx cypress open.

Isso abrirá a interface do Cypress, onde você poderá selecionar e executar os testes manualmente.
__________________________________________________________________________________________________________________________________________________________________________________________________________________

# Estrutura do Projeto

A estrutura do projeto é a seguinte:

├── cypress
│   ├── integration
│   │   └── challenging_dom_spec.js
│   ├── fixtures
│   ├── plugins
│   └── support
├── node_modules
├── README.md
├── cypress.json
├── package-lock.json
└── package.json

cypress/integration: Contém os arquivos de teste Cypress.
cypress/fixtures: Pode conter arquivos de dados para serem usados nos testes, se necessário.
cypress/plugins: Pode conter arquivos de plugins do Cypress.
cypress/support: Pode conter arquivos de suporte do Cypress.
cypress.json: Arquivo de configuração do Cypress.
package.json: Arquivo de configuração do npm/yarn.


