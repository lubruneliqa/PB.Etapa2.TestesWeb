describe('Testes Front na página Challenging DOM Test', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/challenging_dom');
  });

  it('Clicar nos 3 botões presentes na tela', () => {
    cy.get('.button').first().click();
    cy.get('.button').eq(1).click();
    cy.get('.button').last().click();
  });

  it('Clicar em todos os botões de Edit e Delete', () => {
    cy.get('a[href="#edit"]').each(($deleteButton, index) => {
      cy.wrap($deleteButton).click();
      cy.log(`Clicked on Delete button ${index + 1}`);
    });

    cy.get('a[href="#delete"]').each(($deleteButton, index) => {
      cy.wrap($deleteButton).click();
      cy.log(`Clicked on Delete button ${index + 1}`);
    });
  
  });

});
