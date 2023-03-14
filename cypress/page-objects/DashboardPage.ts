class DashboardPage {
  url: string;

  constructor() {
    this.url = "/dashboard/index";
  }

  visit() {
    cy.visit(this.url);
  }

  profileButton() {
    return cy.get(".oxd-userdropdown-tab", {
      timeout: 5000,
    });
  }

  logoutButton() {
    return cy.get(":nth-child(4) > .oxd-userdropdown-link");
  }
}

export default new DashboardPage();
