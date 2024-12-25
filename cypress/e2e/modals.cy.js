describe('cypress models', () => {
  it('Open and assert modals', () => {
    cy.visit('https://practice-automation.com/modals/')
    cy.get('#simpleModal').click()
    // cy.get('#pum_popup_title_1318').should('be.visible') //check if the modal is visible using id
    cy.get('.pum-title').should('be.visible') //check if the modal is visible using class
    cy.get('p').contains('Hi, I’m a simple modal.').should('be.visible')

  })
})