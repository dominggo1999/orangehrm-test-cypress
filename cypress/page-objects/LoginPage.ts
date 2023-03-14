class LoginPage {
  url: string;

  constructor() {
    this.url = "/auth/login";
  }

  visit() {
    cy.visit(this.url);
  }

  usernameField() {
    return cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    );
  }

  usernameErrorMsg() {
    return cy.get(
      ".orangehrm-login-form > form > div:nth-child(2) > div > span",
    );
  }

  passwordField() {
    return cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input",
    );
  }

  passwordErrorMsg() {
    return cy.get(
      ".orangehrm-login-form > form > div:nth-child(3) > div > span",
    );
  }

  loginButton() {
    return cy.get(".oxd-button");
  }

  forgotPasswordLink() {
    return cy.get(".orangehrm-login-forgot > .oxd-text");
  }

  invalidCredentialsMsg() {
    return cy.get(".oxd-alert-content > .oxd-text");
  }
}

export default new LoginPage();
