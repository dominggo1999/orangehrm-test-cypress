import { SidebarSection } from "cypress/section-objects";
import { sidebarLinks } from "config/sidebarLinks";

describe("Sidebar", () => {
  beforeEach(() => {
    cy.login();
  });

  const isSidebarExpanded = () => {
    SidebarSection.elements.sidebar().should("not.have.class", "toggled");
  };

  const isSidebarCollapsed = () => {
    SidebarSection.elements.sidebar().should("have.class", "toggled");
  };

  // SB_01_001
  it("Sidebar is visible on large screen size", () => {
    isSidebarExpanded();
  });

  // SB_01_002
  it("Toggling sidebar on large screen size", () => {
    isSidebarExpanded();

    // Close sidebar
    SidebarSection.toggle();
    isSidebarCollapsed();

    // Open sidebar again
    SidebarSection.toggle();
    isSidebarExpanded();
  });

  // SB_01_003
  it("All links work properly", () => {
    const linkTexts = sidebarLinks.map((l) => l.text.toLowerCase());
    const linkPaths = sidebarLinks.map((l) => l.path);

    SidebarSection.elements.getAllLinks().each((link) => {
      expect(linkTexts).to.include(link.text().toLowerCase());

      expect(linkPaths).to.include(
        (link.attr("href") || "").replace("/web/index.php", ""),
      );
    });
  });

  // SB_01_004
  it("Sidebar Search Valid Value", () => {
    SidebarSection.elements.searchField().type("Admin");
    SidebarSection.elements.getAllLinks().should("have.length", 1);
    SidebarSection.elements
      .getAllLinks()
      .first()
      .then((val) => {
        expect(val.text()).to.equal("Admin");
      });
  });

  // SB_01_005
  it("Sidebar Search Invalid Value", () => {
    SidebarSection.elements.searchField().type("invalid_search");
    SidebarSection.elements.getAllLinks().should("have.length", 0);
  });
});
