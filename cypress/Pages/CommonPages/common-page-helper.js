import { CommonPageConstants } from "./common-page-constants";

export class CommonPageHelper{
    static navigateToTheWebApp(){
        cy.visit(CommonPageConstants.webAppUrl);
    }
}