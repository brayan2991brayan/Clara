const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: 'https://www.edgardcooper.com/en/',
    viewportWidth: 1000,
    viewportHeight: 660,
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttemps: false,
    chromeWebSecurity:false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
