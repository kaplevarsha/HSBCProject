describe('HSBC bank Credit card test scenarios', () => {
  beforeEach(() => {
    cy.clearCookies({ domain: 'https://www.hsbc.co.in' });
    cy.visit('https://www.hsbc.co.in/');
    cy.screenshot();
  })

  it('Validate creditcard', () => {
    cy.contains('Banking').trigger('mouseover');
    cy.contains('Credit Cards').click({ force: true });
    cy.contains('Credit cards').should('be.visible');

    cy.get('h3#chp_main_link_2>a>span.icon').click();
    cy.contains('Apply now').should('contain.text', 'Apply now').should('be.visible');
    cy.url().should('include', '/credit-cards/products/visa-cashback/');
    cy.get('img#pp_intro_image_3').should('be.visible');

    cy.get('div#pp_tools_richtext_2>p.A-TYP28L-RW-ALL').should('contain.text', 'Joining fee INR999 '.trim());
    cy.get('div#pp_tools_richtext_3>p').should('contain.text', 'INR999 (waived if you spend more than INR200,000 per year)');
    cy.get('img.LPMimage').should('be.visible');
  })
})