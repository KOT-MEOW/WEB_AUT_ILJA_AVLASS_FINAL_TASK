import { AutomationPractice } from "../pageObject/automation.practice.page";
import { BasePage } from "../pageObject/base.page";

describe('Final Task HW', () => {
  context("Scenarios", () => {

    beforeEach(() => {
      BasePage.visit();
    })

    it('FINAL SCENARIO', () => {
      /*
       Input all the necessary information in the text fields, buttons, etc, where it is not
        stated otherwise.
      */
      AutomationPractice.setFirstName.type("Ilja");
      AutomationPractice.setLastName.type("Avlass");
      AutomationPractice.setEmail.type("Ilja.Avlass@example.com");
      AutomationPractice.setGender.contains("Male").click();
      AutomationPractice.setPhoneNumber.type("1234567890");
      AutomationPractice.setAdress.type("Random Adress 21");
      // Set the - Date of Birth - with Calendar widget to - 28th of February, 1930
      AutomationPractice.openCalendarApp.click();
      AutomationPractice.BirthDayYear.select("1930");
      AutomationPractice.BirthDayMonth.select("February");
      // I couldn't get a dynamic day selection. I didn't understand how to make it.
      AutomationPractice.BirthDayDay28.click();
      // Set Subjects to Economics.
      AutomationPractice.setSubject.type("Economics{enter}");
      // Set Hobbies to Music.
      AutomationPractice.setHobby.contains("Music").click();
      // Upload an image of your choice
      AutomationPractice.uploadImage;
      // Set State to NCR.
      AutomationPractice.selectState.type("NCR{enter}");
      // Set City to Delhi.
      AutomationPractice.selectCity.type("Delhi{enter}");
      AutomationPractice.submitButton.click();
      // Validate that each Labeled row contains the correct information.
      AutomationPractice.validateTable;
    })

  })
  
})