/* eslint-disable */
describe('Homepage tests', () => {
  it('Render homepage list', () => {
    cy.intercept({
      url: 'https://api.aniapi.com/v1/anime?per_page=10',
      method: 'get',
    }, {
      fixture: 'list_response',
    }).as('getAnimeList');
    cy.intercept({
      url: 'https://api.aniapi.com/v1/resources/1.0/0',
      method: 'get',
    }, {
      fixture: 'list_genres',
    }).as('getGenres');
    cy.visit('/');
    cy.wait(['@getAnimeList', '@getGenres']);
    cy.get('[data-cy=list-item]').should('have.length', 5);
    cy.get('[data-cy=search-form]').should('be.visible');
  });
});
