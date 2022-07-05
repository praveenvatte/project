@Demo
Feature: Retirement savings calculation

Background: User should launch the browser and open the URL
Given User should open the browser and navigate to the URL

 
  Scenario: Retirement savings of a person without social security benefits
  Given User is on securian public facing application
  When User provides all the required fields in the application to calculate the savings
  Then user will be able to see the total savings after his retirement with out social securoty benefits
	
	Scenario: Retirement savings of a person with social security benefits
  Given User is on securian public facing application
  When User provides all the required fields in the application to calculate the savings with SSI
  Then user will be able to see the total savings after his retirement with social securoty benefits
  
