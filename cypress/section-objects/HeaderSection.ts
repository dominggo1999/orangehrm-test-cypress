class HeaderSection {
  elements = {
    hamburgerIcon: () =>
      cy.get(".oxd-topbar-header .oxd-topbar-header-hamburger"),
  };

  hamburgertoggle() {
    this.elements.hamburgerIcon().click();
  }
}

export default new HeaderSection();
