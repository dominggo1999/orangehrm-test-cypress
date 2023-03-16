class ToastSection {
  elements = {
    container: () => cy.get(".oxd-toast-container"),
    success: () => this.elements.container().find(".oxd-toast--success"),
    warn: () => this.elements.container().find(".oxd-toast--warn"),
    error: () => this.elements.container().find(".oxd-toast--error"),
    info: () => this.elements.container().find(".oxd-toast--info"),
  };
}

export default new ToastSection();
