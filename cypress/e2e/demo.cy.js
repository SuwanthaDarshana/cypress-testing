
/// <reference types="Cypress" />

describe('Cypress E2E Testing Demo', () => {

  beforeEach(() => {
    cy.visit('https://example.com')  //BEFORE EACH TEST IT WILL VISIT THIS SITE
  })

  afterEach(() => {
    cy.log('Running after each test')
  })

  it('Assert tUrl', () => {
    cy.url().should('contain', 'example.com/')
  })

  it('Assert Title', () => {
    cy.title().should('contain', 'Example Domain')
  })

  it('Assert Element', () => {         //using only/skip hook can run only this test or skip
    cy.get('h1').should('be.visible')    //check H1 element
    //cy.wait(2000)                        //wait 2000 milisecond      
    cy.get('p').should('be.visible')    //check P lement
  })

  it('Reload and Logs', () => {
    cy.log('Before Reload')
    cy.reload()
    cy.log('After Reload')
  })



})