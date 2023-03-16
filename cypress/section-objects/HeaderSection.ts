class HeaderSection {
  hamburgerIcon() {
    return cy.get(".oxd-topbar-header .oxd-topbar-header-hamburger");
  }

  hamburgertoggle() {
    this.hamburgerIcon().click();
  }
}

export default new HeaderSection();
