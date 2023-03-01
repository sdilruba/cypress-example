/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://www.share-now.com/de/en/registration/personal-data')
  })

  it('displays two todo items by default', () => {
    cy.get('[data-testid=uc-accept-all-button]').click()
  })
})
