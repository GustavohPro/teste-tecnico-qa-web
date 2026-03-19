const seletores = require('../support/pages/SearchPage');

describe('Blog do Agi - Testes de Busca', () => {

  beforeEach(() => {
    // Visitar o blog antes de cada teste
    cy.visit('/');
    cy.get('body').should('be.visible');
  });

  /**
   * ========================================================================
   * CENÁRIO 1: Busca com Resultado Válido
   * 
   * Objetivo: Validar que a funcionalidade de busca retorna artigos
   *          relacionados ao termo pesquisado
   * ========================================================================
   */
  describe('Cenário 1: Busca com Resultado Válido', () => {

    // Ignora erros não críticos do tema Astra e Jetpack
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Ignora erros conhecidos que não impactam o fluxo de teste
      if (
        err.message.includes('astra is not defined') ||
        err.message.includes('jetpackCarouselStrings is not defined') ||
        err.message.includes("Cannot read properties of undefined (reading 'publicPath')")
      ) {
        return false
      }
    });

    it.only('Deve ter pelo menos 1 artigo nos resultados', () => {
      // Dado: Estou na página inicial
      cy.url().should('include', 'blog.agibank.com.br');

      // Clicar no ícone de lupa para abrir o campo de busca
      cy.get(seletores.botaoBusca).eq(1).trigger('click');

      // Quando: Pesquiso por um termo comum
      cy.get(seletores.campoBusca).clear().type('blog', { delay: 50 });
      cy.get(seletores.campoBusca).type('{enter}');

      // Então: Verifica se há artigos visíveis
      cy.get(seletores.cartaoArtigo)
        .should('have.length.greaterThan', 0);
    });
  });

  /**
   * ========================================================================
   * CENÁRIO 2: Busca sem Resultado
   * 
   * Objetivo: Validar que o sistema exibe comportamento apropriado
   *          quando nenhum artigo é encontrado
   * ========================================================================
   */
  describe('Cenário 2: Busca sem Resultado', () => {

    it('Deve exibir mensagem ou nenhum artigo ao pesquisar termo inexistente', () => {
      // Dado: Estou na página inicial
      cy.url().should('include', 'blog.agibank.com.br');

      // Clicar no ícone de lupa para abrir o campo de busca
      cy.get(seletores.botaoBusca).eq(1).trigger('click');

      // Quando: Pesquiso por um termo que não existe
      cy.get(seletores.campoBusca).clear().type('qawertyuiopasdfghjklzxcvbnmqwertyuiop', { delay: 50 });
      cy.get(seletores.campoBusca).type('{enter}');

      // Então: Nenhum artigo deve aparecer
      cy.get(seletores.cartaoArtigo)
        .should('have.length', 0);
    });

    it('Deve manter o termo de busca no campo mesmo sem resultados', () => {
      // Dado: Estou na página inicial
      cy.url().should('include', 'blog.agibank.com.br');

      // Clicar no ícone de lupa para abrir o campo de busca
      cy.get(seletores.botaoBusca).eq(1).trigger('click');

      // Quando: Pesquiso por termo inexistente
      const searchTerm = 'termoinexistente123';
      cy.get(seletores.campoBusca).clear().type(searchTerm, { delay: 50 });
      cy.get(seletores.campoBusca).type('{enter}');

      // Então: O termo deve permanecer no campo de busca
      cy.get(seletores.campoBusca).should('have.value', searchTerm);
    });
  });

  /**
   * ========================================================================
   * TESTES DE VALIDAÇÃO DA INTERFACE
   * 
   * Objetivo: Garantir que a interface de busca funciona corretamente
   * ========================================================================
   */
  describe('Validação da Interface de Busca', () => {

    it('Deve ter campo de busca visível na página inicial', () => {
      // Dado: Estou na página inicial
      cy.url().should('include', 'blog.agibank.com.br');

      // Clicar no ícone de lupa para abrir o campo de busca
      cy.get(seletores.botaoBusca).eq(1).trigger('click');

      // Então: Campo de busca está visível
      cy.get(seletores.campoBusca, { timeout: 10000 }).should('be.visible');
    });

    it('Deve ser possível limpar o campo de busca', () => {
      // Dado: Estou na página inicial
      cy.url().should('include', 'blog.agibank.com.br');

      // Clicar no ícone de lupa para abrir o campo de busca
      cy.get(seletores.botaoBusca).eq(1).trigger('click');

      // Quando: Digito um termo
      cy.get(seletores.campoBusca).clear().type('teste', { delay: 50 });

      // E: Limpo o campo usando o comando específico
      cy.get(seletores.campoBusca).clear();

      // Então: Campo fica vazio
      cy.get(seletores.campoBusca).should('have.value', '');
    });

    it('Deve estar na URL correta após busca', () => {
      // Dado: Estou na página inicial
      cy.url().should('include', 'blog.agibank.com.br');

      // Clicar no ícone de lupa para abrir o campo de busca
      cy.get(seletores.botaoBusca).eq(1).trigger('click');

      // Quando: Pesquiso por algo
      const keyword = 'automation';
      cy.get(seletores.campoBusca).clear().type(keyword, { delay: 50 });
      cy.get(seletores.campoBusca).type('{enter}');

      // Então: URL contém parâmetro de busca
      cy.url().should('include', `s=${encodeURIComponent(keyword)}`);
    });
  });

});