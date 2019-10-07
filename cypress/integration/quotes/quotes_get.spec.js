/* eslint-disable no-undef */
describe('Edit a quote', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should get a list of quotes', () => {
    // 1 - click to get list of quotes
    cy.get('#list-quotes').click();

    // 2 - check that the list are already loaded
    cy.get('#quote-list')
      .children()
      .should('be.visible');
  });
});
