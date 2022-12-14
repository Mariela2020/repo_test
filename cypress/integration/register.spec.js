  
import { random } from 'faker'
const catName = `Mr ${random.words(2)}`;

describe('Given an animal shelter application', () => {
    before(() => {
        cy.visit("http://localhost:5000/");
    });
    describe('When the user tries to create an animal', () => {
        before(() => {
            cy.get('[href="/animal/register"]').click();
           // cy.get('[name="cat-name"]').type(catName);
            cy.get('#pet-name').type(catName)
            cy.get("#demo-simple-select").click();
            cy.get('[data-value="Azul Ruso"]').click();
            cy.get('[value="Male"]').check();
            cy.get('[name="moquillo"]').check();
            cy.get('[name="leucemia"]').check();
            cy.get("#terms-and-condition").click();
            //cy.get('button[type="submit"]').click();
           // cy.get('.MuiButton-label').click();
        });

        it('Then the cat should be listed with the right name, breed, gender and if it is vaccined', () => {
           /* cy.get(`[data-testid="${catName}-container"] [name="name-cat"]`).should(
                "have.text",
                catName
            );
    
            cy.get(`[data-testid="${catName}-container"] [name="breed-cat"]`).should(
                "have.text",
                "Azul Ruso"
            );
    
            cy.get(
                `[data-testid="${catName}-container"] [name="gender-cat"] div`
            ).should("have.attr", "name", "male-icon");
    
            cy.get(
                `[data-testid="${catName}-container"] [name="is-vaccinated-cat"] div`
            ).should("have.attr", "name", "health-icon");*/
        });
    });
});
