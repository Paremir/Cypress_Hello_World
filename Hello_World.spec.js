 context('Hello World', () => {
  
  var url = 'https://pastebin.com/',
  text = 'Hello World',
  link
  
  it('Go to site',() =>{
    cy.visit(url)
  })

  it('Write "Hello World" and create paste', () =>{
    cy.log('Write "Hello World" in text box')
    cy.get('#paste_code')
      .type(text)
    cy.log('Create paste')  
    cy.get('#submit').click()
    cy.log('Save link')
    cy.url().then(url => {  link = url })
  })
  
  it('Check new paste', () =>{
     cy.log('Check link')
     cy.then(() => cy.visit(link))
     cy.url()
       .should('include',url)
     cy.log('Check "Hello World" in RAW Paste Data')
     cy.get('.paste_code')
       .should('have.value',text)
   })
  })
