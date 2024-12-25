describe('Forms , Buttons, Checkbox', () => {
  it('submit and assert post', () => {
    cy.visit('https://practice-automation.com/form-fields/') //Load the form page
    // cy.wait(2000)
    cy.get('#feedbackForm').should('be.visible') //Check if the form is visible

    //Fill the form
    cy.get('[name="name-input"]').type('John Doe')
    // cy.get('input[type="password"]').should('exist').and('be.visible').type('yourPassword123')
    // cy.get('label:contains("Password")').find('input[type="password"]').type('yourPassword123')


    cy.contains('Water').click()
    cy.contains('Red').click()
    cy.contains('Appium').click()
    cy.get('#email').type('suwantha@example.com')
    cy.get('[data-cy="message"]').type('I like cypress. I need to get started')
    cy.contains('Submit').click()

 
    //Assert form details

    


  })
})

  