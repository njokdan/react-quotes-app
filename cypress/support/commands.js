/* eslint-disable no-undef */

// Fullfil create-quote-form
Cypress.Commands.add('fillQuote', (author, body, source) => {
  cy.get('input[name="author"]').type(author);
  cy.get('textarea[name="body"]').type(body);
  cy.get('input[name="source"]').type(source);
});

// Check empty values for create-quote-form
Cypress.Commands.add('emptyCreateQuoteForm', () => {
  cy.get('input[name="author"]').should('have.value', '');
  cy.get('textarea[name="body"]').should('have.value', '');
  cy.get('input[name="source"]').should('have.value', '');
});
