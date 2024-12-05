import HomePage from '../../support/pages/homePage';
import ProductPage from '../../support/pages/productPage';
import CartPage from '../../support/pages/cartPage';

describe('Checkout Test', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();

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
});
