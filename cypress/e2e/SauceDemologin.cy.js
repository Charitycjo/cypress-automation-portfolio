
// cypress/e2e/sauceLogin.cy.js

describe("SauceDemo - Login Tests", () => {
  
  const baseUrl = "https://www.saucedemo.com/";
  const usernameField = "#user-name";
  const passwordField = "#password";
  const loginBtn = "#login-button";

  it("Login Success - valid credentials", () => {
    cy.visit(baseUrl);

    // Enter valid username
    cy.get(usernameField).type("standard_user");

    // Enter valid password
    cy.get(passwordField).type("secret_sauce");

    // Click Login
    cy.get(loginBtn).click();

    //  Assertion: check that user is redirected to inventory page
    cy.url().should("include", "/inventory.html");
    cy.contains("Products").should("be.visible");
  });

  it("Login Failure - invalid credentials", () => {
    cy.visit(baseUrl);

    // Enter invalid username
    cy.get(usernameField).type("locked_out_user");

    // Enter valid password
    cy.get(passwordField).type("secret_sauce");

    // Click Login
    cy.get(loginBtn).click();

    //  Assertion: verify error message shows
    cy.get('[data-test="error"]').should("be.visible")
      .and("contain.text", "Epic sadface: Sorry, this user has been locked out.");
  });
});
