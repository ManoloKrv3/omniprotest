describe('Responsive Test', () => {
    it('should render elements correctly on different viewports', () => {
      cy.visit('https://www.demoblaze.com');
  
      // Desktop View
      cy.viewport(1366, 768);
      cy.get('.navbar').should('be.visible');
  
      // Mobile View
      cy.viewport(375, 667);
      cy.get('.navbar-toggler').should('be.visible');
    });
  });
  