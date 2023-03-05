/// <reference types="cypress" />

describe('share now registration', () => {
  beforeEach(() => {
    cy.visit('https://www.share-now.com/de/en/registration/personal-data')
  })

  it('registration without payment', () => {
    cy.get('select[name=drivingLocation]', {timeout: 10000}).select('berlin')
    cy.location('pathname', {timeout: 900000}).should('include', '/berlin/');
    cy.reload()
    cy.get('input[type=email]').type(`testemail${Date.now()}@web.com`, {timeout: 20000})
    cy.get('input[name=password]').type('12365')
    cy.get('input[name=pin]').type('4567')
    cy.get('select[name=salutation]').select('HERR')
    cy.get('input[name=firstName]').type('Betul')
    cy.get('input[name=lastName]').type('Karacam')
    cy.get('#camelot-select-birth-date-day').select('9')
    cy.get('#camelot-select-birth-date-month').select('November')
    cy.get('#camelot-select-birth-date-year').select('1997')
    cy.get('input[name=birthPlace]').type('Berlin')
    cy.get('input[name=addressStreet]').type('Baumschulenstraße 40')
    cy.get('input[name=addressZipCode]').type('12437')
    cy.get('input[name=addressCity]').type('Berlin')
    cy.get('input[name=mobilePhone]').type(`${Date.now()}`)
    cy.get('.checkbox [type=checkbox]').first().click({ force: true })
    cy.get('#registration-save-button').click()
    cy.url().should('include', '/payment/')
  })
})
