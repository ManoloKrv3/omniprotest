class CartPage {
    getCheckoutButton() {
      return cy.contains('button', 'Place Order');
    }
  
    proceedToCheckout() {
      this.getCheckoutButton().click();
    }
  
    fillOrderForm(name, country, city, card, month, year) {
      cy.get('#name').type(name);
      cy.get('#country').type(country);
      cy.get('#city').type(city);
      cy.get('#card').type(card);
      cy.get('#month').type(month);
      cy.get('#year').type(year);
      cy.contains('button', 'Purchase').click();
    }
  }
  
  export default CartPage;
  