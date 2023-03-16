import { SidebarSection } from "cypress/section-objects";
import { UsersPage } from "cypress/page-objects";

describe("Open admin page", () => {
  beforeEach(() => {
    cy.login();
  });

  // ADM_01_001
  it("Clicking the 'Admin' link should redirect the user to the admin page.", () => {
    cy.wait(2000);
    SidebarSection.clickLinkWithText("Admin");
    cy.url().should("include", UsersPage.url);
  });
});
