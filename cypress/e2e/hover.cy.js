describe('cypress hover', () => {
  it('Lets test hover workaround', () => {
    cy.visit('https://practice-automation.com/hover/')
    cy.get('#mouse_over').trigger('mouseover') //trigger mouse over
    cy.get('#mouse_over').should('contain','You did it!')
  })
})