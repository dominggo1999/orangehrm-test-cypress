import { DashboardPage } from "cypress/page-objects";

describe("Logout", () => {
  beforeEach(() => {
    cy.login();
  });

  // A_03_001
  it("Successfully logout user", () => {
    cy.wait(2000);
    // Click logout button
    DashboardPage.elements.profileButton().click();
    DashboardPage.elements.logoutButton().click();

    // Should be redirected to the login page
    cy.shouldIncludeLoginPageUrl();
  });
});
