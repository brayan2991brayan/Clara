export class LanguagePageElements{
    static get topMenu(){
        return{
            get languageElement(){
                return cy.get('[data-testid="countryLanguageSelector"]');
            },
            get languageSelector(){
                return cy.get('.css-8f7wnq-control').eq(1);
            },
            get languageOkButton(){
                return cy.contains('OK');
            }
        };
    }
}