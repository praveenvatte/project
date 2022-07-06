@Demo
Feature: Retirement savings calculation

Background: User should launch the browser and open the URL
Given User should open the browser and navigate to the URL

 #>>>>>>>>>>>>> This scenario is to calculate the Retirement amoount of a person without Social Security Income <<<<<<<<<<<<<<<<<<<
  Scenario: Retirement savings of a person without social security benefits
  Given User is on securian public facing application
  When User provides all the required fields in the application to calculate the savings
  Then user will be able to see the total savings after his retirement with out social securoty benefits
	
 #>>>>>>>>>>>>> This scenario is to calculate the Retirement amoount of a person with Social Security Income <<<<<<<<<<<<<<<<<<<

	Scenario: Retirement savings of a person with social security benefits
  Given User is on securian public facing application
  When User provides all the required fields in the application to calculate the savings with SSI
  Then user will be able to see the total savings after his retirement with social securoty benefits
 
 #>>>>>>>>>>>>> Negative scenario to check whether an error message is displayed when mandatory fields are not entered <<<<<<<<<<<<<<<<<<< 

	Scenario: check the errror message when all mandatory fields are not entered
  Given User is on securian public facing application
  When User does not provide values in all mandatory fields in PreRetirement Calculator page
  Then user should be able to see the error message and should not be navigated to next page