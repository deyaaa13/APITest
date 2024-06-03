/// <reference types="cypress" />

describe('Automation API with Pokeapi', () => {
    it('Successfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    });

    it('Successfully validate code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Successfullly validate status code with params', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2&per_paged=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });

    it.only('Successfully validate content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur')
        cy.get('@bulbasaur').its('body').should('include', {name: 'bulbasaur'})
    });
    it.only('Successfullly validate negative response', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
            failOnStatusCode: false
        }).as('eduwork')
        cy.get('@eduwork').its('status').should('equal', 404)
    });
});