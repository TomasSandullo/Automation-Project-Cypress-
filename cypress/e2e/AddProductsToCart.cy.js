describe('Homepage', () => {
  it('Search for a Motorola EDGE 30 ultra', () => {
    cy.visit('https://www.mercadolibre.com.ar/')
    cy.get('#cb1-edit').type('Motorola EDGE 30 Ultra')
    cy.get('.nav-icon-search').click()
  })
})