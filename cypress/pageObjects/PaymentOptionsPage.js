import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/payment/shop";
  }
  static get selectCard(){
    return cy.contains("**5678").parent('[role="row"]').find('mat-radio-button');
  }
  static get continueButton(){
    return cy.get('[aria-label="Proceed to review"]');
  }
}
