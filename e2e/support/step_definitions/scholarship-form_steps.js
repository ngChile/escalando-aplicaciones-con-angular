import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given('ingreso a la página de postulación', () => {
    cy.visit('/scholarship-form');
});

When('escribo un nombre en el input de nombre', () => {
    cy.get('.scholarship-form-page__name').type('Mi nombre')
})

When('escribo un email en el input de email', () => {
    cy.get('.scholarship-form-page__email').type('MiNombre@test.org')
})

When('escribo una razón en el text area de motivo', () => {
    cy.get('.scholarship-form-page__reason').type('Me gusta mucho el curso')
})

When('hago clic en el botón postular', () => {
    cy.get('.scholarship-form-page__submit').click()
})

Then('debería ver el mensaje de postulación enviado', () =>{
    cy.get('.scholarship-form-page__result-text').invoke('text').should('contains', 'Mensaje enviado con éxito')
})



