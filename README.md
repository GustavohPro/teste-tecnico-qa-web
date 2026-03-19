# 🧪 Automação de Testes E2E - Blog do Agi

Projeto de automação de testes E2E (End-to-End) para o [Blog do Agi](https://blog.agibank.com.br/) utilizando **Cypress**, com abordagem **Page Object Model** para melhor manutenibilidade e reutilização de código.

## 📋 O que é este Projeto?

Este projeto implementa testes automatizados para validar a funcionalidade de busca no Blog do Agi, com foco em:

- ✅ **Page Object Model** - Seletores centralizados em `SearchPage.js`
- ✅ **Múltiplos Cenários** - Busca com resultados, sem resultados e validação de interface
- ✅ **Tratamento de Erros** - Filtragem de erros JavaScript não críticos do tema Astra
- ✅ **Validações Robustas** - Assertions que garantem estado do elemento antes de interações
- ✅ **Fácil Manutenção** - Estrutura organizada e escalável

---

## 🏗️ Estrutura do Projeto

```
cypress/
├── e2e/
│   └── search.cy.js               # Testes de busca (3 suites)
├── fixtures/
│   └── (diretório para dados futuros)
├── schemas/
│   └── (diretório para schemas API futuros)
├── support/
│   ├── pages/
│   │   └── SearchPage.js          # Page Object - seletores mapeados
│   ├── commands/
│   │   └── commandsApi.js         # Comandos customizados (futuro)
│   ├── e2e.js                     # Configuração global e imports
│   └── (screenshots, downloads auto-gerados)
└── cypress.config.js              # Configuração principal

package.json                        # Scripts e dependências
README.md                          # Este arquivo
```

---

## 🎯 Cenários de Teste Implementados

### 📌 Cenário 1: Busca com Resultado Válido
Valida que a busca retorna artigos quando pesquisa por termo existente.
- ✓ Clica no botão de busca
- ✓ Digita "blog" no campo de busca
- ✓ Pressiona Enter
- ✓ Verifica se há pelo menos 1 artigo nos resultados

### 📌 Cenário 2: Busca sem Resultado
Valida comportamento quando nenhum artigo é encontrado.
- ✓ Pesquisa por termo inexistente
- ✓ Verifica se nenhum artigo aparece
- ✓ Verifica se o termo permanece no campo de busca

### 📌 Validação da Interface de Busca
Testa elementos e comportamentos da interface.
- ✓ Campo de busca está visível após clicar no botão
- ✓ Possibilidade de limpar o campo
- ✓ URL é atualizada corretamente com parâmetro de busca

---

## 🚀 Como Começar

### Pré-requisitos

- **Node.js** v18.0.0 ou v20.0.0 (superior)
- **npm** (incluído com Node.js)

### Instalação

```bash
# Instalar dependências
npm install
```

---

## 🧪 Executar Testes

### Modo Interativo (Recomendado)
```bash
npm run cypress:open
```
Abre a interface gráfica do Cypress onde você pode selecionar e executar testes com visualização em tempo real.

### Modo Headless (Sem Interface)
```bash
npm test
```
Executa todos os testes em background no Chrome.

### Testes em Navegadores Específicos
```bash
npm run test:firefox        # Firefox
npm run test:edge           # Edge
npm run test:all-browsers   # Chrome + Firefox + Edge
```

### Modo Debug (Desenvolvimento)
```bash
npm run test:debug
```
Executa com navegador visível e pausa para inspeção.

### Modo Headed (Com Navegador Visível)
```bash
npm run test:headed
```
Executa todos os testes com o navegador visível.

---

## 📍 Seletores Mapeados (SearchPage.js)

```javascript
botaoBusca: '.ast-icon.icon-search'    // Botão de lupa
campoBusca: '#search-field'            // Campo de entrada
formularioBusca: 'form.search-form'    // Formulário
cartaoArtigo: '#post-4102 > ...'       // Cards de artigos
```

---

## ⚙️ Configuração (cypress.config.js)

| Configuração | Valor |
|:---|:---|
| **Base URL** | https://blog.agibank.com.br/ |
| **Timeout de Comando** | 10s |
| **Timeout de Página** | 30s |
| **Viewport** | 1280x720 |
| **Screenshots** | ✓ Ativado (falhas) |
| **Vídeos** | ✗ Desativado |
| **Retries** | 1 (headless) |
| **Chrome WebSecurity** | Desativado |

---

## 📚 Scripts npm Disponíveis

```bash
npm run cypress:open        # Abre interface gráfica
npm run cypress:run         # Executa testes (headless)
npm test                    # Chrome headless
npm run test:firefox        # Firefox headless
npm run test:edge           # Edge headless
npm run test:all-browsers   # Todos os navegadores
npm run test:headed         # Com navegador visível
npm run test:debug          # Debug mode
npm run test:spec           # Run specific spec file
npm run lint                # ESLint com auto-fix
npm run report              # Gera relatório HTML
```

---

## 🔍 Tratamento de Erros Conhecidos

A aplicação apresenta alguns erros JavaScript não críticos que são filtrados:

```javascript
Cypress.on('uncaught:exception', (err, runnable) => {
  if (
    err.message.includes('astra is not defined') ||
    err.message.includes('jetpackCarouselStrings is not defined') ||
    err.message.includes("Cannot read properties of undefined (reading 'publicPath')")
  ) {
    return false  // Ignora erro
  }
});
```

⚠️ **Nota:** Estes erros são do tema Astra e não impedem a execução dos testes.

---

## 🛠️ Adicionar Novos Testes

1. Adicione o teste em `cypress/e2e/search.cy.js`
2. Use os seletores de `SearchPage.js`
3. Siga o padrão BDD (Given/When/Then)

**Exemplo:**
```javascript
it('Deve fazer algo', () => {
  // Dado
  cy.visit('/');
  
  // Quando
  cy.get(seletores.botaoBusca).click();
  
  // Então
  cy.get(seletores.campoBusca).should('be.visible');
});
```

---

## 📊 Dependências

```json
{
  "cypress": "^13.6.5",
  "cypress-real-events": "^1.13.0",
  "@cypress/schematic": "^2.5.1",
  "eslint": "^8.56.0",
  "eslint-plugin-cypress": "^2.15.1"
}
```

---

## 📝 Boas Práticas

✅ **DO:**
- Use seletores do `SearchPage.js`
- Valide estado do elemento antes de interagir (`.should('be.visible')`)
- Use `.click()` em vez de `.trigger('click')`
- Adicione delays ao digitar: `type('texto', { delay: 50 })`

❌ **DON'T:**
- Hardcode seletores nos testes
- Use `.trigger('click')` para cliques reais
- Ignore timeouts sem motivo válido
- Deixe `it.only` nos commits

---

**Versão:** 1.0.0  
**Última Atualização:** 19 de Março de 2026  
**Autor:** QA Automation Team