import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/address/select";
  }

  static get selectAddress(){
    return cy.get('[role="row"]').contains("United Fakedom");
  }
  static get continueButton(){
    return cy.get('[aria-label="Proceed to payment selection"]');
  }
}
