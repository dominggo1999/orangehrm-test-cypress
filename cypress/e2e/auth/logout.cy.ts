describe("Logout", () => {
  beforeEach(() => {
    cy.login();
  });

  // A_03_001
  it("Successfully logout user", () => {
    cy.wait(2000);
    cy.logout();

    // Should be redirected to the login page
    cy.shouldIncludeLoginPageUrl();
  });
});

export {};
