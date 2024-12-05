class ProductPage {
    getAddToCartButton() {
      return cy.get('button.btn-success');
    }
  
    addToCart() {
      this.getAddToCartButton().click();
    }
  }
  
  export default ProductPage;
  