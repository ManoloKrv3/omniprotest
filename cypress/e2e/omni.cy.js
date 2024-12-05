describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com'')
  })
})

// Importar las páginas (POM)
import HomePage from '../support/pages/homePage';
import ProductPage from '../support/pages/productPage';
import CartPage from '../support/pages/cartPage';

// Instancias de las páginas
const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

describe('E-commerce Testing Suite - DemoBlaze', () => {
  
  // Pruebas de Desktop
  describe('Desktop Tests', () => {
    
    it('should add a product to the cart', () => {
      cy.visit('https://www.demoblaze.com');
      homePage.navigateToCategory('Laptops');
      cy.contains('Sony vaio i5').click();
      productPage.addToCart();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Product added');
      });
    });

    it('should complete the checkout process', () => {
      cy.visit('https://www.demoblaze.com');
      homePage.navigateToCategory('Phones');
      cy.contains('Samsung galaxy s6').click();
      productPage.addToCart();
      cy.on('window:alert', () => {});
      cy.contains('Cart').click();
      cartPage.proceedToCheckout();
      cartPage.fillOrderForm('John Doe', 'USA', 'New York', '123456789012', '12', '2025');
      cy.contains('Thank you for your purchase!').should('be.visible');
    });

    it('should display only laptops in the Laptop category', () => {
      cy.visit('https://www.demoblaze.com');
      homePage.navigateToCategory('Laptops');
      cy.get('.card-title').each((item) => {
        cy.wrap(item).should('contain.text', 'Laptop');
      });
    });

  });

  // Pruebas de Mobile
  describe('Mobile Tests', () => {

    it('should navigate through menu options in mobile view', () => {
      cy.viewport(375, 667); // iPhone X resolution
      cy.visit('https://www.demoblaze.com');
      cy.get('.navbar-toggler').click();
      cy.contains('Phones').click();
      cy.url().should('include', 'phones');
    });

    it('should display product details correctly in mobile view', () => {
      cy.viewport(375, 667); // iPhone X resolution
      cy.visit('https://www.demoblaze.com');
      cy.contains('Samsung galaxy s6').click();
      cy.get('.name').should('contain.text', 'Samsung galaxy s6');
      cy.get('.price-container').should('exist');
    });

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
});
