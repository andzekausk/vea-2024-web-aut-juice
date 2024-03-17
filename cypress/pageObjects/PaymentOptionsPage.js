import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/payment/shop";
  }

  static get selectCard(){
    return cy.get('[role="row"]').contains("5678").get('mat-radio-button');
  }
  static get continueButton(){
    return cy.get('[aria-label="Proceed to review"]');
  }
}
