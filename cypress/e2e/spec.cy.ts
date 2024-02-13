describe('My First Test', () => {
  it('Visit Home Page', () => {
    cy.visit('/');
    cy.contains('Start your journey with Preline');
    cy.contains('Fully customizable rules to match your unique needs');
    cy.contains('Our Services');
    cy.contains('Read our latest news');
  });

  it('Visit About Page', () => {
    cy.visit('/about');
    cy.contains('We tackle the challenges start-ups face')
  })
})
