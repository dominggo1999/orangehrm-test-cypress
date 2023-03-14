import { DashboardPage } from "cypress/page-objects";

describe("Logout", () => {
  beforeEach(() => {
    cy.login();
  });

  // A_03_001
  it("Successfully logout user", () => {
    // Click logout button
    cy.url().should("include", "/dashboard");
    DashboardPage.profileButton().click();
    DashboardPage.logoutButton().click();

    // Should be redirected to the login page
    cy.shouldIncludeLoginPageUrl();
  });
});
