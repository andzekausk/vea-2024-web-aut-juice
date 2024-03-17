import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/delivery-method";
  }

  static get selectDelivery(){
    return cy.get('[role="row"]').contains("Standard Delivery");
  }
  static get continueButton(){
    return cy.get('[aria-label="Proceed to delivery method selection"]');
  }
}
