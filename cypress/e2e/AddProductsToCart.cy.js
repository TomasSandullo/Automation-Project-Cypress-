describe('Filter products and add them to the cart', () => {
  beforeEach('Search for a Motorola EDGE 30 ultra', () => {
    cy.visit('https://www.mercadolibre.com.ar/')
    cy.get('#cb1-edit').type('Motorola EDGE 30 Ultra')
    cy.get('.nav-icon-search').click()
    cy.get('.andes-button--transparent').click()
    cy.get('[data-testid="action:understood-button"]').click()
  })
  it('Filter by cheaper',() => {
    cy.get('.andes-dropdown__display-values').click()
    cy.get('[data-key="price_asc"]').click()
    })
})