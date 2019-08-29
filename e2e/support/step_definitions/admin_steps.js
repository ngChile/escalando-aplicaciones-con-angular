import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

beforeEach(() => {
    cy.server();
    cy.fixture('groups.json').as('groupsJSON');
    cy.fixture('roles.json').as('rolesJSON');
    cy.fixture('users.json').as('usersJSON');
    cy.route('GET', '/auth-service/v1/groups', '@groupsJSON');
    // Capitulo 1 Pruebas despues del desarrollo
    // Diseñando a partir de lo que quiere el usuario
    //  Prueba para resolución en vivo como usar un mock y modelar el backend
    //  este trabajo debe ser hecho por la gente de frontend
    //  luego "se negocia" el nombre del endpoint y sus requerimientos
    //  el contrato lo deben imponer las personas de frontend ajustado
    //  a la complejidad arquitectonica que conlleva mantener una estructura
    //  compleja
    //  Usando patron BFF se puede lograr mejor negociación, mover logica
    //  pero se agrega complejidad extra y mas mantenimiento. se debe 
    //  negociar también en función de la disponibilidad del negocia
    //  para agregar un "producto" más (BFF) a la capa de servicios.

    //En este ejemplo a partir de un requerimiento que es crear un usuario
    //y que luego este aparezca en la tabla se configura el ambiente para poder
    //pasar la prueba. desde el frontend se genera la necesidad que sea restful
    // es decir. para un post, se recibe el mismo recurso modificado. (pregunta cuestionario)

    // TODO: COMENTAR FUNCIONALIDAD PARA SER DESARROLLADA

    // cy.route('POST', '/auth-service/v1/login', '@userJSON');
    cy.route('GET', '/auth-service/v1/roles', '@rolesJSON');
    cy.route('GET', '/admin/v1/users', '@usersJSON');
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
    cy.get('mat-select[formcontrolname="group"] .mat-select-value').click();
    cy.get('.mat-option.mat-active~.mat-option:nth-of-type(3)').click();
});

When('ingresar rol', () => {
    cy.get('mat-select[formcontrolname="roles"] .mat-select-value').click();
    cy.get('.mat-option.mat-active~.mat-option:nth-of-type(2)').click();
});
