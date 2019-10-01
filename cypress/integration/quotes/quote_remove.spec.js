/* eslint-disable no-undef */
describe('Create a quote', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should remove a quote', () => {
    // 1 - click to get list of quotes
    cy.get('#list-quotes').click();

    // 2 - check that the list are already loaded
    cy.get('#quote-list')
      .children()
      .should('be.visible');

    // 3 - click on edit and check if the edit-form is visible for usage
    cy.get('#toggle-edit-quote')
      .click()
      .then(() => {
        cy.get('#edit-quote').should('be.visible');
      });

    // 4 - remove the quote
    cy.get('#remove-quote').click();

    // 5 - once the quote is removed, validate that the edit-form is already gone
    cy.get('#quote-list')
      .children()
      .should('not.have.id', 'edit-quote');
  });
});
