describe('Assertion demo', ()=>{
  it('Implicit assertion', ()=>{

     cy.visit('https://www.powerofvitality.com/vitality/login?logout')

     //should and

     cy.url().should('include','powerofvitality.com')
     cy.url().should('eq','https://www.powerofvitality.com/vitality/login?logout')
     cy.url().should('contain','powerofvitality')

     cy.url().should('include','powerofvitality.com')
     .should('eq','https://www.powerofvitality.com/vitality/login?logout')
     .should('contain','powerofvitality')

     cy.url().should('include','powerofvitality.com')
     .and('eq','https://www.powerofvitality.com/vitality/login?logout')
     .and('contain','powerofvitality')


     cy.get('.logo').should('be.visible')

     cy.get('#okta-signin-username').type('Johnsch') //Provide value onto input box

     cy.get('#okta-signin-password').type('Sanone5911!') // Provide value into input box

     cy.get('#okta-signin-submit').click()

     





     
  })
})