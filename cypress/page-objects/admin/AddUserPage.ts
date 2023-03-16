class AddUserPage {
  readonly url: string = "/dashboard/index";

  elements = {
    userRoleOptions: () =>
      cy.get(
        ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper",
      ),
    employeeNameAutocomplete: () =>
      cy.get(
        ":nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group .oxd-autocomplete-wrapper",
      ),
    statusOptions: () =>
      cy.get(
        ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper",
      ),
    usernameField: () =>
      cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"),
    passwordField: () =>
      cy.get(
        ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input",
      ),
    confirmPasswordField: () =>
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"),
    saveButton: () => cy.get(".oxd-button--secondary"),
    cancelButton: () => cy.get(".oxd-button--ghost"),
  };

  visit() {
    cy.visit(this.url);
  }

  submit() {
    this.elements.saveButton().click();
  }

  cancel() {
    this.elements.cancelButton().click();
  }
}

export default new AddUserPage();
