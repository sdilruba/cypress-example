/// <reference types="cypress" />
import 'cypress-iframe'

describe('check24 login', () => {

    beforeEach(() => {
        cy.visit('https://www.check24.de/')
    })
    it('Create an account until the confirmation code page', () => {
        cy.get('.c24-cookie-consent-button').eq(1).click()
        cy.get('.c24-customer-hover').trigger('mouseover')
        cy.get('#c24-meinkonto-anmelden').click({force: true})
        cy.frameLoaded('.c24-uli-loginlayer-iframe')
        cy.iframe('.c24-uli-loginlayer-iframe').find('a.c24-uli-cl-r-start-trigger').should('be.visible').click()
        cy.iframe('.c24-uli-loginlayer-iframe').find('#cl_login').type(`test+${Date.now()}@gmail.com`)
        cy.iframe('.c24-uli-loginlayer-iframe').find('#c24-uli-login-btn').click()
        cy.iframe('.c24-uli-loginlayer-iframe').find('#cl_ul_firstname').type('betul')
        cy.iframe('.c24-uli-loginlayer-iframe').find('#cl_ul_lastname').type('betul')
        cy.iframe('.c24-uli-loginlayer-iframe').find('#cl_pw_register').type('5789dh#.')
        cy.iframe('.c24-uli-loginlayer-iframe').find('#cl_ul_pw_register_repeat').type('5789dh#.')
        cy.iframe('.c24-uli-loginlayer-iframe').find('#c24-uli-register-btn').click()
        cy.iframe('.c24-uli-loginlayer-iframe').find('.c24-uli-user-change').should('be.visible')
    })
})
