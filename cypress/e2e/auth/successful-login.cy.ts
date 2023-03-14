import { VALID_PASSWORD, VALID_USERNAME } from "cypress/config";

describe("Successful Login", () => {
  // A_01_001
  it("Successfully logged in with valid username and password", () => {
    cy.loginWith(VALID_USERNAME, VALID_PASSWORD).then(() => {
      cy.url().should("include", "/dashboard");
    });
  });
});
