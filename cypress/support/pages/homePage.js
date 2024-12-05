class HomePage {
    getCategory(categoryName) {
      return cy.contains('a', categoryName);
    }
  
    navigateToCategory(categoryName) {
      this.getCategory(categoryName).click();
    }
  }
  
  export default HomePage;
  