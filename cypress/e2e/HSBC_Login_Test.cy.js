

describe('HSBC bank Login Scenario Test', () => {

  beforeEach(() => {
    cy.clearCookies({ domain: 'https://www.hsbc.co.in' });
    cy.visit('https://www.hsbc.co.in/');
  })

  it('Validate HSBC Bank Login', () => {

    cy.get('h1').should('be.visible');

    cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    // cy.get('div[aria-label="Log on options"]').click({force: true});
    cy.contains('Log On').click({ force: true });
    cy.contains('Continue to log on with browser').click({ force: true });
    //cy.url().should('include','https://www.hsbc.co.in/#model/');
    // cy.xpath('//*[contains(text(),'Log On ')]').should('contain.text','Log On');
    cy.get('h2>span').should('contain.text', 'Log On');
    cy.get('button[name="continue"]').should('be.visible').and('contain', ' Continue ');
    cy.get('button[name="continue"]').should('be.disabled');
    cy.get('input#username').type('abc@gmail.com');
    cy.get('button[name="continue"]').should('not.be.disabled');
    cy.get('span.help-icon').should('be.visible');
    cy.get('span.help-icon').click();
    cy.contains('Username').should('be.visible');
    cy.get('div#action-buttons').should('have.css', 'display', 'block');
    cy.get('input[value="Close"]').click({ force: true });
  })
})