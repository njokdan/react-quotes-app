/* eslint-disable no-undef */
describe('Create a quote', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should create a quote and get list of quotes', () => {
    // 1 - fullfill the create a quote form
    cy.fillCreateQuote(
      'Jacobo',
      'A loremp ipsum sample text',
      'https://google.com'
    );

    // 2 - submit the form
    cy.get('#create-quote').submit();

    // 3 - check that the form values are cleared
    cy.emptyCreateQuoteForm();

    // 4 - check that the alert message shows
    cy.get('.alert-success').should('be.visible');

    // 5 - verify that all quotes are pulled correctly
    cy.get('#quote-list')
      .children()
      .should('be.visible');

    // 6 - close alert message
    cy.get('.alert-success button').click();
  });
});
