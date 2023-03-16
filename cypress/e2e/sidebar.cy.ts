import { SidebarSection } from "cypress/section-objects";
import { sidebarLinks } from "config/sidebarLinks";

describe("Sidebar", () => {
  beforeEach(() => {
    cy.login();
  });

  const isSidebarExpanded = () => {
    SidebarSection.sidebar().should("not.have.class", "toggled");
  };

  const isSidebarCollapsed = () => {
    SidebarSection.sidebar().should("have.class", "toggled");
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

    SidebarSection.getAllLinks().each((link) => {
      expect(linkTexts).to.include(link.text().toLowerCase());

      expect(linkPaths).to.include(
        (link.attr("href") || "").replace("/web/index.php", ""),
      );
    });
  });

  // SB_01_004
  it("Sidebar Search Valid Value", () => {
    SidebarSection.searchField().type("Admin");
    SidebarSection.getAllLinks().should("have.length", 1);
    SidebarSection.getAllLinks()
      .first()
      .then((val) => {
        expect(val.text()).to.equal("Admin");
      });
  });

  // SB_01_005
  it("Sidebar Search Invalid Value", () => {
    SidebarSection.searchField().type("invalid_search");
    SidebarSection.getAllLinks().should("have.length", 0);
  });
});
