// describe('Campus France Form Tests', () => {
//     const testData = require('../fixtures/campus-data.json');

//     testData.forEach((entry, index) => {
//         it(`Form Submission Test - ${entry.Status} (${index + 1})`, () => {
//             cy.visit(entry.Url);
//             cy.viewport(1900, 1080);

//             // Accepter les cookies
//             // cy.get('#tarteaucitronPersonalize2').click();
//             cy.get('button#tarteaucitronPersonalize2').click();
//             // cy.xpath("//button[@id='tarteaucitronPersonalize2']").click();



//             // Remplir les champs obligatoires
//             cy.get('input.username').type(entry.Email);
//             cy.get('#edit-pass-pass1').type(entry.Password);
//             cy.get('#edit-pass-pass2').type(entry.Confirm_password);

//             // Sélectionner la civilité
//             cy.get(`label[for='edit-field-civilite-${entry.Gender}']`).click();

//             cy.get('#edit-field-prenom-0-value').type(entry.Firstname);
//             cy.get('#edit-field-nom-0-value').type(entry.Lastname);

//             // Sélectionner le pays
//             cy.get('#edit-field-pays-concernes-selectized').click().clear().type(entry.Country);
//             cy.get('.selectize-dropdown-content div').contains(entry.Country).click();

//             cy.get('#edit-field-code-postal-0-value').type(entry.Postal_code);
//             cy.get('#edit-field-ville-0-value').type(entry.City);
//             cy.get('#edit-field-telephone-0-value').type(entry.Phone);

//             // Sélectionner le statut
//             if (entry.Status === 'Étudiants') {
//                 cy.get(`label[for='edit-field-publics-cibles-2']`).click();

//                 // Domaine d'études
//                 cy.get('#edit-field-domaine-etudes-selectized').click().clear().type(entry.Domain);
//                 cy.get('.selectize-dropdown-content div').contains(entry.Domain).click();

//                 cy.get('#edit-field-niveaux-etude-selectized').click().clear().type(entry.Level);
//                 cy.get('.selectize-dropdown-content div').contains(entry.Level).click();

//             } else if (entry.Status === 'Chercheurs') {
//                 cy.get(`label[for='edit-field-publics-cibles-3']`).click();

//                 // Domaine d'études
//                 cy.get('#edit-field-domaine-etudes-selectized').click().clear().type(entry.Domain);
//                 cy.get('.selectize-dropdown-content div').contains(entry.Domain).click();

//                 cy.get('#edit-field-niveaux-etude-selectized').click().clear().type(entry.Level);
//                 cy.get('.selectize-dropdown-content div').contains(entry.Level).click();

//             } else if (entry.Status === 'Institutionnel') {
//                 cy.get(`label[for='edit-field-publics-cibles-4']`).click();

//                 cy.get('#edit-field-fonction-0-value').type(entry.Fonction);
//                 cy.get('#edit-field-type-organisme-selectized').click().clear().type(entry.TypeOrganisme);
//                 cy.get('.selectize-dropdown-content div').contains(entry.TypeOrganisme).click();

//                 cy.get('#edit-field-nom-organisme-0-value').type(entry.OrganismeName);
//             }

//             // Accepter les termes et conditions
//             if (entry.Accept) {
//                 cy.get(`label[for='edit-field-accepte-communications-value']`).click();
//             }

//             // Soumettre le formulaire
//             // cy.get('#edit-actions').click();

//             cy.log(`Formulaire soumis avec succès pour ${entry.Email}`);
//         });
//     });
// });

  
  // Test pour le premier cas (Étudiants)
describe('Campus France Form - Student', () => {
    const testData = require('../fixtures/campus-data.json');
    const entry = testData[0];

    it('Submit form for Student', () => {
        cy.visit(entry.Url);
        cy.viewport(1900, 1080);

        cy.get('#tarteaucitronPersonalize2').click();

        cy.get('input.username').type(entry.Email);
        cy.get('#edit-pass-pass1').type(entry.Password);
        cy.get('#edit-pass-pass2').type(entry.Confirm_password);
        cy.get(`label[for='edit-field-civilite-${entry.Gender}']`).click();

        cy.get('#edit-field-prenom-0-value').type(entry.Firstname);
        cy.get('#edit-field-nom-0-value').type(entry.Lastname);

        cy.get('#edit-field-pays-concernes-selectized').click().clear().type(entry.Country);
        cy.get('.selectize-dropdown-content div').contains(entry.Country).click();

        cy.get('#edit-field-code-postal-0-value').type(entry.Postal_code);
        cy.get('#edit-field-ville-0-value').type(entry.City);
        cy.get('#edit-field-telephone-0-value').type(entry.Phone);

        cy.get(`label[for="edit-field-publics-cibles-2"]`).click();

        cy.get('#edit-field-domaine-etudes-selectized').click().clear().type(entry.Domain);
        cy.get('.selectize-dropdown-content div').contains(entry.Domain).click();

        cy.get('#edit-field-niveaux-etude-selectized').click().clear().type(entry.Level);
        cy.get('.selectize-dropdown-content div').contains(entry.Level).click();

        if (entry.Accept) {
            cy.get(`label[for="edit-field-accepte-communications-value"]`).click();
        }

        cy.log(`Formulaire soumis avec succès pour ${entry.Email}`);
    });
});

// Test pour le deuxième cas (Chercheurs)
describe('Campus France Form - PhD Student', () => {
    const testData = require('../fixtures/campus-data.json');
    const entry = testData[1];

    it('Submit form for PhD Student', () => {
        cy.visit(entry.Url);
        cy.viewport(1900, 1080);

        cy.get('input.username').type(entry.Email);
        cy.get('#edit-pass-pass1').type(entry.Password);
        cy.get('#edit-pass-pass2').type(entry.Confirm_password);
        cy.get(`label[for='edit-field-civilite-${entry.Gender}']`).click();

        cy.get('#edit-field-prenom-0-value').type(entry.Firstname);
        cy.get('#edit-field-nom-0-value').type(entry.Lastname);

        cy.get('#edit-field-pays-concernes-selectized').click().clear().type(entry.Country);
        cy.get('.selectize-dropdown-content div').contains(entry.Country).click();

        cy.get('#edit-field-code-postal-0-value').type(entry.Postal_code);
        cy.get('#edit-field-ville-0-value').type(entry.City);
        cy.get('#edit-field-telephone-0-value').type(entry.Phone);

        cy.get(`label[for="edit-field-publics-cibles-3"]`).click();

        cy.get('#edit-field-domaine-etudes-selectized').click().clear().type(entry.Domain);
        cy.get('.selectize-dropdown-content div').contains(entry.Domain).click();

        cy.get('#edit-field-niveaux-etude-selectized').click().clear().type(entry.Level);
        cy.get('.selectize-dropdown-content div').contains(entry.Level).click();

        if (entry.Accept) {
            cy.get(`label[for="edit-field-accepte-communications-value"]`).click();
        }

        cy.log(`Formulaire soumis avec succès pour ${entry.Email}`);
    });
});

// Test pour le troisième cas (Institutionnel)
describe('Campus France Form - Institutionnel', () => {
    const testData = require('../fixtures/campus-data.json');
    const entry = testData[2];

    it('Submit form for Institutionnel', () => {
        cy.visit(entry.Url);
        cy.viewport(1900, 1080);

        cy.get('input.username').type(entry.Email);
        cy.get('#edit-pass-pass1').type(entry.Password);
        cy.get('#edit-pass-pass2').type(entry.Confirm_password);
        cy.get(`label[for='edit-field-civilite-${entry.Gender}']`).click();

        cy.get('#edit-field-prenom-0-value').type(entry.Firstname);
        cy.get('#edit-field-nom-0-value').type(entry.Lastname);

        cy.get('#edit-field-pays-concernes-selectized').click().clear().type(entry.Country);
        cy.get('.selectize-dropdown-content div').contains(entry.Country).click();

        cy.get('#edit-field-code-postal-0-value').type(entry.Postal_code);
        cy.get('#edit-field-ville-0-value').type(entry.City);
        cy.get('#edit-field-telephone-0-value').type(entry.Phone);

        cy.get(`label[for="edit-field-publics-cibles-4"]`).click();

        cy.get('#edit-field-fonction-0-value').type(entry.Fonction);
        cy.get('#edit-field-type-organisme-selectized').click().clear().type(entry.TypeOrganisme);
        cy.get('.selectize-dropdown-content div').contains(entry.TypeOrganisme).click();

        cy.get('#edit-field-nom-organisme-0-value').type(entry.OrganismeName);

        if (entry.Accept) {
            cy.get(`label[for="edit-field-accepte-communications-value"]`).click();
        }

        cy.log(`Formulaire soumis avec succès pour ${entry.Email}`);
    });
});

