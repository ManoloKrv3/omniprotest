import HomePage from '../../support/pages/homePage';

describe('Filter Categories Test', () => {
  const homePage = new HomePage();

  it('should display only laptops in the Laptop category', () => {
    cy.visit('https://www.demoblaze.com');
    homePage.navigateToCategory('Laptops');
    cy.get('.card-title').each((item) => {
      cy.wrap(item).should('contain.text', 'Laptop');
    });
  });
});
