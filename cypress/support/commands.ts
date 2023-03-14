/// <reference types="cypress" />
import { VALID_PASSWORD, VALID_USERNAME } from "cypress/config";
import { LoginPage } from "cypress/page-objects";

Cypress.Commands.add("loginWith", (username, password) => {
  // visit the login page
  LoginPage.visit();

  // enter the username and password
  username && LoginPage.usernameField().type(username);

  password && LoginPage.passwordField().type(password);

  // click the login button
  LoginPage.loginButton().click();
});

Cypress.Commands.add("login", () => {
  cy.loginWith(VALID_USERNAME, VALID_PASSWORD);
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Logs in with the given username and password.
       */
      loginWith(username: string, password: string): Chainable<void>;
      /**
       * Logs in with valid username and password.
       */
      login(): Chainable<void>;
    }
  }
}

// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
export {};
