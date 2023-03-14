import { VALID_PASSWORD, VALID_USERNAME } from "cypress/config";

describe("Successful Login", () => {
  // LP-001
  it("Successfully login with valid username and password", () => {
    cy.loginWith(VALID_USERNAME, VALID_PASSWORD).then(() => {
      cy.url().should("include", "/dashboard");
    });
  });

  it("Just testing login command", () => {
    cy.login().then(() => {
      cy.url().should("include", "/dashboard");
    });
  });
});
