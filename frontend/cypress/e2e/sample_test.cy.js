describe('Frontend test', () => {
  it('Loads homepage', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Frontend Connected to Backend');
  });

  it('Shows backend message', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Hello from backend');
  });
});
