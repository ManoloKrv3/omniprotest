describe('Mobile Menu Navigation Test', () => {
    it('should navigate through menu options in mobile view', () => {
      cy.viewport(375, 667); // iPhone X resolution
      cy.visit('https://www.demoblaze.com');
      cy.get('.navbar-toggler').click();
      cy.contains('Phones').click();
      cy.url().should('include', 'phones');
    });
  });
  