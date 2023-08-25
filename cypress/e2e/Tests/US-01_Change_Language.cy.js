import { CommonPageHelper } from "../../Pages/CommonPages/common-page-helper";
import { LanguageHelper } from "../../Pages/LanguagePages/language-page-helper";

describe('Test Suite to change the Language from English to Spanish', () => {
  beforeEach(() => {
    CommonPageHelper.navigateToTheWebApp();
    Cypress.on('uncaught:exception', () => { return false })
  })

  it('Verify the title of the page', () => {
    cy.title().should('include', 'Naturally Tasty Cat & Dog Food | Edgard & Cooper');
  })

  it('Verify the user can click on español language option', () => {
    LanguageHelper.clickOnLanguageButton();
    cy.wait(2000);
    cy.changeLanguage();
    cy.wait(2000);
    cy.contains('English').click({force:true});
    cy.wait(2000);
    cy.contains('español').click({force:true});
    cy.contains('OK').click({force:true});
    cy.wait(2000);

    //Assert
    cy.get('#layout > main > div.flex.flex-col.justify-center.bg-cyan-400 a:nth-child(2)').should('contain', 'Tienda de gatos');
  })
});
