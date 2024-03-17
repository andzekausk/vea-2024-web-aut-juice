import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }

  static get addAdressButton(){
    return cy.get('[aria-label="Add a new address"]').contains("Add New Address");
  }
  static validateAddress(txt){
    return cy.get('[role="table"]').should("contain",txt);
  }
}
