class SidebarSection {
  searchField() {
    return cy.get(".oxd-sidepanel-body .oxd-main-menu-search > input");
  }

  sidebar() {
    return cy.get(".oxd-sidepanel");
  }

  toggleButton() {
    return cy.get(".oxd-sidepanel-body > div > div > button");
  }

  toggle() {
    this.toggleButton().click();
  }

  getAllLinks() {
    return cy.get(".oxd-sidepanel-body ul.oxd-main-menu").find("a");
  }
}

export default new SidebarSection();
