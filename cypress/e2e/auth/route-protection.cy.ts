import DashboardPage from "page-objects/DashboardPage";

describe("Route Protection", () => {
  it("Only allow dashboard access for logged-in users.", () => {
    DashboardPage.visit();
    cy.shouldIncludeLoginPageUrl();
  });
});
