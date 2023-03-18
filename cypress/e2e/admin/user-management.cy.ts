import {
  UsersPage,
  AddUserPage,
  DashboardPage,
  EditUserPage,
} from "cypress/page-objects";
import { ToastSection, HeaderSection } from "cypress/section-objects";
import { generate } from "short-uuid";

describe("User management", () => {
  beforeEach(() => {
    cy.login();
    cy.wait(2000);
    UsersPage.visit();
  });

  // ADM_02_001
  it("Displaying the Users Table", () => {
    UsersPage.elements.userTable();

    UsersPage.displayedUserData.forEach((item) => {
      UsersPage.elements.userTableHeader().contains(item);
    });
  });

  // ADM_02_002
  it("Displaying the user filter", () => {
    UsersPage.elements.userFilter();
    UsersPage.elements.usernameField();
    UsersPage.elements.userRoleOptions();
    UsersPage.elements.employeeNameAutocomplete();
    UsersPage.elements.statusField();
  });

  // ADM_02_003
  it("Add new user", () => {
    const USERNAME = "a_new_username_" + generate();
    const PASSWORD = "Secure_password_123";

    // Navigate to AddUser page
    UsersPage.elements.addUserButton().click();

    // Fill all fields
    cy.selectOption(AddUserPage.elements.userRoleOptions(), "ESS");
    cy.selectOption(AddUserPage.elements.statusOptions(), "Enabled");

    HeaderSection.elements
      .activeUserName()
      .invoke("text")
      .then((activeUserName) => {
        cy.fillAutocomplete(
          AddUserPage.elements.employeeNameAutocomplete(),
          activeUserName,
        );
      });

    AddUserPage.elements.usernameField().type(USERNAME);
    cy.wait(1000);
    cy.contains("Already exists").should("not.exist");

    AddUserPage.elements.passwordField().type(PASSWORD);
    AddUserPage.elements.confirmPasswordField().type(PASSWORD);

    AddUserPage.submit();

    // Should displaying success message
    ToastSection.elements.success().contains("Successfully Saved");
    cy.wait(2000);

    // Should back to the users page
    UsersPage.elements.userTable().contains(USERNAME);

    // Logout
    HeaderSection.logout();

    cy.wait(2000);

    // Try login with newly created user
    cy.loginWith(USERNAME, PASSWORD);

    // Should be able to login successfully
    cy.url().should("include", DashboardPage.url);
  });

  // ADM_02_004
  it("Add new user with blank data", () => {
    // Navigate to AddUser page
    UsersPage.elements.addUserButton().click();
    AddUserPage.submit();

    // Should not be able to create a new user
    cy.get("span.oxd-input-field-error-message").should("have.length", 6);
  });

  // ADM_02_005
  it("Cancel adding new user", () => {
    // Navigate to AddUser page
    UsersPage.elements.addUserButton().click();

    // Cancel
    AddUserPage.cancel();
    cy.url().should("include", UsersPage.url);
  });

  // ADM_02_006
  it("Edit user", () => {
    const USERNAME = "a_new_username_" + generate();

    // Navigate to AddUser page
    UsersPage.editLastUserRow();

    // Edit fields
    EditUserPage.elements.usernameField().clear().type(USERNAME);

    cy.wait(1000);

    EditUserPage.submit();

    // Should displaying success message
    ToastSection.elements.success().contains("Successfully Updated");
    cy.wait(2000);

    // Should back to the users page
    UsersPage.elements.userTable().contains(USERNAME);
  });

  // ADM_02_007
  it("Edit user with blank data", () => {
    // Navigate to AddUser page
    UsersPage.editLastUserRow();

    // Make fields empty
    cy.selectOption(EditUserPage.elements.userRoleOptions(), "");
    cy.selectOption(EditUserPage.elements.statusOptions(), "");

    EditUserPage.elements.usernameField().clear();

    EditUserPage.submit();

    cy.get("span.oxd-input-field-error-message").should("have.length", 3);
  });

  // ADM_02_008
  it("Cancel edit user", () => {
    // Navigate to AddUser page
    UsersPage.editLastUserRow();

    // Cancel
    EditUserPage.cancel();
    cy.url().should("include", UsersPage.url);
  });

  // ADM_02_009
  it("Delete user", () => {
    // Navigate to AddUser page
    UsersPage.elements
      .lastUserUsername()
      .invoke("text")
      .then((deletedUserUsername) => {
        UsersPage.deleteLastUserRow();
        cy.wait(1000);
        UsersPage.confirmDelete();

        // Should displaying success message
        ToastSection.elements.success().contains("Successfully Deleted");

        // Should remove user from table
        UsersPage.elements
          .userTable()
          .should("not.contain.text", deletedUserUsername);
      });
  });

  // ADM_02_010
  it("Cancel delete user", () => {
    // Navigate to AddUser page
    UsersPage.elements
      .lastUserUsername()
      .invoke("text")
      .then((deletedUserUsername) => {
        UsersPage.deleteLastUserRow();
        cy.wait(1000);
        UsersPage.cancelDelete();

        // Should remove user from table
        UsersPage.elements
          .userTable()
          .should("contain.text", deletedUserUsername);
      });
  });

  // ADM_02_011
  it("Filter user", () => {
    HeaderSection.elements
      .activeUserName()
      .invoke("text")
      .then((activeUserName) => {
        UsersPage.elements.usernameField().type("Admin");

        cy.selectOption(UsersPage.elements.userRoleOptions(), "Admin");
        cy.selectOption(UsersPage.elements.statusField(), "Enabled");

        cy.fillAutocomplete(
          UsersPage.elements.employeeNameAutocomplete(),
          activeUserName,
        );

        UsersPage.applyFilter();

        // Must only showing 1 row
        UsersPage.elements.userTableRows().should("have.length", 1);
        UsersPage.elements
          .userTable()
          .should("contain.text", "Admin")
          .should("contain.text", activeUserName);
      });
  });

  // ADM_02_012
  it("Filter user", () => {
    HeaderSection.elements
      .activeUserName()
      .invoke("text")
      .then((activeUserName) => {
        UsersPage.elements.usernameField().type("Admin");

        cy.selectOption(UsersPage.elements.userRoleOptions(), "Admin");
        cy.selectOption(UsersPage.elements.statusField(), "Enabled");

        cy.fillAutocomplete(
          UsersPage.elements.employeeNameAutocomplete(),
          activeUserName,
        );

        UsersPage.applyFilter();
        cy.wait(2000);
        UsersPage.resetFilter();

        // Must not only showing 1 row
        UsersPage.elements.userTableRows().should("not.have.length", 1);
        UsersPage.elements
          .userTable()
          .should("not.contain.text", "Admin")
          .should("not.contain.text", activeUserName);
      });
  });
});
