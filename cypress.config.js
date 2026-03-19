const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://blog.agibank.com.br/',
    setupNodeEvents(on, config) {
      // Implementar event listeners aqui se necessário
    },
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    video: false,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  commandTimeout: 10000,
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  taskTimeout: 60000,
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  retries: {
    runMode: 1,
    openMode: 0,
  },
});
