class HeaderSection {
  elements = {
    hamburgerIcon: () =>
      cy.get(".oxd-topbar-header .oxd-topbar-header-hamburger"),
    profileButton: () =>
      cy.get(".oxd-userdropdown-tab", {
        timeout: 5000,
      }),
    logoutButton: () => cy.get(":nth-child(4) > .oxd-userdropdown-link"),
    activeUserName: () => cy.get(".oxd-userdropdown-name"),
  };

  hamburgertoggle() {
    this.elements.hamburgerIcon().click();
  }

  logout() {
    this.elements.profileButton().click();
    this.elements.logoutButton().click();
  }
}

export default new HeaderSection();
