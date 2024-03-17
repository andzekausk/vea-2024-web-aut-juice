import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/address/create";
  }

  static get countryField(){
    return cy.get('input#mat-input-1');
  }
  static get nameField(){
    return cy.get('input#mat-input-2');
  }
  static get mobileNumberField(){
    return cy.get('input#mat-input-3');
  }
  static get zipCodeField(){
    return cy.get('input#mat-input-4');
  }
  static get addressField(){
    return cy.get('textarea#address');
  }
  static get cityField(){
    return cy.get('input#mat-input-6');
  }
  static get stateField(){
    return cy.get('input#mat-input-7');
  }
  static get submitButton(){
    return cy.get('button#submitButton');
  }
}