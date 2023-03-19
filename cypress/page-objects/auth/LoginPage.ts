class LoginPage {
  readonly url: string;

  constructor() {
    this.url = "/auth/login";
  }

  elements = {
    usernameField: () =>
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"),

    usernameErrorMsg: () =>
      cy.get(".orangehrm-login-form > form > div:nth-child(2) > div > span"),

    passwordField: () =>
      cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"),

    passwordErrorMsg: () =>
      cy.get(".orangehrm-login-form > form > div:nth-child(3) > div > span"),

    loginButton: () => cy.get(".oxd-button"),

    forgotPasswordLink: () => cy.get(".orangehrm-login-forgot > .oxd-text"),

    invalidCredentialsMsg: () => cy.get(".oxd-alert-content > .oxd-text"),
  };

  visit() {
    cy.visit(this.url);
  }

  submit() {
    this.elements.loginButton().click();
  }
}

export default new LoginPage();
