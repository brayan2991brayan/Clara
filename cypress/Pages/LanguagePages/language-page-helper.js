import { LanguagePageElements } from "./language-page-elements";

export class LanguageHelper{
    static clickOnLanguageButton(){
        LanguagePageElements.topMenu.languageElement.click({force:true});
    }

    static clickOnLanguageSelector(){
        LanguagePageElements.topMenu.languageSelector.click({force:true});
    }

    static clickOnOKLanguageButton(){
        LanguagePageElements.topMenu.languageOkButton.click({force:true});
    }
    
}