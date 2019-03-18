import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

beforeEach(() => {
    cy.server();
    cy.fixture('groups.json').as('groupsJSON');
    cy.route('GET', '/auth-service/v1/groups', '@groupsJSON');
});

Given('ingreso a la página de autenticación', () => {
    cy.visit('/');
});

When('hago clic en el enlace de postulación a la beca', () => {
    cy.get('.login-page__scholarship-link').click()
})

Then('soy redirigido a la página de postulación', () => {
    cy.url().should('contains','/scholarship-form');    
})

