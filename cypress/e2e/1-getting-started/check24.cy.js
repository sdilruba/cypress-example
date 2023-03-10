/// <reference types="cypress" />


describe('check24 login', () => {

    beforeEach(() => {
        cy.visit('https://www.check24.de/')
    })

    it('Create an account until the confirmation code page', () => {

        cy.get('.c24-cookie-consent-button').eq(1).click()

        cy.get('.c24-customer-hover').trigger('mouseover')
        cy.get('#c24-meinkonto-anmelden').click({force: true})
    })
})
