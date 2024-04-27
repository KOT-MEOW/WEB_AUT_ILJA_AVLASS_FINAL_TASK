import { BasePage } from "./base.page";

export class AutomationPractice extends BasePage {

    static get setFirstName(){
        return cy.get('[id="firstName"]');
    }

    static get setLastName(){
        return cy.get('[id="lastName"]');
    }

    static get setEmail(){
        return cy.get('[id="userEmail"]');
    }

    static get setGender(){
        return cy.get('[class="custom-control custom-radio custom-control-inline"]');
    }

    static get setPhoneNumber(){
        return cy.get('[id="userNumber"]');
    }

    static get openCalendarApp(){
        return cy.get('[id="dateOfBirthInput"]');
    }

    static get BirthDayYear(){
        return cy.get('[class="react-datepicker__year-select"]');
    }
    
    static get BirthDayMonth(){
        return cy.get('[class="react-datepicker__month-select"]');
    }

    // I couldn't get a dynamic day selection. I didn't understand how to make it.
    static get BirthDayDay28(){
        return cy.get('[class="react-datepicker__day react-datepicker__day--028"]');
    }

    static get setSubject(){
        return cy.get('[id="subjectsContainer"]');
    }

    static get setHobby(){
        return cy.get('[id="hobbiesWrapper"]');
    }

    static get uploadImage(){
        return cy.get('input[type=file][id="uploadPicture"]').selectFile('cypress/files/meme.jpg');
    }

    static get setAdress(){
        return cy.get('[id="currentAddress"]');
    }

    static get selectState(){
        return cy.get('[id="state"]');
    }

    static get selectCity(){
         return cy.get('[id="city"]');
    }

    static get submitButton(){
        return cy.get('[id="submit"]');
   }

    // VAL
    static get validateTable(){
        cy.get('tbody').within(() => {
            cy.contains('tr', 'Student Name').should('contain', "Ilja Avlass");
            cy.contains('tr', 'Student Email').should('contain', 'Ilja.Avlass@example.com');
            cy.contains('tr', 'Gender').should('contain', 'Male');
            cy.contains('tr', 'Mobile').should('contain', '1234567890');
            cy.contains('tr', 'Date of Birth').should('contain', '28 February,1930');
            cy.contains('tr', 'Subjects').should('contain', 'Economics');
            cy.contains('tr', 'Hobbies').should('contain', 'Music');
            cy.contains('tr', 'Picture').should('contain', 'meme.jpg');
            cy.contains('tr', 'Address').should('contain', 'Random Adress 21'); 
            cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
        });
     }

}