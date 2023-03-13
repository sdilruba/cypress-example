
//1. to reuse it like a utils function
const getIframeBody = () => {
    return cy
        .get('.c24-uli-loginlayer-iframe')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

it('registration without payment', () => {
    cy.get('.c24-cookie-consent-button').eq(1).click()

    cy.get('#c24-meinkonto-anmelden').click({ force: true })
    getIframeBody().find('a.c24-uli-cl-r-start-trigger').click()
    getIframeBody().find('#cl_login').type(`jorumi+${Date.now()}@gmail.com`)

})

//2. one-time use
const iframe = cy.get('.c24-uli-loginlayer-iframe')
    .its('0.contentDocument.body')
    .then(cy.wrap)
    .find('a.c24-uli-cl-r-start-trigger').should('be.visible')
    .click({ force: true })

//3. iframe plugin

cy.frameLoaded('.c24-uli-loginlayer-iframe')
cy.iframe('.c24-uli-loginlayer-iframe').find('#cl_ul_firstname').type('alex')
