import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/address/saved-payment-methods";
  }

  static get addNewCardPanel(){
    return cy.get('mat-expansion-panel-header#mat-expansion-panel-header-0');
  }
  static get nameField(){
    return cy.get('input#mat-input-1');
  }
  static get cardNumberField(){
    return cy.get('input#mat-input-2');
  }
  static get expiryMonthField(){
    return cy.get('select#mat-input-3');
  }
  static get expiryYearField(){
    return cy.get('select#mat-input-4');
  }

  static get submitButton(){
    return cy.get('button#submitButton');
  }

  static validatePaymentMethod(txt){
    return cy.get('[role="table"]').should("contain",txt);
  }
}
