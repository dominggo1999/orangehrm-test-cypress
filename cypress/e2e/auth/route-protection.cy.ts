import DashboardPage from "page-objects/DashboardPage";

describe("Route Protection", () => {
  // A_05_001
  it("Only allow dashboard access for logged-in users.", () => {
    DashboardPage.visit();
    cy.shouldIncludeLoginPageUrl();
  });
});
