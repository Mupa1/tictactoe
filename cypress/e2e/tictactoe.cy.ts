/// <reference types="cypress" />

describe('TicTacToe Game', () => {
  it('should allow two players to play a full game', () => {
    cy.visit('/');
    cy.get('button').first().click();
    cy.get('button').eq(1).click();
    cy.get('button').eq(4).click();
    cy.get('button').eq(2).click();
    cy.get('button').eq(8).click();
    cy.contains('Winner: X');
  });
});

export {};
