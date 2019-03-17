import { Given } from "cypress-cucumber-preprocessor/steps";

before(() => {
    cy.server();
    cy.fixture('groups.json').as('groupsJSON');
    cy.route('GET', '/auth-service/v1/groups', '@groupsJSON');
});

Given('ingreso a la pagina de autenticación', () => {
    cy.visit('/');
});
