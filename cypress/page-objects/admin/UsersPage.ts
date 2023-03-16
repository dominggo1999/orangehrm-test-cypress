class UsersPage {
  readonly url: string = "/admin/viewSystemUsers";

  visit() {
    cy.visit(this.url);
  }
}

export default new UsersPage();
