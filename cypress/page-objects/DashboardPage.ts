class DashboardPage {
  readonly url: string = "/dashboard/index";

  visit() {
    cy.visit(this.url);
  }
}

export default new DashboardPage();
