import { LoginPage, ResetPasswordPage } from "cypress/page-objects";
import { VALID_USERNAME } from "config/credentials";

describe("Forgot password", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  // A_04_001
  it("Verify Forgot Password Link Redirects to Expected URL", () => {
    LoginPage.forgotPasswordLink().click();
    cy.url().should("include", ResetPasswordPage.url);
  });

  // A_04_002
  it("Verify Cancel Button Redirects User to Login Page", () => {
    ResetPasswordPage.visit();
    ResetPasswordPage.cancelButton().click();
    cy.shouldIncludeLoginPageUrl();
  });

  // A_04_003
  it("Valid username", () => {
    ResetPasswordPage.visit();
    ResetPasswordPage.usernameField().type(VALID_USERNAME);
    ResetPasswordPage.resetPasswordButton().click();
    ResetPasswordPage.successMessageTitle().should(
      "have.text",
      "Reset Password link sent successfully",
    );
  });

  // A_04_004
  it("Blank username", () => {
    ResetPasswordPage.visit();
    ResetPasswordPage.resetPasswordButton().click();
    ResetPasswordPage.successMessageTitle().should(
      "not.have.text",
      "Reset Password link sent successfully",
    );
    ResetPasswordPage.usernameErrorMsg().should("exist");
  });
});
