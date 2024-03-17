import { BasePage } from "../pageObjects/basePage";

export class OrderSummaryPage extends BasePage {
  static get url() {
    return "/#/payment/shop";
  }

  static get placeOrderButton(){
    return cy.get('button#checkoutButton');
  }
}
