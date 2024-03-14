import { BasePage } from "../pageObjects/basePage";

export class RegisterPage extends BasePage {
  static get url() {
    return "/#/register";
  }

  // static get elementName() {
  //   return cy.get("elementSelector");
  // }

  static get emailControlField(){
    return cy.get("#emailControl");
  }

  static get passwordControlField(){
    return cy.get("#passwordControl");
  }

  static get repeatPasswordControlField(){
    return cy.get("#repeatPasswordControl");
  }

  static get securityQuestion(){
    return cy.get('[name="securityQuestion"]');
  }
  static get securityOption(){
    return cy.get("mat-option#mat-option-9");
  }
  static get securityAnswerControl(){
    return cy.get("#securityAnswerControl");
  }

  static get registerButton(){
    return cy.get("button#registerButton");
  }
}
