import HomePage from '../../support/pages/homePage';
import ProductPage from '../../support/pages/productPage';

describe('Add to Cart Test', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();

  it('should add a product to the cart', () => {
    cy.visit('https://www.demoblaze.com');
    homePage.navigateToCategory('Laptops');
    cy.contains('Sony vaio i5').click();
    productPage.addToCart();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Product added');
    });
  });
});
