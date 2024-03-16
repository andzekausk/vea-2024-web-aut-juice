import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton(){
    return cy.get("button#navbarAccount");
  }
  static get loginButton(){
    return cy.get("button#navbarLoginButton");
  }
  static get profileMenuOption(){
    return cy.get('button[aria-label="Go to user profile"]');
  }
  static get searchQuery(){
    return cy.get("#searchQuery");
  }

  static get searchField(){
    return cy.get("input#mat-input-0");
  }

  static productCard(txt){
    return cy.get("[aria-label='Click for more information about the product']").contains(txt);
  }
  static get lemonProductCard(){
    return cy.get("[aria-label='Click for more information about the product']").contains("Lemon Juice (500ml)");
  }
  static get eggfruitProductCard(){
    return cy.get("[aria-label='Click for more information about the product']").contains("Eggfruit Juice (500ml)");
  }
  static get strawberryProductCard(){
    return cy.get("[aria-label='Click for more information about the product']").contains("Strawberry Juice (500ml)");
  }
  static get matDialogContent(){
    return cy.get('[role="dialog"]');
  }

  static get closeCard(){
    return cy.get('button[aria-label="Close Dialog"]');
  }

  static get KingProductCard(){
    return cy.get("[aria-label='Click for more information about the product']").contains('OWASP Juice Shop "King of the Hill" Facemask');
  }

  static get expandReviews(){
    return cy.get('[aria-label="Expand for Reviews"]');
  }

  static get reviews(){
    return cy.get("div.comment");
  }

  static get reviewField(){
    return cy.get('[aria-label="Text field to review a product"]');
  }

  static get raspberryProductCard(){
    return cy.get("[aria-label='Click for more information about the product']").contains('Raspberry Juice (1000ml)');
  }

  static get submitReviewButton(){
    return cy.get("button#submitButton");
  }

  static productCardAmount(nmbr){
    return cy.get("[aria-label='Click for more information about the product']").should("have.length", nmbr);
  }
  
  static get itemsPerPage(){
    return cy.get("div#mat-select-value-1");
  }

  static itemsPerPageSelect(nmbr){
    return cy.get("div#mat-select-0-panel").contains(nmbr);
  }
  
  static get addToBasket(){
    return cy.get('[aria-label="Add to Basket"]');
  }
  static get yourBasket(){
    return cy.get('[aria-label="Show the shopping cart"]');
  }
}
