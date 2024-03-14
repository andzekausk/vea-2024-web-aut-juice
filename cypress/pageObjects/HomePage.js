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

  static get productCard(){
    return cy.get("[aria-label='Click for more information about the product']");
  }
  static get matDialogContent(){
    return cy.get("#mat-dialog-0");
  }
}
