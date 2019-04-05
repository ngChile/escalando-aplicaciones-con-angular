import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

beforeEach(() => {
    cy.server();
    cy.fixture('groups.json').as('groupsJSON');
    cy.fixture('roles.json').as('rolesJSON');
    // cy.fixture('user.json').as('userJSON');
    cy.route('GET', '/auth-service/v1/groups', '@groupsJSON');
    // cy.route('POST', '/auth-service/v1/login', '@userJSON');
    cy.route('GET', '/auth-service/v1/roles', '@rolesJSON');
});

Given('ingreso a la página de registro', () => {
    cy.visit('/admin');
});

When('ingresar nombre', () => {
    cy.get('input[formcontrolname="fullName"]').type('Felipe');
});

When('ingresar email', () => {
    cy.get('input[formcontrolname="email"]').type('felipe@app.cl');
});

When('ingresar password', () => {
    cy.get('input[formcontrolname="password"]').type('Felipe');
});

When('ingresar grupo', () => {
    cy.get('.mat-select-value').click();
    cy.get('.mat-option:nth-child(2)').click();
});