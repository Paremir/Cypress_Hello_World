context('Hello World', () => {
  
  it('Go to the site',() =>{
    cy.visit('https://pastebin.com/')
  })
  it('We write "Hello World" and create link', () =>{
    cy.log('write "Hello World" in text box')
    cy.get('.paste_textarea')
      .type('Hello World')
    cy.log('Create link')
    cy.get('.btnbig').click()
  })
  it('Check new paste', () =>{
    cy.log('Check link')
    cy.url()
      .should('include','https://pastebin.com')
    cy.log('Check "Hello World" in RAW Paste Data')
    cy.get('.paste_code')
      .should('have.value','Hello World')
  })
  })
