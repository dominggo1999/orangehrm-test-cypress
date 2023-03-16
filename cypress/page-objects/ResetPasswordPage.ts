class ResetPasswordPage {
  readonly url: string;

  constructor() {
    this.url = "/auth/requestPasswordResetCode";
  }

  elements = {
    cancelButton: () => cy.get(".oxd-button--ghost"),
    resetPasswordButton: () => cy.get(".oxd-button--secondary"),
    usernameField: () => cy.get(".oxd-input"),
    usernameErrorMsg: () => cy.get(".oxd-input-field-error-message"),
    successMessageTitle: () => cy.get(".oxd-text--h6"),
  };

  visit() {
    cy.visit(this.url);
  }
}

export default new ResetPasswordPage();
