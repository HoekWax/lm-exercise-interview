describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    // Redirects to /home and shows the main CTA
    cy.url().should("include", "/home");
    cy.contains("Hello").should("be.visible");
  });
});
