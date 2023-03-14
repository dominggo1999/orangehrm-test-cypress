import {
  VALID_PASSWORD,
  VALID_USERNAME,
  INVALID_PASSWORD,
  INVALID_USERNAME,
} from "cypress/config";
import { LoginPage } from "cypress/page-objects";

describe("Failed Login", () => {
  const checkUrlIncludesLoginPage = () => {
    // If the login fails, then the URL should remain the same.
    cy.url().should("include", LoginPage.url);
  };

  // A_02_001
  it("Invalid username", () => {
    cy.loginWith(INVALID_USERNAME, VALID_PASSWORD).then(() => {
      checkUrlIncludesLoginPage();
      LoginPage.invalidCredentialsMsg().should("exist");
    });
  });

  // A_02_002
  it("Invalid password", () => {
    cy.loginWith(VALID_USERNAME, INVALID_PASSWORD).then(() => {
      checkUrlIncludesLoginPage();
      LoginPage.invalidCredentialsMsg().should("exist");
    });
  });

  // A_02_003
  it("Blank username and blank password", () => {
    cy.loginWith("", "").then(() => {
      checkUrlIncludesLoginPage();
      LoginPage.usernameErrorMsg().should("exist");
      LoginPage.passwordErrorMsg().should("exist");
    });
  });

  // A_02_004
  it("Valid username, blank password", () => {
    cy.loginWith(VALID_USERNAME, "").then(() => {
      checkUrlIncludesLoginPage();
      LoginPage.passwordErrorMsg().should("exist");
    });
  });

  // A_02_005
  it("Blank username, valid password", () => {
    cy.loginWith("", VALID_PASSWORD).then(() => {
      checkUrlIncludesLoginPage();
      LoginPage.usernameErrorMsg().should("exist");
    });
  });
});
