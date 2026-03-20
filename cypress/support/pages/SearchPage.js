// =====================================================
// MAPEAMENTO DE SELETORES - BLOG DO AGIBANK
// =====================================================

const seletores = {
  // =====================================================
  // BUSCA
  // =====================================================
  // Seletor do botão de submit do formulário de busca
  botaoBusca: '.ast-icon.icon-search',
  campoBusca: '#search-field',
  formularioBusca: 'form.search-form',

  // =====================================================
  // ARTIGOS / POSTS
  // =====================================================
  containerArtigos: '.uagb-post-grid-wrapper',
  cartaoArtigo: 'article.post, .post-content, .entry-title a',
  tituloArtigo: '.uagb-article-title a',
  resumoArtigo: '.uagb-article-text',
  imagemArtigo: '.uagb-article-image img',
  autorArtigo: '.uagb-article-by-line',
  dataArtigo: '.uagb-article-date',
  tagsArtigo: '.uagb-article-cat-tag-wrapper a',
  conteudoPrincipal: 'main#main',
  containerSite: '.site-content, .hfeed',

  // =====================================================
  // NAVEGAÇÃO / MENU
  // =====================================================
  cabecalho: '#masthead',
  menuPrincipal: '.main-menu',
  itensMenu: '.main-menu li.menu-item',
  linksMenu: '.main-menu a.menu-link',
  botaoMenuMobile: 'button.ast-menu-toggle',

  // =====================================================
  // LOGO / MARCA
  // =====================================================
  logo: 'a.custom-logo-link',
  imagemLogo: '.custom-logo',
  marcaSite: '.site-branding',

  // =====================================================
  // RODAPÉ
  // =====================================================
  rodape: '#colophon',
  widgetsRodape: '.footer-widget',
  linksRodape: '#colophon a',
  redesSociaisRodape: '.ast-footer-social-links a',
  textoAutoria: '.ast-footer-copyright',
  linkFacebook: "a[href*='facebook.com/Agibank']",
  linkInstagram: "a[href*='instagram.com/agibank']",
  linkLinkedin: "a[href*='linkedin.com/company/agibank']",
  linkTiktok: "a[href*='tiktok.com/@agibank']",

  // =====================================================
  // PAGINAÇÃO
  // =====================================================
  containerPaginacao: '.uagb-post-pagination-wrap',
  linksNumeros: '.page-numbers',
  paginaAtual: '.page-numbers.current',
  proximaPagina: 'a.next.page-numbers',
  paginaAnterior: 'a.prev.page-numbers',

  // =====================================================
  // CATEGORIAS
  // =====================================================
  menuCategorias: '.menu-item-object-category',
  linksCategoria: "a[href*='/categoria/'], a[href*='/emprestimos/']",

  // =====================================================
  // CHAMADA PARA AÇÃO
  // =====================================================
  botoesCTA: 'button.wp-block-button__link',
  linksCTA: 'a.wp-block-button__link',
  linksApp: "a[href*='apps.apple.com/br'], a[href*='play.google.com/store']",
};

module.exports = seletores;