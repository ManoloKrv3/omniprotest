describe('Mobile Product Detail Test', () => {
    it('should display product details correctly in mobile view', () => {
      cy.viewport(375, 667); // iPhone X resolution
      cy.visit('https://www.demoblaze.com');
      cy.contains('Samsung galaxy s6').click();
      cy.get('.name').should('contain.text', 'Samsung galaxy s6');
      cy.get('.price-container').should('exist');
    });
  });
  