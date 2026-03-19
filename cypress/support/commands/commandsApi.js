/**
 * Comandos Customizados para API
 * 
 * Comandos reutilizáveis para requisições HTTP ao Blog do Agi
 * (Use quando precisar fazer requisições diretas à API em testes futuros)
 */

/**
 * Faz uma requisição GET à API do blog
 * 
 * @param {string} endpoint - Endpoint da API
 * @param {object} opcoes - Opções customizadas da requisição
 * 
 * @example
 * cy.obterDaApi('/wp-json/wp/v2/posts', { auth: { username: 'usuario', password: 'senha' } });
 */
Cypress.Commands.add('obterDaApi', (endpoint, opcoes = {}) => {
  cy.request({
    method: 'GET',
    url: endpoint,
    ...opcoes,
  });
});

/**
 * Faz uma requisição POST à API do blog
 * 
 * @param {string} endpoint - Endpoint da API
 * @param {object} corpo - Dados a enviar
 * @param {object} opcoes - Opções customizadas da requisição
 * 
 * @example
 * cy.enviarParaApi('/wp-json/wp/v2/posts', { titulo: 'Novo Post' });
 */
Cypress.Commands.add('enviarParaApi', (endpoint, corpo = {}, opcoes = {}) => {
  cy.request({
    method: 'POST',
    url: endpoint,
    body: corpo,
    ...opcoes,
  });
});

/**
 * Faz uma requisição DELETE à API do blog
 * 
 * @param {string} endpoint - Endpoint da API
 * @param {object} opcoes - Opções customizadas da requisição
 * 
 * @example
 * cy.deletarDaApi('/wp-json/wp/v2/posts/123');
 */
Cypress.Commands.add('deletarDaApi', (endpoint, opcoes = {}) => {
  cy.request({
    method: 'DELETE',
    url: endpoint,
    ...opcoes,
  });
});