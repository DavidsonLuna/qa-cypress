/// <reference types="cypress" />

it('Deve realizar Login com sucesso', () => {
  cy.visit('http://automationpractice.com/index.php')
  cy.get('.login').click()
  cy.get('#email').type('teste2021@teste.com.br')
  cy.get('#passwd').type('teste')
  cy.get('#SubmitLogin > span').click()
  cy.get('.lnk_wishlist > a > span').should('exist')
})