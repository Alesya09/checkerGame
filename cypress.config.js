const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: 'https://www.gamesforthebrain.com/game/checkers/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
