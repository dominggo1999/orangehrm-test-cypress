class SidebarSection {
  elements = {
    searchField: () =>
      cy.get(".oxd-sidepanel-body .oxd-main-menu-search > input"),

    sidebar: () => cy.get(".oxd-sidepanel"),

    toggleButton: () => cy.get(".oxd-sidepanel-body > div > div > button"),

    getAllLinks: () => cy.get(".oxd-sidepanel-body ul.oxd-main-menu").find("a"),
  };

  toggle() {
    this.elements.toggleButton().click();
  }

  clickLinkWithText(text: string) {
    this.elements.sidebar().contains(text).click();
  }
}

export default new SidebarSection();
