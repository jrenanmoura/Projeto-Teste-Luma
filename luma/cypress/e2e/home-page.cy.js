describe('home page', () => {
    it('app deve estar online', () => {
      cy.viewport(1440, 900)
      cy.visit('https://magento2.algolia.com/')
      cy.get('div[class="panel header"] ul[ class="header links"] li[class="greet welcome"] span[class="not-logged-in"]').should('have.text', 'Default welcome msg!')
        })
  })