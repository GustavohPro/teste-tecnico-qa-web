# 🧪 Automação de Testes E2E - Blog do Agi

Projeto de automação de testes E2E (End-to-End) para o [Blog do Agi](https://blog.agibank.com.br/) usando **Cypress** com abordagem centrada em **Comandos Customizáveis**.

## 📋 O que é este Projeto?

Este projeto implementa testes automatizados para validar a funcionalidade de busca no Blog do Agi, utilizando Cypress com foco em:
- ✅ **Comandos Customizáveis** - Abstrações reutilizáveis de alto nível
- ✅ **Fixtures de Dados** - Dados de teste centralizados em JSON
- ✅ **Estrutura Simples** - Organização clara sem complexidade desnecessária
- ✅ **Fácil Manutenção** - Suporte modularizado e bem organizado

---

## 🏗️ Estrutura do Projeto

```
cypress/
├── e2e/
│   └── search.cy.js              # Testes de funcionalidade
├── fixtures/
│   └── search-data.json          # Dados para os testes
└── support/
    ├── pages/
    │   └── SearchPage.js         # Seletores mapeados
    ├── commands/
    │   ├── searchCommands.js     # Comandos de busca
    │   └── navigationCommands.js # Comandos de navegação
    ├── commandsApi/
    │   └── apiCommands.js        # Comandos customizados de API (futuro)
    └── e2e.js                    # Configuração global
```

**Descrição dos Arquivos:**
- **e2e/** - Contém os arquivos de teste (.cy.js)
- **fixtures/** - JSON com dados de teste reutilizáveis
- **support/pages/** - Seletores mapeados da página (SearchPage.js)
- **support/commands/** - Comandos customizados do Cypress
- **support/commandsApi/** - Comandos de API quando necessário
- **support/e2e.js** - Imports globais e configuração

---

## 🎯 Cenários de Teste

### Cenário 1: Busca com Resultado Válido
- Usuario pesquisa por um termo que existe
- Sistema retorna artigos relacionados
- URL é atualizada com parâmetro de busca

### Cenário 2: Busca sem Resultado
- Usuario pesquisa por um termo inexistente
- Sistema exibe mensagem de "sem resultados"
- Nenhum artigo é listado

---

---

## 🚀 Como Começar

### Pré-requisitos

- **Node.js** v18.0.0 ou superior
- **npm** v9.0.0 ou superior

### Instalação

1. **Instalar Dependências**
   ```bash
   npm install
   ```

2. **Abrir Cypress (Interface Gráfica)**
   ```bash
   npm run cypress:open
   ```
   Depois selecione o arquivo de teste desejado.

### Executar Testes

**Modo Interativo (com UI do navegador visível):**
```bash
npm run test:headed
```

**Modo Headless (sem UI do navegador):**
```bash
npm test
```

**Modo Debug (pausar e inspecionar):**
```bash
npm run test:debug
```

**Com Navegadores Específicos:**
```bash
npm run test:firefox    # Firefox
npm run test:edge       # Edge
npm run test:all-browsers  # Todos (Chrome, Firefox, Edge)
```

---

## 🎮 Como Usar Comandos Customizados

Os comandos customizados simplificam os testes. Exemplo:

```javascript
// Usar comando em um teste
cy.visitBlog();
cy.searchArticle('cypress');
cy.verifySearchResults();
```

**Comandos Disponíveis:**
- `cy.visitBlog()` - Acessa o blog
- `cy.searchArticle(keyword)` - Pesquisa por termo
- `cy.verifySearchResults()` - Valida se há resultados
- `cy.verifyNoResults()` - Valida se não há resultados

### Para Adicionar Novo Comando

Edite `cypress/support/commands/` e crie um novo arquivo ou adicione ao existente:

```javascript
Cypress.Commands.add('meuComando', (param) => {
  // Implementação do comando
});
```

Importe em `cypress/support/e2e.js`:
```javascript
import './commands/meuComando';
```

---

## 🔧 Configuração

**Arquivo: cypress.config.js**
- Define a URL base (baseUrl)
- Configurações de timeout
- Plugins e reporters

Editar conforme necessário para sua URL de teste.

---

## 📚 Scripts npm Disponíveis

```json
{
  "cypress:open": "cypress open",           // Interface gráfica
  "cypress:run": "cypress run",             // Rodar tudo em headless
  "test": "cypress run --headless",         // Chrome headless
  "test:firefox": "cypress run --headless --browser firefox",
  "test:edge": "cypress run --headless --browser edge",
  "test:all-browsers": "npm run test && npm run test:firefox && npm run test:edge",
  "test:headed": "cypress run --headed",    // Com navegador visível
  "test:debug": "cypress run --headed --no-exit",
  "lint": "eslint cypress --fix"            // Lint dos testes
}
```

---

## ✅ Checklist de Uso

- [ ] `npm install` - Dependências instaladas
- [ ] `npm run cypress:open` - Cypress abrindo com interface
- [ ] Selecionar arquivo de teste
- [ ] Testes executando e passando
- [ ] Adicionar novos comandos em `support/commands/`
- [ ] Organizar dados em `fixtures/`

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique os testes em `cypress/e2e/`
2. Consulte os comandos em `cypress/support/commands/`
3. Revise os dados em `cypress/fixtures/`

---

**Última Atualização:** 17 de Março de 2026