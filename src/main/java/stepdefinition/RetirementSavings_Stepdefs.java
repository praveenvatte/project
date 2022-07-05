package stepdefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.testBase;
import java.io.IOException;
import org.openqa.selenium.WebDriver;
import BussinesMethods.RetirementSavings_Methods;

//********************************************************************************************************************************
// This step definition class acts as a glue code between feature file and bussiness methods.
//********************************************************************************************************************************
public class RetirementSavings_Stepdefs {
	testBase TB = new testBase();
	WebDriver driver;

	//***********  To kill the instance of chromedriver from taskmanager *******************************************
	@Before
	public void KillChromeDriver() throws IOException {
		Runtime.getRuntime().exec("taskkill /F /IM chromedriver.exe /T");
		
	}
	
	//**********   This method is used to close the broswer ********************************************************
	@After
	public void tearDown() throws InterruptedException {
		driver.quit();
		Thread.sleep(10000);
	}

	// ************* Background step are executed before each and every scenario in the feature file ****************

	@Given("User should open the browser and navigate to the URL")
	public void user_should_open_the_browser_and_navigate_to_the_URL() throws Exception {
		
		TB.initialization();
		driver = TB.getdriver();
		TB.excelReader();
	}


	// *************  Step definition for "Retirement savings of a person without social security benefits" ******************

	@Given("User is on securian public facing application")
	public void user_is_on_securian_public_facing_application() throws InterruptedException {
		RetirementSavings_Methods.VerifyTheHomePage(driver);	
	}

	@When("User provides all the required fields in the application to calculate the savings")
	public void user_provides_all_the_required_fields_in_the_application_to_calculate_the_savings() throws InterruptedException, IOException {
		RetirementSavings_Methods.RetirementBenefitswithoutSSI(driver);
	}

	@Then("user will be able to see the total savings after his retirement with out social securoty benefits")
	public void user_will_be_able_to_see_the_total_savings_after_his_retirement_with_out_social_securoty_benefits() throws InterruptedException {
		RetirementSavings_Methods.ValidateBenefits(driver);
	}
	
	// ************   Step definition for "Retirement savings of a person with social security benefits" **********************
	@When("User provides all the required fields in the application to calculate the savings with SSI")
	public void user_provides_all_the_required_fields_in_the_application_to_calculate_the_savings_with_SSI() throws InterruptedException, IOException {
		RetirementSavings_Methods.RetirementBenefitswithSSI(driver);
		RetirementSavings_Methods.DefaultCalculatorValues(driver);
	}

	@Then("user will be able to see the total savings after his retirement with social securoty benefits")
	public void user_will_be_able_to_see_the_total_savings_after_his_retirement_with_social_securoty_benefits() throws InterruptedException {
		RetirementSavings_Methods.ValidateBenefits(driver);
	}

}
