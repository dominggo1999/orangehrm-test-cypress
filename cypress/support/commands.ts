/// <reference types="cypress" />
import { VALID_PASSWORD, VALID_USERNAME } from "cypress/config";

Cypress.Commands.add("loginWith", (username, password) => {
  // visit the login page
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  // enter the username and password
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    username,
  );
  cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    password,
  );

  // click the login button
  cy.get(".oxd-button").click();
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
