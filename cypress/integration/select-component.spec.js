/* eslint-disable */
describe('Select component example', () => {
  it('select one option', () => {
    cy.visit('/select-example');
    cy.get('.filter-status-select__control').click();
    cy.get('.filter-status-select__option')
      .should('have.length', 4)
      .should('be.visible');
    cy.get('.filter-status-select__option').eq(2).click();
    cy.get('.filter-status-select__single-value').should('contain', 'Not yet released');
  });

  it('select multiple options', () => {
    cy.visit('/select-example');
    cy.get('.filter-multi-select__control').click();
    cy.get('.filter-multi-select__option')
      .should('have.length', 4)
      .should('be.visible');
    cy.get('.filter-multi-select__option').eq(2).click();
    cy.get('.filter-multi-select__multi-value__label').eq(0).should('contain', 'Not yet released');
    cy.get('.filter-multi-select__control').click();
    cy.get('.filter-multi-select__option').eq(2).click();
    cy.get('.filter-multi-select__multi-value__label').eq(1).should('contain', 'Cancelled');
    cy.get('.filter-multi-select__multi-value__label')
      .should('have.length', 2);
    cy.get('.filter-multi-select__multi-value__remove').eq(1).click();
    cy.get('.filter-multi-select__multi-value__label')
      .should('have.length', 1);
  });
});
