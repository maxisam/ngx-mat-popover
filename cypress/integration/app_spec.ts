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

  afterEach(() => {
    cy.get('@consoleError').should('not.be.called');
  });
});
