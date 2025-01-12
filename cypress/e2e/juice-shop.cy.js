import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegisterPage } from "../pageObjects/RegisterPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";

describe("Juice-shop scenarios", () => {

  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.profileMenuOption.should("contain", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.newCustomerLink.click();
      // Find - how to generate random number in JS
      const email = `email_${Math.round((Math.random() * 100) + 100)}@ebox.com`;
      const password = `Password_${Math.round((Math.random() * 100) + 100)}`;
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      RegisterPage.emailControlField.type(email);
      // Fill in password field and repeat password field with same password
      RegisterPage.passwordControlField.type(password);
      RegisterPage.repeatPasswordControlField.type(password);
      
      // Click on Security Question menu
      RegisterPage.securityQuestion.click();
      // Select  "Name of your favorite pet?"
      RegisterPage.securityOption.click();
      // Fill in answer
      const pet = `anteater`;
      RegisterPage.securityAnswerControl.type(pet);
      // Click Register button
      RegisterPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.profileMenuOption.should("contain", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchQuery.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCard("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.matDialogContent.should("contain", "Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon",() => {
    // Click on search icon
    HomePage.searchQuery.click();
    // Search for 500ml
    HomePage.searchField.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.productCard("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.matDialogContent.should("contain", "Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards",() =>{
    // Click on search icon
    HomePage.searchQuery.click();
    // Search for 500ml
    HomePage.searchField.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
      HomePage.productCard("Eggfruit Juice (500ml)").click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.matDialogContent.should("contain", "Now with even more exotic flavour.");
    // Close the card
    HomePage.closeCard.click();
    // Select a product card - Lemon Juice (500ml)
    HomePage.productCard("Lemon Juice (500ml)").click();    
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.matDialogContent.should("contain", "Sour but full of vitamins.");
    // Close the card
    HomePage.closeCard.click();
    // Select a product card - Strawberry Juice (500ml)
    HomePage.productCard("Strawberry Juice (500ml)").click();
    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.matDialogContent.should("contain", "Sweet & tasty!");
    });

    // Create scenario - Read a review
    it("Read a review",() => {
    // Click on search icon
    HomePage.searchQuery.click();
    // Search for King
    HomePage.searchField.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    HomePage.KingProductCard.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.expandReviews.click();
    cy.wait(150);
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    HomePage.reviews.contains("K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });

    // Create scenario - Add a review
    it("Add a review",() => {
    // Click on search icon
    HomePage.searchQuery.click();
    // Search for Raspberry
    HomePage.searchField.type("Raspberry{enter}");
    // Select a product card - Raspberry Juice (1000ml)
    HomePage.raspberryProductCard.click();
    // Type in review - "Tastes like metal"
    // HomePage.reviewField.click();
    HomePage.reviewField.type("Tastes like metal", { force: true });
    // cy.wait(500);
    // Click Submit
    HomePage.submitReviewButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.expandReviews.click();
    // cy.wait(150);
    // Validate review -  "Tastes like metal"
    HomePage.reviews.contains("Tastes like metal");
    });



    // Create scenario - Validate product card amount
    it("Validate product card amount",() => {
    // Validate that the default amount of cards is 12
    HomePage.productCardAmount("12");
    // HomePage.productCardAmount.should("contain","12");
    // Change items per page (at the bottom of page) to 24
    HomePage.itemsPerPage.click();
    HomePage.itemsPerPageSelect("24").click();
    // Validate that the amount of cards is 24
    HomePage.productCardAmount("24");
    // Change items per page (at the bottom of page) to 36
    HomePage.itemsPerPage.click();
    HomePage.itemsPerPageSelect("36").click();
    // Validate that the amount of cards is 35
    HomePage.productCardAmount("35");
  });

    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt",() => {
    // Click on search icon
    HomePage.searchQuery.click();
    // Search for Girlie
    HomePage.searchField.type("Girlie{enter}");
    // Add to basket "Girlie"
    HomePage.addToBasket.click();
    // Click on "Your Basket" button
    HomePage.yourBasket.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.checkoutButton.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    SelectAddressPage.selectAddress.click();
    // Click Continue button
    SelectAddressPage.continueButton.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.selectDelivery.click();
    // Click Continue button
    DeliveryMethodPage.continueButton.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    PaymentOptionsPage.selectCard.click();
    // Click Continue button
    PaymentOptionsPage.continueButton.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    OrderSummaryPage.placeOrderButton.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    OrderCompletionPage.confirmation.should("contain","Thank you for your purchase!");
    });


    // Create scenario - Add address
    it("Add address",() => {
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.menuButton("Orders & Payment").click();
    // Click on My saved addresses
    HomePage.menuButton("My saved addresses").click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SavedAddressesPage.addAdressButton.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    const country = `Latvia`;
    const name = `:-)`;
    const mobileNumber = `3310001`;
    const zipCode = `LV-3602`;
    const address = `Nanya street 32`;
    const city = `Vecpils`;
    const state = `Vecpils`;

    CreateAddressPage.countryField.type(country);
    CreateAddressPage.nameField.type(name);
    CreateAddressPage.mobileNumberField.type(mobileNumber);
    CreateAddressPage.zipCodeField.type(zipCode);
    CreateAddressPage.addressField.type(address);
    CreateAddressPage.cityField.type(city);
    CreateAddressPage.stateField.type(state);
    // Click Submit button
    CreateAddressPage.submitButton.click();
    // Validate that previously added address is visible
    SavedAddressesPage.validateAddress(address);
    });


    // Create scenario - Add payment option
    it("Add payment option",() => {
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.menuButton("Orders & Payment").click();
    // Click on My payment options
    HomePage.menuButton("My Payment Options").click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPaymentMethodsPage.addNewCardPanel.click();
    const name = `:P`;
    const cardNumber = `1234567890123456`;
    const expiryMonth = `7`;
    const expiryYear = `2090`;
    // Fill in Name
    SavedPaymentMethodsPage.nameField.type(name);
    // Fill in Card Number
    SavedPaymentMethodsPage.cardNumberField.type(cardNumber);
    // Set expiry month to 7
    SavedPaymentMethodsPage.expiryMonthField.select(expiryMonth);
    // Set expiry year to 2090
    SavedPaymentMethodsPage.expiryYearField.select(expiryYear);
    // Click Submit button
    SavedPaymentMethodsPage.submitButton.click();
    // Validate that the card shows up in the list
    SavedPaymentMethodsPage.validatePaymentMethod(cardNumber.substring(cardNumber.length-4));
    });

  });
});
