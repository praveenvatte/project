package BussinesMethods;

import java.io.IOException;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import Pages.DefaultValueCalculatorPage;
import Pages.PreRetirmentCalcutationPage;
import Pages.ResultsPage;
import util.testBase;


// This Retirement savings calass is used to write all the methods that are identified.
public class RetirementSavings_Methods {

	static PreRetirmentCalcutationPage PreRetirmentCal = new PreRetirmentCalcutationPage();
	static DefaultValueCalculatorPage DefautValCal = new DefaultValueCalculatorPage();
	static ResultsPage resultpage = new ResultsPage();
	static testBase baseClass = new testBase();
	static XSSFSheet sheet;
	 

	// This method is used to verify whether User navigated to Securian Financial Home Page and to check the home page logo text
	public static void VerifyTheHomePage(WebDriver driver) {
		String HomePage = driver.findElement(By.xpath(PreRetirmentCal.HomePage_Title_Xpath)).getAttribute("alt");

		Assert.assertTrue(HomePage.equalsIgnoreCase("Securian Financial Home"));
	}

	// This RetirementBenefitswithoutSSI method is used to calculate the retirement savings of a person with out social security income.
	public static void RetirementBenefitswithoutSSI(WebDriver driver) throws InterruptedException, IOException {

		sheet = baseClass.getSheetValue();
		JavascriptExecutor js = (JavascriptExecutor) driver;


		driver.findElement(By.id(PreRetirmentCal.Age_TxtBox_ID)).sendKeys(Keys.chord(sheet.getRow(1).getCell(0).getStringCellValue().toString()));

		driver.findElement(By.id(PreRetirmentCal.RetirementAge_TxtBox_ID)).sendKeys(Keys.chord(sheet.getRow(1).getCell(1).getStringCellValue().toString()));

		WebElement CurrentIncome =driver.findElement(By.id(PreRetirmentCal.CurrentIncome_TxtBox_ID));
		CurrentIncome.click();
		CurrentIncome.sendKeys(Keys.chord(sheet.getRow(1).getCell(2).getStringCellValue()));

		WebElement SpouseIncome= driver.findElement(By.id(PreRetirmentCal.SpouseIncome_TxtBox_ID));
		SpouseIncome.click();
		SpouseIncome.sendKeys(Keys.chord(sheet.getRow(1).getCell(3).getStringCellValue()));

		WebElement CurrentSavings =driver.findElement(By.id(PreRetirmentCal.CurrentSavings_TxtBox_ID));
		CurrentSavings.click();
		CurrentSavings.sendKeys(Keys.chord(sheet.getRow(1).getCell(4).getStringCellValue()));

		driver.findElement(By.id(PreRetirmentCal.CurrentAnnualSavings_TxtBox_ID)).sendKeys(Keys.chord(sheet.getRow(1).getCell(5).getStringCellValue()));

		driver.findElement(By.id(PreRetirmentCal.SavingsIncreaseRate_TxtBox_ID)).sendKeys(Keys.chord(sheet.getRow(1).getCell(6).getStringCellValue()));
		Thread.sleep(2000);

		// Using JavaScript executor as selenium Click is not working for Social Security Income as No
		WebElement radioBtn1 = driver.findElement(By.id(PreRetirmentCal.SocialSecurityBenifits_RadioButton_ID));
		((JavascriptExecutor) driver).executeScript("arguments[0].checked = true;", radioBtn1);

		// Click on Calculate button to see the retirement savings
		WebElement Calculate = driver.findElement(By.xpath(PreRetirmentCal.Calculate_Button_Xpath));
		js.executeScript("arguments[0].click();", Calculate);
		Thread.sleep(1000);

	}

	public static void ValidateBenefits(WebDriver driver) throws InterruptedException {


		String Result =	driver.findElement(By.xpath(ResultsPage.Result_text_xpath)).getText();

		Assert.assertTrue(Result.equalsIgnoreCase("Results"));

		//************* Minimum amount required to retire from result page ********************
		String MinimumAmount =driver.findElement(By.xpath(ResultsPage.MinimumAmountToRetire_Xpath)).getText();
		System.out.println("Minimum amout required to retire: "+ MinimumAmount);
		
		driver.quit();
	}

	
	public static void RetirementBenefitswithSSI(WebDriver driver) throws InterruptedException, IOException {

		sheet = baseClass.getSheetValue();
		JavascriptExecutor js = (JavascriptExecutor) driver;
		String SSOverrideAmount = sheet.getRow(1).getCell(7).getStringCellValue().toString();
		
		
		// Pre-Retirement Calculator Page fields
		driver.findElement(By.id(PreRetirmentCal.Age_TxtBox_ID)).sendKeys(Keys.chord(sheet.getRow(1).getCell(0).getStringCellValue().toString()));
		Thread.sleep(2000);
		driver.findElement(By.id(PreRetirmentCal.RetirementAge_TxtBox_ID)).sendKeys(Keys.chord(sheet.getRow(1).getCell(1).getStringCellValue().toString()));

		WebElement CurrentIncome =driver.findElement(By.id(PreRetirmentCal.CurrentIncome_TxtBox_ID));
		CurrentIncome.click();
		CurrentIncome.sendKeys(Keys.chord(sheet.getRow(1).getCell(2).getStringCellValue()));

		WebElement SpouseIncome= driver.findElement(By.id(PreRetirmentCal.SpouseIncome_TxtBox_ID));
		SpouseIncome.click();
		SpouseIncome.sendKeys(Keys.chord(sheet.getRow(1).getCell(3).getStringCellValue()));

		WebElement CurrentSavings =driver.findElement(By.id(PreRetirmentCal.CurrentSavings_TxtBox_ID));
		CurrentSavings.click();
		CurrentSavings.sendKeys(Keys.chord(sheet.getRow(1).getCell(4).getStringCellValue()));

		driver.findElement(By.id(PreRetirmentCal.CurrentAnnualSavings_TxtBox_ID)).sendKeys(Keys.chord(sheet.getRow(1).getCell(5).getStringCellValue()));

		driver.findElement(By.id(PreRetirmentCal.SavingsIncreaseRate_TxtBox_ID)).sendKeys(Keys.chord(sheet.getRow(1).getCell(6).getStringCellValue()));


		// Using JavaScript executor as selenium Click is not working for Social Security Income as No
		WebElement SSI_Yes = driver.findElement(By.id(PreRetirmentCal.SocialSecurityBenifits_RadioButton_YES_ID));
		((JavascriptExecutor) driver).executeScript("arguments[0].checked = true;", SSI_Yes);
		Thread.sleep(1000);

		// Using JavaScript executor as selenium Click is not working for Social Security Income as No
				WebElement SSI_Yes1 = driver.findElement(By.id(PreRetirmentCal.SocialSecurityBenifits_RadioButton_YES_ID));
				((JavascriptExecutor) driver).executeScript("arguments[0].checked = true;", SSI_Yes1);



		// Using JavaScript executor as selenium Click is not working for Marital status as "Married"
		WebElement MaritalStatus = driver.findElement(By.xpath(PreRetirmentCal.Marriage_RadioBtn_Xpath));
		((JavascriptExecutor) driver).executeScript("arguments[0].checked = true;", MaritalStatus);

		
		

		// Using JavaScript executor to enter Social Security  Override Amount
		WebElement SSOverrideAmount_TXT = driver.findElement(By.xpath(PreRetirmentCal.SocialSecurityOverrideAmount_TxtBox_Xpath));
		js.executeScript("arguments[0].value='"+SSOverrideAmount+"'"+"",SSOverrideAmount_TXT);

		WebElement AdjustDefaultValue = driver.findElement(By.xpath(DefautValCal.AdjustDefaultValue_Link_Xpath));
		js.executeScript("arguments[0].click();", AdjustDefaultValue);
		Thread.sleep(1000);
	}
	
	public static void DefaultCalculatorValues(WebDriver driver) throws InterruptedException {
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		
		// Excel Reader methods to read data from excel sheet and store in String variables	
		String OtherIncome = sheet.getRow(1).getCell(8).getStringCellValue().toString();
		String RetirementYears = sheet.getRow(1).getCell(9).getStringCellValue().toString();
		String ExpectedInflation = sheet.getRow(1).getCell(10).getStringCellValue().toString();
		String PercentOfFinalAnnual  = sheet.getRow(1).getCell(11).getStringCellValue().toString();
		String PreRetirement = sheet.getRow(1).getCell(12).getStringCellValue().toString();
		String PostRetirement = sheet.getRow(1).getCell(13).getStringCellValue().toString();
		
		// Default calculator values fields

		WebElement OtherIncome_TXT = driver.findElement(By.xpath(DefautValCal.RetirementIncome_TxtBox_Xpath));
		js.executeScript("arguments[0].value='"+OtherIncome+"'"+"",OtherIncome_TXT);
		
		WebElement RetirementYears_TXT = driver.findElement(By.xpath(DefautValCal.Retirementduration_TxtBox_Xpath));
		js.executeScript("arguments[0].value='"+RetirementYears+"'"+"",RetirementYears_TXT);
		
		WebElement Inflation_RadioBtn = driver.findElement(By.xpath(DefautValCal.IncomeIncreasewithInflation_Radiobtn_Xpath));
		js.executeScript("arguments[0].click();", Inflation_RadioBtn);
		
		WebElement ExpectedInflation_TXT = driver.findElement(By.xpath(DefautValCal.ExpectedInflation_TxtBox_Xpath));
		js.executeScript("arguments[0].value='"+ExpectedInflation+"'"+"",ExpectedInflation_TXT);
		
		WebElement PercentOfFinalAnnual_TXT = driver.findElement(By.xpath(DefautValCal.RetirementAnnualIncome_TxtBox_Xpath));
		js.executeScript("arguments[0].value='"+PercentOfFinalAnnual+"'"+"",PercentOfFinalAnnual_TXT);
		
		WebElement PreRetirement_TXT = driver.findElement(By.xpath(DefautValCal.PreRetirementROI_TxtBox_Xpath));
		js.executeScript("arguments[0].value='"+PreRetirement+"'"+"",PreRetirement_TXT);
		
		WebElement PostRetirement_TXT = driver.findElement(By.xpath(DefautValCal.PostRetirementROI_TxtBox_Xpath));
		js.executeScript("arguments[0].value='"+PostRetirement+"'"+"",PostRetirement_TXT);
		
		// To save the above added field values "Save Changes button is clicked"
		WebElement SaveChanges = driver.findElement(By.xpath(DefautValCal.SaveChanges_Button_Xpath));
		js.executeScript("arguments[0].click();", SaveChanges);
		Thread.sleep(1000);
		
		
		// Click on Calculate button to see the retirement savings
		WebElement Calculate = driver.findElement(By.xpath(PreRetirmentCal.Calculate_Button_Xpath));
		js.executeScript("arguments[0].click();", Calculate);
		Thread.sleep(1000);

	}

}
