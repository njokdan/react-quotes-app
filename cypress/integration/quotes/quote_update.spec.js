/* eslint-disable no-undef */
describe('Edit a quote', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should update a quote', () => {
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

    // Add new information on the quote
    cy.get('#edit-quote input[name="author"]')
      .clear()
      .type('Updated Author');
    cy.get('#edit-quote textarea[name="body"]')
      .clear()
      .type('Updated Body');
    cy.get('#edit-quote input[name="source"]')
      .clear()
      .type('https://google.com/');

    // 4 - submit the form to update the quote
    cy.get('#edit-quote').submit();

    // 5 - once the quote is update, validate that the edit-form is already gone
    cy.get('#quote-list')
      .children()
      .should('not.have.id', 'edit-quote');
  });
});
