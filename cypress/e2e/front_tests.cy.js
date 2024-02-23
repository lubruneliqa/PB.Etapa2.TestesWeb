describe('Testes Front na página Challenging DOM Test', () => {
  
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
  });

  it('Clicar nos 3 botões presentes na tela', () => {
    cy.get('.button').first().should('be.visible').click();
    cy.get('.button').eq(1).should('be.visible').click();
    cy.get('.button').last().should('be.visible').click();
  });

  it('Clicar em todos os botões de Editar', () => {
    cy.get('a[href="#edit"]').each(($deleteButton, index) => {
      cy.wrap($deleteButton).should('be.visible').click();
      cy.log(`Clicar no botão de editar ${index + 1}`);
    });
  });
  
   it('Clicar em todos os botões de Deletar', () => {
    cy.get('a[href="#delete"]').each(($deleteButton, index) => {
      cy.wrap($deleteButton).should('be.visible').click();
      cy.log(`Clicar no botão de deletar ${index + 1}`);
    });
  });
});
