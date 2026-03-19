// ============================================================================
// Import de Comandos Customizados
// ============================================================================

// Comandos de API (Requisições HTTP - futuro)
import './commands/commandsApi';

// ============================================================================
// Configurações Globais
// ============================================================================

// Aumentar o timeout padrão para elementos que podem levar mais tempo
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  return originalFn(url, { ...options, timeout: 30000 });
});

// ============================================================================
// Hooks Globais
// ============================================================================

// Antes de cada teste
beforeEach(() => {
  // Limpar localStorage e cookies antes de cada teste
  cy.clearAllCookies();
  cy.clearLocalStorage();
});

// Após cada teste (opcional - para debug)
afterEach(() => {
  // Logs adicionais para debugging
  cy.log('Teste finalizado');
});

// ============================================================================
// Tratamento de Erros Não Capturados
// ============================================================================

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignorar erros específicos que não afetam os testes
  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    return false;
  }
  return true;
});