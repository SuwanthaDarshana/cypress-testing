describe('Forms , Buttons, Checkbox', () => {
  it('submit and assert post', () => {
    cy.visit('https://practice-automation.com/form-fields/') //Load the form page
    cy.get('#feedbackForm').should('be.visible') //Check if the form is visible

    //Fill the form
    cy.get('[name="name-input"]').type('John Doe')
    cy.contains('Water').click()
    cy.contains('Red').click()
    cy.contains('Appium').click()
    cy.get('#email').type('l3vY2@example.com')
    cy.get('[data-cy="message"]').type('I like cypress')
    cy.contains('Submit').click()
 
    


  })
})

  