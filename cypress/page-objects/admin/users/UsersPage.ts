class UsersPage {
  readonly url: string = "/admin/viewSystemUsers";
  readonly displayedUserData: string[] = [
    "Username",
    "User Role",
    "Employee Name",
    "Status",
    "Actions",
  ];

  elements = {
    userTable: () => cy.get(".oxd-table"),
    userTableHeader: () => this.elements.userTable().get(".oxd-table-header"),
    userTableBody: () => this.elements.userTable().get(".oxd-table-body"),
    userFilter: () => cy.get(".oxd-table-filter"),
    usernameField: () => cy.get(":nth-child(2) > .oxd-input"),
    userRoleOptions: () =>
      cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper",
      ),
    employeeNameAutocomplete: () => cy.get(".oxd-autocomplete-wrapper"),
    statusField: () =>
      cy.get(
        ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper",
      ),
    addUserButton: () => cy.get(".orangehrm-header-container > .oxd-button"),
    userTableRows: () => this.elements.userTable().find(".oxd-table-card"),
    lastUserRow: () =>
      this.elements.userTableBody().find(".oxd-table-card:last-child"),
    lastUserUsername: () =>
      this.elements
        .userTableBody()
        .find(".oxd-table-card:last-child .oxd-table-cell:nth-of-type(2)"),
    deleteUserConfirmButton: () =>
      cy.get(".oxd-dialog-container-default--inner .oxd-button--label-danger"),
    deleteUserCancelButton: () =>
      cy.get(".oxd-dialog-container-default--inner .oxd-button--text"),
    applyFilterButton: () =>
      cy.get(".oxd-form-actions > .oxd-button--secondary"),
    resetFilterButton: () => cy.get(".oxd-button--ghost"),
  };

  visit() {
    cy.visit(this.url);
  }

  editLastUserRow() {
    this.elements
      .lastUserRow()
      .find(".oxd-table-cell-actions button:nth-of-type(2)")
      .click();
  }

  deleteLastUserRow() {
    this.elements
      .lastUserRow()
      .find(".oxd-table-cell-actions button:nth-of-type(1)")
      .click();
  }

  cancelDelete() {
    this.elements.deleteUserCancelButton().click();
  }

  confirmDelete() {
    this.elements.deleteUserConfirmButton().click();
  }

  applyFilter() {
    this.elements.applyFilterButton().click({
      force: true,
    });
  }

  resetFilter() {
    this.elements.resetFilterButton().click({
      force: true,
    });
  }
}

export default new UsersPage();
