describe('workspace-project App', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'error').as('consoleError');
      }
    });
  });

  it('should display welcome message', () => {
    cy.get('[data-cy="button"]').should('have.text', 'Need a popover?');
  });

  it('should open a popover and close it', () => {
    cy.clock();
    cy.get('[data-cy="button"]').click();
    cy.tick(500);
    cy.get('[data-cy="popover"]').should('be.visible');
    cy.get('[data-cy="button-close-popover"]').click();
    cy.get('[data-cy="popover"]').should('not.be.visible');
  });

  afterEach(() => {
    cy.get('@consoleError').should('not.be.called');
  });
});
