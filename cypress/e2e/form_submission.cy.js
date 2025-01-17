require('cypress-xpath');
describe('Form Submission Tests', () => {
    const clients = require('../fixtures/client-data.json');
  
    clients.forEach((client, index) => {
      it(`Send Form for ${client.genre} (Client ${index + 1})`, () => {
        cy.visit('/?version=13efcba7-1a49-45a5-9967-c2da8ebdd189&uid=f7bd60f0-34c8-40e3-8e2c-06cc19fcb730');
  
        // Sélection bouton radio
        cy.get(`input[type='radio'][value='${client.genre}']`).check();
  
        // Sélection du pays
        cy.get('#select-9648').select(client.Pays_de_naissance);
  
        // Remplir les champs texte
        cy.get('#email-c6a3').type(client.Email);
        cy.get('#name-c6a3').type(client.Name);
        cy.get('#phone-84d9').type(client.Phone);
        cy.get('#address-be2d').type(client.Address);
        cy.get('#message-c6a3').type(client.Message);
  
        // Sélection du produit
        cy.get('#select-c283').select(client.Product);
  
        // Cocher les cases de loisirs
        cy.contains('label', client.loisir).invoke('attr', 'for').then((checkboxId) => {
          cy.get(`#${checkboxId}`).check();
        });
  
        // Soumettre le formulaire
        cy.xpath('//*[@id="carousel_1853"]/div/div/div/div/form/div[12]/a').click();
  
        // Vérification du message de succès
        cy.xpath('//div[contains(@class, "u-form-send-message") and contains(@class, "u-form-send-success")]')
          .should('contain.text', 'Thank you! Your message has been sent.');
      });
    });
  });
  