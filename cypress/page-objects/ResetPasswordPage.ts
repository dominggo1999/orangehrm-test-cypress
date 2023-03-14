class ResetPasswordPage {
  url: string;

  constructor() {
    this.url = "/auth/requestPasswordResetCode";
  }

  visit() {
    cy.visit(this.url);
  }

  cancelButton() {
    return cy.get(".oxd-button--ghost");
  }

  resetPasswordButton() {
    return cy.get(".oxd-button--secondary");
  }

  usernameField() {
    return cy.get(".oxd-input");
  }

  usernameErrorMsg() {
    return cy.get(".oxd-input-field-error-message");
  }

  successMessageTitle() {
    return cy.get(".oxd-text--h6");
  }
}

export default new ResetPasswordPage();
