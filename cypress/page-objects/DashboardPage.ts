class DashboardPage {
  readonly url: string = "/dashboard/index";

  elements = {
    profileButton: () =>
      cy.get(".oxd-userdropdown-tab", {
        timeout: 5000,
      }),
    logoutButton: () => cy.get(":nth-child(4) > .oxd-userdropdown-link"),
  };

  visit() {
    cy.visit(this.url);
  }
}

export default new DashboardPage();
