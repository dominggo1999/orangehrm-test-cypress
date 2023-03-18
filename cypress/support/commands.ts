/// <reference types="cypress" />
import { VALID_PASSWORD, VALID_USERNAME } from "cypress/config";
import { LoginPage } from "cypress/page-objects";
import { HeaderSection } from "cypress/section-objects";

Cypress.Commands.add("loginWith", (username, password) => {
  // visit the login page
  LoginPage.visit();

  // enter the username and password
  username && LoginPage.elements.usernameField().type(username);

  password && LoginPage.elements.passwordField().type(password);

  // click the login button
  LoginPage.submit();
});

Cypress.Commands.add("login", () => {
  cy.loginWith(VALID_USERNAME, VALID_PASSWORD);
});

Cypress.Commands.add("shouldIncludeLoginPageUrl", () => {
  cy.url().should("include", LoginPage.url);
});

Cypress.Commands.add("logout", () => {
  HeaderSection.logout();
});

Cypress.Commands.add("selectOption", (wrapper, value) => {
  // Toggle options
  wrapper.click();

  // Get options
  const options = wrapper.find('[role="listbox"]');

  // Apply value
  options.contains(value ? value : "-- Select --").click();
});

Cypress.Commands.add("fillAutocomplete", (wrapper, value) => {
  //  Type value
  wrapper.find("input").type(value);

  cy.wait(5000);

  // Get options
  const options = wrapper.get('[role="listbox"]');

  // Apply value
  options.invoke("text").then((text) => {
    if (text.indexOf(value) !== -1) {
      options.contains(value).click();
    } else {
      // Try clicking the first option if there is no exact value found
      wrapper.get('[role="listbox"]').first().click();
    }
  });
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
      /**
       * Logout
       */
      logout(): Chainable<void>;
      /**
       * Check if url include login page url
       */
      shouldIncludeLoginPageUrl(): Chainable<void>;
      /**
       * Custom choose option, since the website doesn't use the native select element
       */
      selectOption(
        wrapper: Cypress.Chainable<JQuery<HTMLElement>>,
        value: string,
      ): Chainable<void>;
      /**
       * Fill autocomplete field
       */
      fillAutocomplete(
        wrapper: Cypress.Chainable<JQuery<HTMLElement>>,
        value: string,
      ): Chainable<void>;
    }
  }
}

// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
export {};
