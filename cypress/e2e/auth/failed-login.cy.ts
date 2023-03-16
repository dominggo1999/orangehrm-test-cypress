import {
  VALID_PASSWORD,
  VALID_USERNAME,
  INVALID_PASSWORD,
  INVALID_USERNAME,
} from "cypress/config";
import { LoginPage } from "cypress/page-objects";

describe("Failed Login", () => {
  // A_02_001
  it("Invalid username", () => {
    cy.loginWith(INVALID_USERNAME, VALID_PASSWORD).then(() => {
      cy.shouldIncludeLoginPageUrl();
      LoginPage.elements.invalidCredentialsMsg().should("exist");
    });
  });

  // A_02_002
  it("Invalid password", () => {
    cy.loginWith(VALID_USERNAME, INVALID_PASSWORD).then(() => {
      cy.shouldIncludeLoginPageUrl();
      LoginPage.elements.invalidCredentialsMsg().should("exist");
    });
  });

  // A_02_003
  it("Blank username and blank password", () => {
    cy.loginWith("", "").then(() => {
      cy.shouldIncludeLoginPageUrl();
      LoginPage.elements
        .usernameErrorMsg()
        .should("exist")
        .should("have.text", "Required");
      LoginPage.elements
        .passwordErrorMsg()
        .should("exist")
        .should("have.text", "Required");
    });
  });

  // A_02_004
  it("Valid username, blank password", () => {
    cy.loginWith(VALID_USERNAME, "").then(() => {
      cy.shouldIncludeLoginPageUrl();
      LoginPage.elements
        .passwordErrorMsg()
        .should("exist")
        .should("have.text", "Required");
    });
  });

  // A_02_005
  it("Blank username, valid password", () => {
    cy.loginWith("", VALID_PASSWORD).then(() => {
      cy.shouldIncludeLoginPageUrl();
      LoginPage.elements
        .usernameErrorMsg()
        .should("exist")
        .should("have.text", "Required");
    });
  });
});
