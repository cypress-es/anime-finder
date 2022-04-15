/* eslint-disable */
describe('Homepage search', () => {
  it('Render and search new items', () => {
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
    cy.intercept({
      url: 'https://api.aniapi.com/v1/anime?per_page=10&title=flcl',
      method: 'get',
    }, {
      fixture: 'list_response_after_filter',
    }).as('getAnimeListFiltered');
    cy.get('[data-cy=search-form-input]').type('flcl{enter}');
    cy.wait('@getAnimeListFiltered');
  });
});
