import { LoginPage, ResetPasswordPage } from "cypress/page-objects";
import { VALID_USERNAME } from "config/credentials";

describe("Forgot password", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  // A_04_001
  it("Verify Forgot Password Link Redirects to Expected URL", () => {
    LoginPage.elements.forgotPasswordLink().click();
    cy.url().should("include", ResetPasswordPage.url);
  });

  // A_04_002
  it("Verify Cancel Button Redirects User to Login Page", () => {
    ResetPasswordPage.visit();
    ResetPasswordPage.elements.cancelButton().click();
    cy.shouldIncludeLoginPageUrl();
  });

  // A_04_003
  it("Valid username", () => {
    ResetPasswordPage.visit();
    ResetPasswordPage.elements.usernameField().type(VALID_USERNAME);
    ResetPasswordPage.elements.resetPasswordButton().click();
    ResetPasswordPage.elements
      .successMessageTitle()
      .should("have.text", "Reset Password link sent successfully");
  });

  // A_04_004
  it("Blank username", () => {
    ResetPasswordPage.visit();
    ResetPasswordPage.elements.resetPasswordButton().click();
    ResetPasswordPage.elements
      .successMessageTitle()
      .should("not.have.text", "Reset Password link sent successfully");
    ResetPasswordPage.elements.usernameErrorMsg().should("exist");
  });
});
