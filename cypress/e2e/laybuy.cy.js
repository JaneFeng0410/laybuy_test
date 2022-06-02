describe('laybuy.cy.js', () => {
  it('should visit', () => {
    const stub = cy.stub().as('open')
    cy.on('window:before:load', (win) => {
      cy.stub(win, 'open').as('open')
    })
    // wide viewpoint is need to show the Shop link. otherwise it will be ellapsed into menu.
    cy.viewport(1920,2080)    
    cy.visit('https://www.laybuy.com/nz/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // There is an exception in home page.
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    // Shop link will be invisible in a small screen device.
    cy.contains("Shop").click()
    // Use {force:true} option to make sure. It was input even this element is under other elements.
    // Extra two space to make sure input the whole keywordes.
    cy.get('input[type=search]').type("  Heart of Oxford",{force: true})
    // Wait 2 seconds to refresh the list. Otherwise it will open an unfiltered list.
    cy.wait(2000)
    // At least two tiles
    cy.get('a[class^=tile-module--tile]').its('length').should('be.gte',2)
    // Click the fist tile
    cy.get('a[class^=tile-module--tile]').first().click()
    // Check open window
    // cy.get('@open').should('be.called');
  })

})
