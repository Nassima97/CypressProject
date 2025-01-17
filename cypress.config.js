

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Pas besoin d'importer mochawesome ici
    }, 
    baseUrl: 'https://sendform.nicepage.io',
   },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // Dossier où les rapports seront générés
    overwrite: false,
    html: true,
    json: true,
  },
});
