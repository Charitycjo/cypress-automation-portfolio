// cypress/e2e/login.cy.js

Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // ignore ShopifyAnalytics or other 3rd-party errors
});

describe("Venus Clothing - Login Tests", () => {
  
  const baseUrl = "https://www.venus.com/account/login";
  const emailField = "#login-email";
  const passwordField = "#login-password";
  const submitButton =
    "#customer_login > div > button.button-sm.xl\\:button-md.button-primary.w-full";

  it("Login Success - valid credentials", () => {
    cy.visit(baseUrl);

    cy.get(emailField).type("assurancequality396@gmail.com");
    cy.get(passwordField).type("Reed081171!");
    cy.get(submitButton).click();

    cy.url().should("include", "/account");
    cy.contains("My Account").should("be.visible");
  });

  it("Login Failure - invalid credentials", () => {
    cy.visit(baseUrl);

    cy.get(emailField).type("assurancequality396@gmail.com");
    cy.get(passwordField).type("WrongPassword123!");
    cy.get(submitButton).click();

    cy.contains("Incorrect email or password").should("be.visible");
    cy.url().should("include", "/account/login");
  });
});

    